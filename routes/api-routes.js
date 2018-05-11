var db = require("../models");

module.exports = function(app) {
	app.post("/api/characters", function(req, res){
		db.Character.create(req.body)
		.then(function(dbCharacter){
			res.redirect("/menu")
		})
	})

	app.get("/api/characters", function(req, res){
		db.Character.findAll({
			where: {
				user_owner: req.body.id
			}
		})
		.then(function(dbCharacter){
			res.render(dbCharacter);
		});
	});

	app.post("/api/user", function(req, res){
		db.users.add({
			user_id: req.body.user_id,
			user_name: req.body.user_name,
			user_email: req.body.user_email,
			user_photo: req.body.user_photo
		}).then(function(dbuser){
			res.redirect("/menu")
		})
	})
	// end
};
