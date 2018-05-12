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
		where:{
		user_owner: 1}
		})
		.then(function(dbCharacter){
			console.log(dbCharacter)
			res.render("character_selector" , dbCharacter);
			res.render()
		});
	});

	// end
};
