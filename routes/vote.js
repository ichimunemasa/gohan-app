
var model = require('../model/vote_db.js');
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
  if(req.body.sex == "man"){
    model.query('UPDATE member SET num_of_votes_male = num_of_votes_male + 1 WHERE name = ?', [req.body.name], function(err,result){
      if(err){
        res.send(err);
      }else {
        res.render('post',{});
      }
    });
  }else{
    model.query('UPDATE member SET num_of_votes_female = num_of_votes_female + 1 WHERE name = ?', [req.body.name], function(err,result){
      if(err){
        res.send(err);
      }else {
        res.render('post',{});
      }
    });
  }
};