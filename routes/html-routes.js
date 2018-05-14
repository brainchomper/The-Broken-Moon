var path = require("path");
var db = require('../models')

module.exports = function (app) {

	// index route loads view.html
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/menu', function (req, res) {
		res.render('menu');
	});

	app.get('/character_creator', function(req, res){
		res.render('character_creator');
	});

	app.get('/character_selector', function (req, res) {
		console.log
		db.Character.findAll({
			where: 
			{
				user_owner : 1
			}
		}).then(function(dbResults){
			var hbsObj = 
			{
				characters: dbResults
			}
			res.render('character_selector', hbsObj);
		});
	
	});

	app.get('/fight_screen', function (req, res) {

		
			res.render("fight_screen");

	});

	app.get('/game_over', function (req, res) {
		res.render('game_over');


	})};

