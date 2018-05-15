var db = require("../models");
var monstersLow = require("../monsters/monsterslow.js");
var monstersMed = require("../monsters/monstersmedium.js");
var monstersHigh = require("../monsters/monstershigh.js");


console.log('----- db.User.', db.User);

module.exports = function (app) {
	app.post("/api/characters", function (req, res) {

		db.Character.create(req.body)
			.then(function (dbCharacter) {
				res.redirect("/menu")
			})
	})

	app.get("/api/characters", function (req, res) {
		db.Character.findAll({
				where: {
					user_owner: 1
				}
			})
			.then(function (dbCharacter) {
				console.log(dbCharacter)
				res.render("character_selector", dbCharacter);
			});
	});

	// user creation

	app.post("/api/user", function (req, res) {
		db.User.findOrCreate({
			where: {
				id_token: req.body.id_token
			},
			defaults: {
				user_name: req.body.user_name,
				user_email: req.body.user_email,
				user_photo: req.body.user_photo
			}

		}).then(function (dbuser) {
			res.json(dbuser)
		})
	});


	app.get("/api/user/info", function (req, res) {
		db.User.find({
			where: {
				id_token: req.query.id_token
			}
		}).then(function (dbuser) {
			res.json(dbuser)
		});
	});

	app.get("/api/findEasy", function (req, res) {
		var monster = pickRandom(monstersLow);
		console.log("monster", monster);
		res.send(monster);
	});

	app.get("/api/findMedium", function (req, res) {
		var monster = pickRandom(monstersMed);
		console.log("monster", monster);
		res.send(monster);
	});

	app.get("/api/findHard", function (req, res) {
		var monster = pickRandom(monstersHigh);
		console.log("monster", monster);
		res.send(monster);
	});

	app.get("/api/findBoss", function (req, res) {
		var monster = pickRandom(monstersHigh);
		console.log("monster", monster);
		res.send(monster);
	});

	function pickRandom(object) {
		var slotPick = object[(Math.floor(Math.random() * object.length))];
		return slotPick;
	}
	// end
};