// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var monstersMedium = [
	{
		"name": "Necromancer",
		"photo": "",
		"scores": [
			"Necromancer", //name
			4, //strength
			3, //agility
			5, //intelligence
			10, //hitpoints
			10 //experience points
		
		]
	},
	{
		"name": "Gorgon",
		"photo": "/gorgon.png",
		"scores": [
			"Gorgon", //name
			5, //strength
			3, //agility
			4, //intelligence
			10, //hitpoints
			10 //experience points

		]
	},
	{
		"name": "Gunslinger",
		"photo": "/gunslinger.png",
		"scores": [
			"Gunslinger", //name
			3, //strength
			5, //agility
			3, //intelligence
			10, //hitpoints
			10 //experience points

		]
	},
	{
		"name": "Bear",
		"photo": "",
		"scores": [
			"Bear", //name
			5, //strength
			4, //agility
			2, //intelligence
			10, //hitpoints
			10 //experience points

		]
	},
	{
		"name": "Mummy",
		"photo": "/mummy.png",
		"scores": [
			"Mummy", //name
			5, //strength
			3, //agility
			3, //intelligence
			10, //hitpoints
			10 //experience points

		]
	},
	{
		"name": "Guard",
		"photo": "",
		"scores": [
			"Guard", //name
			5, //strength
			5, //agility
			3, //intelligence
			10, //hitpoints
			10 //experience points

		]
	},
	{
		"name": "Dune-Stalker",
		"photo": "",
		"scores": [
			"Dune-Stalker", //name
			4, //strength
			5, //agility
			5, //intelligence
			10, //hitpoints
			10 //experience points

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = monstersMedium;