const mongoose = require('mongoose') //mongo
const shortId = require('shortid') //shortid

const shortUrlSchema = new mongoose.Schema({ //object di mongo
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate // fungsi generate url dari shortid
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)