// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var bosses = [
	{
		"name": "Sloth",
		"photo": "/sloth.png",
		"scores": [
			"Sloth", //name
			7, //strength
			3, //agility
			4, //intelligence
			12, //hitpoints
			12 //experience points

		]
	},
	{
		"name": "Envy",
		"photo": "/envy.png",
		"scores": [
			"Envy", //name
			8, //strength
			10, //agility
			8, //intelligence
			20, //hitpoints
			18 //experience points

		]
	},
	{
		"name": "Lust",
		"photo": "/lust.png",
		"scores": [
			"Lust", //name
			10, //strength
			9, //agility
			7, //intelligence
			30, //hitpoints
			24 //experience points

		]
	},
	{
		"name": "Gluttony",
		"photo": "/gluttony.png",
		"scores": [
			"Necromancer", //name
			15, //strength
			9, //agility
			8, //intelligence
			50, //hitpoints
			30 //experience points

		]
	},
	{
		"name": "Greed",
		"photo": "/greed.png",
		"scores": [
			"Greed", //name
			18, //strength
			13, //agility
			16, //intelligence
			58, //hitpoints
			37 //experience points

		]
	},
	{
		"name": "Wrath",
		"photo": "/wrath.png",
		"scores": [
			"Wrath", //name
			25, //strength
			20, //agility
			17, //intelligence
			65, //hitpoints
			45 //experience points

		]
	},
	{
		"name": "Pride",
		"photo": "/pride.png",
		"scores": [
			"Pride", //name
			35, //strength
			30, //agility
			30, //intelligence
			90, //hitpoints
			65 //experience points

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = bosses;