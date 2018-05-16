var db = require("../models");
var monstersLow = require("../monsters/monsterslow.js");
var monstersMed = require("../monsters/monstersmedium.js");
var monstersHigh = require("../monsters/monstershigh.js");

module.exports = function(app) {
	app.post("/api/characters", function(req, res){
		db.Character.create(req.body)
		.then(function(dbCharacter){
			res.redirect("/menu")
		})
	})

	app.get("/api/characters", function(req, res){
		db.Character.findAll({
<<<<<<< HEAD
			// where: {
			// 	user_owner: req.body.id
			// }
		})
		.then(function(dbCharacter){
			// res.render(dbCharacter);
			console.log(dbCharacter);
		});
	});	
=======
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
>>>>>>> da66718751d2594f9382221d63da0c07e3ed888f

	app.put("/api/updatecharacter", function(req,res){
		db.Character.findOne({
			where: {
<<<<<<< HEAD
				user_owner: req.body.id
=======
				user_id: req.body.user_id
			},
			defaults: {
				id_token: req.body.id_token,
				user_name: req.body.user_name,
				user_email: req.body.user_email,
				user_photo: req.body.user_photo
>>>>>>> da66718751d2594f9382221d63da0c07e3ed888f
			}
		})
<<<<<<< HEAD
		.then(function(updateCharacter){
			res.send(updateCharacter);
		})
	})
=======
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

	app.get("/api/fightCharacter", function(req, res){
		var cookie = req.cookies.characterID;
		db.Character.findAll({
			where: {
				id: cookie
			}
		}).then(function(dbCharacter){
			res.send(dbCharacter);
		})
	});

	function pickRandom(object) {
		var slotPick = object[(Math.floor(Math.random() * object.length))];
		return slotPick;
	}
>>>>>>> da66718751d2594f9382221d63da0c07e3ed888f
	// end
};