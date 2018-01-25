
/*
 * GET home page.
 */

exports.view = function(req, res){
	var Ryan = req.params.userName;
	if (Ryan == undefined){
		Ryan = 'World';
	}

	console.log('Name is ' + Ryan);
	res.render('index', {
  	'name': Ryan
  });
};
