function Character(name, strength, agility, intelligence, hitpoints, xp) {
	this.name = name;
	this.strength = strength;
	this.agility = agility;
	this.intelligence = intelligence;
	this.hitpoints = hitpoints;
	this.xp = xp;

	// method which prints all of the stats for a character
	this.printStats = function () {
		console.log("Name: " + this.name + "\nStrength: " +
			this.strength + "\nAgility: " + this.agility + "\nIntelligence: " + this.intelligence + "\nHitPoints: " + this.hitpoints + "\nExperience Points : " + this.xp);
		console.log("\n-------------\n");
	};

	// method which determines whether or not a character's "hitpoints" are less than zero
	// and returns true or false depending upon the outcome
	this.isAlive = function () {
		if (this.hitpoints > 0) {
			console.log(this.name + " is still alive!");
			console.log("\n-------------\n");
			return true;
		}
		console.log(this.name + " has died!");
		return false;
	};

	// method which takes in a second object and decreases their "hitpoints" by this character's strength
	this.attack = function (character2) {
		character2.hitpoints -= this.strength;
	};

	// method which increases this character's stats when called
	this.levelUp = function () {
		this.strength += 5;
		this.agility += 5;
		this.intelligence += 5;
		this.hitpoints += 5;
	};
}

// creates two unique characters using the "character" constructor
var warrior = new Character("Crusher", 25, 15, 20, 10, 0);
var rogue = new Character("Dodger", 20, 25, 15, 10, 0);
var wizard = new Character("Merlin", 15, 20, 25, 10, 0);
var monster = new Character("Wolf", 5, 10, 10, 5);

warrior.printStats();
rogue.printStats();
wizard.printStats();

rogue.attack(monster);
monster.printStats();
monster.isAlive();

rogue.levelUp();
rogue.printStats();

// while loop that continues to run so long as both characters' "hitpoints" are above zero
while (monster.isAlive() === true && rogue.isAlive() === true) {
	// characters deal damage to one another
	monster.attack(rogue);
	rogue.attack(monster);
	// prints stats to show changes
	monster.printStats();
	rogue.printStats();
}

if (monster.isAlive() === false && rogue.isAlive() === true) {
	rogue.xp + 5;
};
if (rogue.xp <= 5) {
	rogue.levelUp();
};