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
				user_id: req.body.user_id
			},
			defaults: {
				id_token: req.body.id_token,
				user_id: req.body.user_id,
				user_name: req.body.user_name,
				user_email: req.body.user_email,
				user_photo: req.body.user_photo
			}

		}).then(function (dbuser) {
			res.json(dbuser)
		})
	})

	// app.post("/api/user", function(req, res){
	// 	db.User.create({
	// 		user_id: req.body.user_id,
	// 		user_name: req.body.user_name,
	// 		user_email: req.body.user_email,
	// 		user_photo: req.body.user_photo
	// 	}).then(function(dbuser){
	// 		res.json(dbuser)
	// 	})
	// })
	// end
};
