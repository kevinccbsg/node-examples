var mongoose = require('mongoose');
var express = require('express');
var multer = require('multer');
var app = express();
var Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/GridfDB');
var conn = mongoose.connection;
var fs = require('fs');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var bodyParser = require('body-parser');
var formidable = require('formidable');
var util = require('util');
var concatStream = require('concat-stream');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/uploads', express.static(__dirname +'/uploads'));
//app.use(multer({dest: './uploads/'}))

app.post('/upload', function(req, res, next) {
	var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        console.log(fields);
        console.log(files);
    	var dirname = require('path').dirname(__dirname);
        var filename = files.files.name;
		var path = files.files.path;
		var type = files.files.type;
        var lifnr = fields.lifnr;
        var system = fields.system;
        var subsystem = fields.subsystem;

		var read_stream =  fs.createReadStream(path);

		var Grid = require('gridfs-stream');
		Grid.mongo = mongoose.mongo;

		var gfs = Grid(conn.db);

		var writestream = gfs.createWriteStream({
			filename: filename,
            content_type: type,
            metadata: {
                lifnr: lifnr,
                system: system,
                subsystem: subsystem
            }
		});
		read_stream.pipe(writestream);
        res.json({ filename: filename });
		console.log(files.files.name);
		next();
    });
	/*
	*/
});
app.get('/uploads', function (req, res, next) {
    var gfs = Grid(conn.db);
    var filename = req.query.filename;
    var lifnr = req.query.lifnr;
    var system = req.query.system;
    var subsystem = req.query.subsystem;
    var jsonSearch = {
        metadata: {
            lifnr: lifnr,
            system: system,
            subsystem: subsystem
        }
    };
    gfs.files.find(jsonSearch).toArray(function (err, files) {
		
    	console.log(files);
        if (err) {
            res.json(err);
        }
        if (files) {
            var read_stream = gfs.createReadStream({filename: filename});
            read_stream.pipe(res);
            console.log(typeof(read_stream));
            console.log(read_stream);
        } else {
            res.json('File Not Found');
        }
    });
});
/*conn.once('open', function () {
    console.log('open');
    var gfs = Grid(conn.db);
 
    // streaming to gridfs
    //filename to store in mongodb
    var writestream = gfs.createWriteStream({
        filename: 'prueba.txt'
    });
    fs.createReadStream('./prueba.txt').pipe(writestream);
 
    writestream.on('close', function (file) {
        // do something with `file`
        console.log(file.filename + 'Written To DB');
    });
});*/
app.listen(3000, () => {
	console.log('listen');
})
