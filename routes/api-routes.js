var db = require("../models");

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
				user_owner: req.body.id
			}
		})
			.then(function (dbCharacter) {
				res.render(dbCharacter);
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
			console.log("&&&&&&&", dbuser)
				res.json(dbuser)
			});
	});

	//end
};
