var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/GridfDB');
var conn = mongoose.connection;
 
var fs = require('fs');
 
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
 
conn.once('open', function () {
    console.log('open');
    var gfs = Grid(conn.db);

    //write content to file system
	var fs_write_stream = fs.createWriteStream('write.txt');
	 
	//read from mongodb
	var readstream = gfs.createReadStream({
	     filename: 'mongo_file.txt'
	});
	readstream.pipe(fs_write_stream);
	fs_write_stream.on('close', function () {
	     console.log('file has been written fully!');
	});
});