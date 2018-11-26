const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const leaseRoutes = require('./routes/leases')
const app = express()

app.use(cors())

app.use('/leases', leaseRoutes)

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})

const port = process.env.PORT || 8080

mongoose
  .connect(
    process.env.DB_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(port, () =>
      console.log('Connected to DB! Server is now listening on port: ' + port)
    )
  })
  .catch(err => console.log(err))
