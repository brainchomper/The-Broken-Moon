var db = require("../models");

module.exports = function(app) {
	app.post("/api/characters", function(req, res){
		console.log("req.body", req.body)
		db.Character.create(req.body)
		.then(function(dbCharacter){
			res.redirect("/menu")
		})
	})

	app.get("/api/characters", function(req, res){
		db.Character.findAll({
		
		})
		.then(function(dbCharacter){
			res.json(dbCharacter);
		});
	});
console.log("ugh")
	// end
};
