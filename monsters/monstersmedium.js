// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// ===============================================================================
var monstersMedium = [
	{
		"name": "Necromancer",
		"photo": "",
		"scores": [
			hp = 10,
			str = 5,
			agi = 3,
			int = 5,
			exp = 6
		
		]
	},
	{
		"name": "Gorgon",
		"photo": "/gorgon.png",
		"scores": [
			hp = 10,
			str = 6,
			agi = 3,
			int = 4,
			exp = 6

		]
	},
	{
		"name": "Gunslinger",
		"photo": "/gunslinger.png",
		"scores": [
			hp = 10,
			str = 5,
			agi = 6,
			int = 3,
			exp = 6

		]
	},
	{
		"name": "Bear",
		"photo": "",
		"scores": [
			hp = 10,
			str = 7,
			agi = 4,
			int = 2,
			exp = 6

		]
	},
	{
		"name": "Mummy",
		"photo": "/mummy.png",
		"scores": [
			hp = 10,
			str = 5,
			agi = 3,
			int = 3,
			exp = 6

		]
	},
	{
		"name": "Guard",
		"photo": "",
		"scores": [
			hp = 10,
			str = 6,
			agi = 5,
			int = 3,
			exp = 6

		]
	},
	{
		"name": "Dune-Stalker",
		"photo": "",
		"scores": [
			hp = 10,
			str = 4,
			agi = 7,
			int = 7,
			exp = 6

		]
	},
]


// Note how we export the array. This makes it accessible to other files using require.
module.exports = monstersMedium;