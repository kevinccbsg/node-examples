'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
// Multer storage function
// object with two functions
// destinantion: 
//		Preams: request, file, callback
// filename: 
//		Params: request, file, callback
let storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './uploads');
	},
	filename: (req, file, callback) => {
		callback(null, file.fieldname + '-' + Date.now());
	}
});

// Upload variable use object storage of multer and the size of Files
// The second parameter is the name of form field
let upload = multer({ storage: storage }).array('userPhoto', 10);

/// Middlewares
app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/api/photo', (req, res, next) => {
	upload(req, res, (err) => {
		console.log(req.body);
		console.log(req.files);
		if (err) {
			return res.end('Error uploading');
		}
		res.end('File is uploaded');
	})
});

// Listening ports
app.listen(3000, () => {
	console.log('Listening on port 3000');
})
