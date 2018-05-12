// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var monstersHigh = [
	{
		"name": "Dragon",
		"photo": "",
		"scores": [
			"Dragon", //name
			10, //strength
			7, //agility
			10, //intelligence
			15, //hitpoints
			15 //experience points
		
		]
	},
	{
		"name": "Demon",
		"photo": "/demon.png",
		"scores": [
			"Demon", //name
			10, //strength
			10, //agility
			5, //intelligence
			15, //hitpoints
			15 //experience points

		]
	},
	{
		"name": "Vampire",
		"photo": "/vampire.png",
		"scores": [
			"Necromancer", //name
			8, //strength
			10, //agility
			8, //intelligence
			15, //hitpoints
			15 //experience points

		]
	},
	{
		"name": "Eye",
		"photo": "/eye.png",
		"scores": [
			"Eye", //name
			7, //strength
			8, //agility
			10, //intelligence
			15, //hitpoints
			15 //experience points

		]
	},
	{
		"name": "Ghost",
		"photo": "/ghost.png",
		"scores": [
			"Ghost", //name
			7, //strength
			8, //agility
			8, //intelligence
			15, //hitpoints
			15 //experience points

		]
	},
	{
		"name": "Hell-Hound",
		"photo": "",
		"scores": [
			"Hell-Hound", //name
			10, //strength
			10, //agility
			5, //intelligence
			15, //hitpoints
			15 //experience points

		]
	},
	{
		"name": "Mind-Flayer",
		"photo": "",
		"scores": [
			"Necromancer", //name
			10, //strength
			10, //agility
			10, //intelligence
			15, //hitpoints
			15 //experience points

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = monstersHigh;