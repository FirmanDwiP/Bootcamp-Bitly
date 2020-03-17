const express = require('express') //express
const mongoose = require('mongoose') //menggunakan mongo
const ShortUrl = require('./models/shortUrl') //fungsi short url ada di program models/shortUrl
const app = express()//express

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
}) //mongoo connect

app.set('view engine', 'ejs') // menjalankan drontend
app.use(express.urlencoded({ extended: false })) // fungsi agar tidak deprecated

// app.get('/', (req, res) => { 
//     res.render('index')
// })
// hasil coba

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
}) // fungsi get

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl }) // post dari fullUrl

  res.redirect('/')
}) // fungsi post

app.get('/:shortUrl', async (req, res) => { // fungsi apabila shorturl di klik
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save() // inrement click

  res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000); // port akan berjalan di http://localhost:5000/