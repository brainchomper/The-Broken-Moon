module.exports =function (sequelize, DataTypes){
	var User = sequelize.define("User", {
		user_id:{
			type: DataTypes.STRING
		},
		user_name: {
			type: DataTypes.STRING,
			validate: {
				notNull: true
			}
		},
		user_email: {
			type: DataTypes.STRING,
			validate:{
			isEmail: true,           // checks for email format (foo@bar.com)
			}
		},
		user_photo:{
			type: DataTypes.STRING
		}
	})

	return User;
};