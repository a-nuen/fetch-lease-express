const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leaseDetailSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  start_date: {
    type: String,
    required: true
  },
  end_date: {
    type: String,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  payment_day: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('LeaseDetail', leaseDetailSchema)
