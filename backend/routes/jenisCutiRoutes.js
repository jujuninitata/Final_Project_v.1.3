const router = require('express').Router();
const { getAllJenisCuti } = require('./../controllers/jenisCutiController');

router.get('/', getAllJenisCuti);

module.exports = router;
