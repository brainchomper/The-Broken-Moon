module.exports =function (sequelize, DataTypes){
	var User = sequelize.define("User", {
		user_name: {
			type: DataTypes.STRING,
			validate: {
				notNull: true
			}
		},
		userEmail: {
			type: DataTypes.STRING,
			validate:{
			isEmail: true,           // checks for email format (foo@bar.com)
			}
		},
		password: DataTypes.STRING,
		userPhoto:{
			type: DataTypes.STRING
		}
	})

	return User;
};