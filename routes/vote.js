
var model = require('../model/vote_db.js');

exports.index = function(req, res){
  res.send("Test");
};

//Content-Type: application/json
/*
{
  "user" : "taro",
  "sex" : "male",
  "vote" : "taro"
}
*/
exports.record = function(req, res){
  var myrow;
  if(req.body.sex == "male"){
    model.query('UPDATE member SET num_of_votes_male = num_of_votes_male + 1 WHERE name = ?', [req.body.name]);
  }else{
    model.query('UPDATE member SET num_of_votes_female = num_of_votes_female + 1 WHERE name = ?', [req.body.name]);
  }
  res.send(req.body);
};


exports.graph = function(req, res){
  res.render('../views/graph');
};
