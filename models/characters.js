module.exports =function (sequelize, DataTypes){
	var Character = sequelize.define("Character", {
		user_owner: DataTypes.INTEGER,
		character_class: DataTypes.STRING,
		// end character_class
		character_name1: {
			type: DataTypes.STRING,
			validate: {
				is: ["^[a-z]+$",'i'],
				notNull: true
			}
		},
		// end character_name1
		character_name2: {
			type: DataTypes.STRING,
			validate: {
				is: ["^[a-z]+$",'i'],
				notNull: true
			}
		},
		// end character_name2
		hp: DataTypes.INTEGER,
		// end hp
		str: DataTypes.INTEGER,
		// end str
		agi: DataTypes.INTEGER,
		// end agi
		int: DataTypes.INTEGER,
		// end int
		exp: DataTypes.INTEGER,
		loot: {
			type: DataTypes.TEXT
			// can we use the JSON object format within this?  Would it be better to use a relationship for one to many for the character to the loot?
		}
		// end loot
	})

	return Character;
};