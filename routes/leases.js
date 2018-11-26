const express = require('express')

const router = express.Router()

const leasesController = require('../controllers/leases')

router.get('/', leasesController.getLeases)

router.get('/:id', leasesController.getLeaseDetails)

module.exports = router
