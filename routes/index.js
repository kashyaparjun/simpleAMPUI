var express = require('express');
var router = express.Router();
const moment = require('moment');

videos = [];


router.get('/', function(req, res, next) {
  res.render('index',
    {
      user: "Help requests",
      title:"Help!",
      videos: videos
    });
});

/*
data incoming format:
{
  "secureID": "secureTY",
  "location": "Some-String-Here",
  "userName": "User-Name-Here"
}
*/

router.post('/temp/', function(req, res, next) {
  //if(req.body.secureID=="secureTY"){
    //console.log(req.body.videoID);
    var t = {
      id: videos.length + 1,
      location: req.body.location,
      userName: req.body.userName,
      timestamp: moment().unix(),
      timestampStr: moment().format()
    }
    videos.push(t);
    res.status(200).json({"res": t});
  //}
  
});

router.post('/clear/', (req, res, next) => {
  //if(req.body.secureID=="secureTY"){
    videos = [];
    res.status(200).json({"clear": "success"});
  //}
});

module.exports = router;
