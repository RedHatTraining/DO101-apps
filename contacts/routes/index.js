const express = require('express');
const router = express.Router();
const { pgconn } = require('../db/config')

/* GET home page. */
router.get('/', function(req, res) {
  pgconn.query('SELECT * FROM contacts', function(err,results) {
    if (err) {
      throw err
    }
    let contacts = results.rows;
    console.log(contacts);
    res.render('index', { contacts: contacts, title: 'Contact List' });
  })
});

module.exports = router;
