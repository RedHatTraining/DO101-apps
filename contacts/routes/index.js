const express = require('express');
const router = express.Router();
const { pgconn } = require('../db/config')

/* GET home page. */
router.get('/', function(req, res) {
  pgconn.query('SELECT * FROM contacts', function(err,results) {
    if (err) {
      console.log(err);
      res.render('index', { error: 'Database connection failure! '+err.stack, contacts: null, title: 'Contact List' });
    }
    else {
      let contacts = results.rows;
      console.log(contacts);
      res.render('index', { error: null, contacts: contacts, title: 'Contact List' });
    }
  })
});

module.exports = router;
