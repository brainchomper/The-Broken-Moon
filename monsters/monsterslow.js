// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var monstersLow = [
	{
		"name": "Goblin",
		"photo": "",
		"scores": [
			"Goblin", //name
			2, //strength
			2, //agility
			1, //intelligence
			5, //hitpoints
			3 //experience points
		
		]
	},
	{
		"name": "Kobold",
		"photo": "",
		"scores": [
			"Kobold", //name
			2, //strength
			1, //agility
			2, //intelligence
			5, //hitpoints
			3 //experience points
		]
	},
	{
		"name": "Slime",
		"photo": "/slime.png",
		"scores": [

			"Slime", //name
			3, //strength
			2, //agility
			1, //intelligence
			5, //hitpoints
			3 //experience points

		]
	},
	{
		"name": "Wolf",
		"photo": "/wolf.png",
		"scores": [
			"Wolf", //name
			2, //strength
			4, //agility
			1, //intelligence
			5, //hitpoints
			3 //experience points

		]
	},
	{
		"name": "Skeleton",
		"photo": "/skeleman.png",
		"scores": [

			"Skeleman", //name
			4, //strength
			2, //agility
			1, //intelligence
			5, //hitpoints
			3 //experience points

		]
	},
	{
		"name": "Zombie",
		"photo": "/zombie.png",
		"scores": [
			"Zombie", //name
			3, //strength
			1, //agility
			1, //intelligence
			5, //hitpoints
			3 //experience points

		]
	},
	{
		"name": "Fairy",
		"photo": "/fairy.png",
		"scores": [
			"Goblin", //name
			2, //strength
			4, //agility
			2, //intelligence
			5, //hitpoints
			3 //experience points

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = monstersLow;