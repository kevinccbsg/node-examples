'use strict'
const express = require('express')
const app = express()
const pug = require('pug')
const path = require('path')

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!'})
})

app.get('/api', (req, res) => {
  res.render('wat', { title: 'Hey', message: 'Hello api!'})
})

app.listen(3001, () => console.log('listen'))
