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

	// end
};
