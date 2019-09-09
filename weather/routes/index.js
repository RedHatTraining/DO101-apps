const express = require('express');
const router = express.Router();
const request = require('request');
require('dotenv').config();
const OWM_API_KEY = process.env.OWM_API_KEY || 'invalid_key';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { weather: null, err: null });
});

router.post('/get_weather', function (req,res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OWM_API_KEY}`;

  request(url, function (err, response, body) {
    if (err) {
      res.render('index', {weather: null, error: 'Error: Unable to invoke OpenWeatherMap API'});
    }
    else {
      let weather = JSON.parse(body);
      console.log('response from OpenWeatherMap API: ' + body);
      if(weather.cod == '404' && weather.main == undefined) {
        res.render('index', {weather: null, error: 'Error: Unknown city'});
      }
      else if (weather.cod == '401' && weather.main == undefined) {
        res.render('index', {weather: null, error: 'Error: Invalid API Key. Please see http://openweathermap.org/faq#error401 for more info.'});
      }
      else {
        res.render('index', {weather: weather, error: null});
      }
    }
  });
});

module.exports = router;
