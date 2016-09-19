'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const xlstojson = require('xls-to-json-lc');
const xlsxtojson = require('xlsx-to-json-lc');

// Encode json
app.use(bodyParser.json());
// storage multer
let storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './uploads');
	},
	filename: (req, file, callback) => {
		let datestamp = Date.now();
		callback(null, file.fieldname + '-' + datestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length-1]);
	}
});

let upload = multer({ 
	storage: storage ,
	fileFilter: (req, file, callback) => {
		if (['xls','xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1])) {
			return callback(new Error('Wrong extension type'));
		}
		callback(null, true);
	}
}).single('file');

app.post('/upload', (req, res, next) => {
	let exceltojson;
	upload(req, res, (err) => {
		console.log(req.file);
		if (err) {
			return res.json({error_code:1, err_desc:err});
		}
		if (!req.file) {
			return res.json({error_code:1, err_desc:'no file passed'});
		}
		if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx') {
			exceltojson = xlsxtojson;
		}
		else {
			exceltojson = xlstojson;
		}
		try {
			exceltojson({
				input: req.file.path,
				output: 'output.json',
				lowerCaseHeaders: true
			}, function (err, result) {
				if (errr) {
					return res.json({error_code:1,err_desc:err, data: null});
				}
				res.json({error_code:0,err_desc:null, data: result});
			});
		} catch (e) {
			res.json({error_code:1,err_desc:"Corupted excel file"});
		}
		console.log('File upload');
	});
});

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
	console.log('Listening port 3000');
});