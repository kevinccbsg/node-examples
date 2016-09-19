'use strict'
const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');

// cross origin
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

/* Serving static files */
app.use('/', express.static(__dirname + '../client'));
app.use(bodyParser.json());
let storage = multer.diskStorage({ 
	destination: (req, file, callback) => {
		callback(null, './uploads');
	},
	filename: (req, file, callback) => {
		let datetimestamp = Date.now();
		callback(null, file.fieldname + '-' 
			+ datetimestamp + '.' 
			+ file.originalname.split('.')[file.originalname.split('.').length -1]);
	}
});
let upload = multer({ storage: storage }).single('file');

app.post('/upload', (req, res, next) => {
	upload(req, res, (err) => {
		if (err) {
			return res.json({error_code:1, err_desc:err});
		}
		res.json({error_code:0, err_desc:null});
	});
});

app.listen(3000, () => {
	console.log('Listening Port 3000');
})