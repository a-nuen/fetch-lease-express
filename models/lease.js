const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leaseSchema = new Schema({
  leaseId: {
    type: String,
    required: true
  },
  tenant: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Lease', leaseSchema)
