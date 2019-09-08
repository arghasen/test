var express = require('express');
var router = express.Router();
const request = require('request');


var data =["Hello, Welcome to Venniset Demo","This is an encrypted Vault","Store your private keys here"]
var encryptedData =["uMzhdHO12ypQi21yPfNgKj5TD2MHxNUoc8vNiebm+0Q=","myX/C8IgIFARtJA3I4bO6FuWeIt1Bjk21Lr6Yb6x2xU=","OTLIl0XA7viWKW8LEG6LHbgr2GT+axxJ7RL7185CaVE="]
var vaultStatus=0
var JuanKey = "abc123"
var trustedKeys =["alex","ivy", "ben"]
var trustedParties=[0,0,0]
var thePercent = 0
/* GET home page. */
router.get('/', function(req, res, next) {
  // request('https://www.simcompanies.com/api/v1/market-ticker/2019-08-06T03:02:00.000Z/', { json: true }, (err, resp, body) => {
  // if (err) { return console.log(err); }
  // console.log(body)
  var cou =trustedParties[0]+trustedParties[1]+trustedParties[2]
  if (cou ==1)
   thePercent=50
  if(cou==2)
  {
      vaultStatus = 1
      thePercent=100
  }

  console.log(vaultStatus)

  var sendingData
  if(vaultStatus==1)
    sendingData=data
  else
    sendingData=encryptedData
 
  res.render('index', {  data:sendingData, vaultStatus:vaultStatus,trustedParties:trustedParties, thePercent:thePercent});
  // });
});

router.get('/trusted', function(req, res, next) {
  // request('https://www.simcompanies.com/api/v1/market-ticker/2019-08-06T03:02:00.000Z/', { json: true }, (err, resp, body) => {
  // if (err) { return console.log(err); }
  // console.log(body)
  res.render('trusted', { status:0});
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
  trustedParties=[0,0,0]
  thePercent = 0
  res.redirect('/')
  // });
});
router.get('/trustedOpen', function(req, res, next) {
  // request('https://www.simcompanies.com/api/v1/market-ticker/2019-08-06T03:02:00.000Z/', { json: true }, (err, resp, body) => {
  // if (err) { return console.log(err); }
  // console.log(body)
  n =req.query["usrname"]
  if (n=="alex")
    trustedParties[0] =1
  else if (n=="ivy")
    trustedParties[1] = 1
  else if (n=="ben")
    trustedParties[2] = 1

  res.render('trusted',{status:1})
  // });
});
module.exports = router;
