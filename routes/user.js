exports.index = function(req, res){
	var sex = req.params.sex;
	var name = req.params.name;
  	// user_idパラメタが正しければ画面に表示
  	if (name && sex) {
   	 	res.render('user', {sex:sex, name:name});
  	}
};
