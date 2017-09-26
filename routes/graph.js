//var app = require('http').createServer(handler),
//    io = require('socket.io').listen(app)
var model = require('../model/vote_db.js');

exports.index = function(req, res){
  res.render('graph', {});
};

exports.showGraph = function(socket){
  setInterval (function(){
    model.query('SELECT * FROM member', function(err, rows) {
      var dataPlotMale = [
        { label: "れい",  y: rows[0]["num_of_votes_male"],indexLabel:String(rows[0]["num_of_votes_male"])},
        { label: "いっちー",y: rows[1]["num_of_votes_male"],indexLabel:String(rows[1]["num_of_votes_male"]) },
        { label: "ももか",y: rows[2]["num_of_votes_male"],indexLabel:String(rows[2]["num_of_votes_male"]) },
        { label: "ひるた",y: rows[3]["num_of_votes_male"],indexLabel:String(rows[3]["num_of_votes_male"])},
        { label: "ぼみ", y: rows[4]["num_of_votes_male"],indexLabel:String(rows[4]["num_of_votes_male"]) },
        { label: "いっしゅー", y: rows[5]["num_of_votes_male"],indexLabel:String(rows[5]["num_of_votes_male"])}
      ];

      var dataPlotFemale = [
        { label: "れい",  y: rows[0]["num_of_votes_female"], indexLabel:String(rows[0]["num_of_votes_female"])},
        { label: "いっちー",y: rows[1]["num_of_votes_female"],indexLabel:String(rows[1]["num_of_votes_female"]) },
        { label: "ももか",y: rows[2]["num_of_votes_female"],indexLabel:String(rows[2]["num_of_votes_female"]) },
        { label: "ひるた",y: rows[3]["num_of_votes_female"], indexLabel:String(rows[3]["num_of_votes_female"])},
        { label: "ぼみ", y: rows[4]["num_of_votes_female"],indexLabel:String(rows[4]["num_of_votes_female"]) },
        { label: "いっしゅー", y: rows[5]["num_of_votes_female"],indexLabel:String(rows[5]["num_of_votes_female"])}
      ];
      //console.log(dataPlotFemale)
      //console.log(dataPlotMale)
      socket.emit('show_graph_male', dataPlotMale);
      socket.emit('show_graph_female', dataPlotFemale);
    });
  }, 1000);
};
