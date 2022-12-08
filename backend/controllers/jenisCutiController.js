const db = require('./../models');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const getAllJenisCuti = (req, res) => {
  db.jeniscuti
    .findAll()
    .then((jenisCuti) => {
      res.status(200).json({ message: 'All data', data: jenisCuti });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  getAllJenisCuti,
};
