function Character(obj) {
	this.charClass = obj.character_class
	this.name = obj.character_name1;
	this.level = obj.level;
	this.hp = obj.hp;
	this.str = obj.str;
	this.agi = obj.agi;
	this.int = obj.int;
	this.exp = obj.exp;
	this.loot = obj.loot;

	// method which prints all of the stats for a character
	this.printStats = function () {
		console.log(
		"\nClass: " + this.charClass +
		"\nName: " + this.name + 
		"\nLevel: " + this.level + 
		"\nHitPoints: " + this.hp + 
		"\nStrength: " + this.str + 
		"\nAgility: " + this.agi + 
		"\nIntelligence: " + this.int + 
		"\nExperience Points : " + this.exp + 
		"\nLoot: " + this.loot);
		console.log("\n-------------\n");
	};

	// method which determines whether or not a character's "hitpoints" are less than zero
	// and returns true or false depending upon the outcome
	this.isAlive = function () {
		if (this.hp > 0) {
			console.log(this.name + " is still alive!");
			console.log("\n-------------\n");
			return true;
		}
		console.log(this.name + " has died!");
		return false;
	};

	// method which takes in a second object and decreases their "hitpoints" by this character's strength
	this.attack = function (character2) {
		character2.hp -= this.str;
	};

	// method which increases this character's stats when called
	this.levelUp = function () {
		this.str += 5;
		this.agi += 5;
		this.int += 5;
		this.hp += 5;
		this.loot += 50;
	};
}

function Monster(obj, array) {
	this.hp = array[0];
	this.str = array[1];
	this.agi = array[2];
	this.int = array[3];
	this.name = obj.name;

	// method which prints all of the stats for a character
	this.printStats = function () {
		console.log("Name: " + this.name + "\nStrength: " +
			this.str + "\nAgility: " + this.agi + "\nIntelligence: " + this.int + "\nHitPoints: " + this.hp);
		console.log("\n-------------\n");
	};

	// method which determines whether or not a character's "hitpoints" are less than zero
	// and returns true or false depending upon the outcome
	this.isAlive = function () {
		if (this.hp > 0) {
			console.log(this.name + " is still alive!");
			console.log("\n-------------\n");
			return true;
		}
		console.log(this.name + " has died!");
		return false;
	};

	// method which takes in a second object and decreases their "hitpoints" by this character's strength
	this.attack = function (character2) {
		character2.hp -= this.str;
	};
}


// creates two unique characters using the "character" constructor
var character = new Character("wizard", "bob", 1, 50, 5, 10, 4, 10, 0);
var monster = new Monster("Sloth", 5, 3, 1, 30);


function battleStart() {
	// while loop that continues to run so long as both characters' "hitpoints" are above zero
	while (monster.isAlive() === true && character.isAlive() === true) {
		if (character.agi < monster.agi) {
			monster.attack(character);
			character.attack(monster);
		} else {
			character.attack(monster);
			monster.attack(character);
		}
	}

	if (monster.isAlive() === false && character.isAlive() === true) {
		character.exp + 5;
	};
	if (character.exp <= 5) {
		character.levelUp();
	};

}

battleStart()