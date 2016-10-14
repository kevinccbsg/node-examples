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

    var options = {filename : 'Koala.jpg'}; //can be done via _id as well
    gfs.exist(options, function (err, found) {
      if (err) return handleError(err);
      found ? console.log('File exists') : console.log('File does not exist');
    });
});