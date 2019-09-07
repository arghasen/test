var express = require('express');
var router = express.Router();
const request = require('request');


var data =["Hello, Welcome to Venniset Demo","This is an encrypted Vault","Store your private keys here"]
var encryptedData =["uMzhdHO12ypQi21yPfNgKj5TD2MHxNUoc8vNiebm+0Q=","myX/C8IgIFARtJA3I4bO6FuWeIt1Bjk21Lr6Yb6x2xU=","OTLIl0XA7viWKW8LEG6LHbgr2GT+axxJ7RL7185CaVE="]
var vaultStatus=0
var JuanKey = "abc123"
var alexKey = "abcd"
var ivykey ="abcd"
var benkey ="abcd"
/* GET home page. */
router.get('/', function(req, res, next) {
  // request('https://www.simcompanies.com/api/v1/market-ticker/2019-08-06T03:02:00.000Z/', { json: true }, (err, resp, body) => {
  // if (err) { return console.log(err); }
  // console.log(body)
  if(vaultStatus==1)
    data=data
  else
    data=encryptedData
  res.render('index', {  data:data });
  // });
});

router.get('/trusted', function(req, res, next) {
  // request('https://www.simcompanies.com/api/v1/market-ticker/2019-08-06T03:02:00.000Z/', { json: true }, (err, resp, body) => {
  // if (err) { return console.log(err); }
  // console.log(body)
  res.render('trusted', { });
  // });
});
router.get('/unlocked', function(req, res, next) {
  // request('https://www.simcompanies.com/api/v1/market-ticker/2019-08-06T03:02:00.000Z/', { json: true }, (err, resp, body) => {
  // if (err) { return console.log(err); }
  // console.log(body)
  vaultStatus = 1
  res.render('index', { data:data, vaultStatus:vaultStatus});
  // });
});
router.get('/locked', function(req, res, next) {
  // request('https://www.simcompanies.com/api/v1/market-ticker/2019-08-06T03:02:00.000Z/', { json: true }, (err, resp, body) => {
  // if (err) { return console.log(err); }
  // console.log(body)
  vaultStatus = 0
  res.redirect('/')
  // });
});
module.exports = router;
