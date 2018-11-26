const Lease = require('../models/lease')
const LeaseDetail = require('../models/lease')

exports.getLeases = async (req, res, next) => {
  try {
    const leases = await Lease.find()
    if (!leases) {
      res.status(204).json({ message: 'No leases found.' })
    }
    res.status(200).json(leases)
  } catch (err) {
    next(err)
  }
}

exports.getLeaseDetails = async (req, res, next) => {
  const id = req.params.id
  try {
    const lease = await LeaseDetail.findOne({ id: id })
    if (!lease) {
      res.status(204).json({ message: 'Lease not found.' })
    }
    res.status(200).json(lease)
  } catch (err) {
    next(err)
  }
}
