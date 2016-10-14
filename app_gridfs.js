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
app.use('/uploads', express.static(__dirname +'/uploads'));
//app.use(multer({dest: './uploads/'}))

app.post('/upload', function(req, res, next) {
	var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
    	var dirname = require('path').dirname(__dirname);
        var filename = files.files.name;
		var path = files.files.path;
		var type = files.files.type;

		var read_stream =  fs.createReadStream(path);

		var Grid = require('gridfs-stream');
		Grid.mongo = mongoose.mongo;

		var gfs = Grid(conn.db);

		var writestream = gfs.createWriteStream({
			filename: filename
		});
		read_stream.pipe(writestream);
		console.log(files.files.name);
		next();
    });
	/*
	*/
});

app.get('/uploads/:filename', function (req, res, next) {
      var gfs = Grid(conn.db);
      var filename = req.params.filename + '.jpg';
 		var writtable = concatStream();
       gfs.files.find({}).toArray(function (err, files) {
 		
 		console.log(files.type);
        if (err) {
            res.json(err);
        }
        if (files.length > 0) {
    		var mime = 'image/jpeg';
            res.set('Content-Type', mime);
            var read_stream = gfs.createReadStream({filename: filename});
            read_stream.pipe(res);
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
