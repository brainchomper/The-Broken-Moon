var path = require("path");

module.exports = function (app) {

	// index route loads view.html
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/menu', function (req, res){
		res.render('menu');
	});

	app.get('/character_creator', function(req, res){
		res.render('character_creator');
	});

	app.get('/fight_screen', function(req, res){
		res.render('fight_screen');
	});

	app.get('/game_over', function(req, res){
		res.render('game_over');
	});
// when the user goes to /character_selector
	app.get('/character_selector', function(req, res){
		// do a query against the Character db using the id as the reference
		db.Character.findAll({
			where: 
			{
				user_owner: req.body.id
			}
			// and then render the results
		}).then(function(charResults){
			res.render(charResults)
		})
		;
	});
};