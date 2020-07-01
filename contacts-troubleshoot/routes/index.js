const express = require('express');
const router = express.Router();
const { pgconn } = require('../db/config')

function get_contacts(res)
{
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
}

/* GET home page. */
router.get('/', function(req, res) {
  // Checking if the contacts table exists
  pgconn.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'contacts')",
  function(err,results) {
    if (err) {
      console.log(err);
      res.render('index', { error: 'Database connection failure! '+err.stack, contacts: null, title: 'Contact List' });
    }
    else if (results.rows[0].exists == false) {
      console.log("The contacts table does not exist. Creating it.");

      pgconn.query("create table contacts(id serial primary key,firstname varchar(30) not null,lastname varchar(30) not null, email varchar(30) not null)",
      function(err,results) {
        if (err) {
          console.log(err);
          res.render('index', { error: 'Database initialization failure! '+err.stack, contacts: null, title: 'Contact List' });
        }
        else {
          pgconn.query("insert into contacts(firstname, lastname, email) values ('Bilbo','Baggins','bilbo@theshire.com'),('Frodo','Baggins','frodo@theshire.com'),('Samwise','Gamgee','sam@theshire.com'),('Peregrin','Took','pippin@theshire.com'),('Meriadoc','Brandybuck','merry@theshire.com')",
          function(err,results) {
            if (err) {
              console.log(err);
              res.render('index', { error: 'Database initialization failure! '+err.stack, contacts: null, title: 'Contact List' });
            }
            else {
              get_contacts(res);
            }
          })
        }
      })
    }
    else {
      get_contacts(res); 
    }
  })
});

module.exports = router;
