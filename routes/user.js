exports.index = function(req, res){
	var folder = {'いちのき':'ichi', 'ももか':'momoka', 'いっしゅう':'issyuu', 'れい':'rei', 'ぼみ':'bomi', 'ひるた':'hiruta'};
	var fs = require('fs');
	var sex = req.params.sex;
	var name = req.params.name;
	var file = folder[name];
	fs.readdir(`./public/images/${file}/albam`, function (err, files) {
	    if (err) {
	        throw err;
	    }
	  	// user_idパラメタが正しければ画面に表示
	  	if (name && sex) {
	   	 	res.render('user', {sex:sex, name:name, files:files});
	  	}
  	});
};
