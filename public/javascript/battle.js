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

	// method which determines whether or not a character's "hitpoints" are less than zero
	// and returns true or false depending upon the outcome
	this.isAlive = function () {
		if (this.hp > 0) {
			return true;
		}
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
	this.name = obj;

	// method which determines whether or not a character's "hitpoints" are less than zero
	// and returns true or false depending upon the outcome
	this.isAlive = function () {
		if (this.hp > 0) {
			return true;
		}
		return false;
	};

	// method which takes in a second object and decreases their "hitpoints" by this character's strength
	this.attack = function (character2) {
		character2.hp -= this.str;
	};
}

function battle(obj1, obj2) {

	obj1.attack(obj2);
	obj2.attack(obj1);

	if (obj1.isAlive() &&  obj2.isAlive()){
		battle(obj1, obj2)
	}else if (obj1.isAlive() && !obj2.isAlive()){
		win(obj1)
	} else {
		lose();
	}

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

module.exports = battleStart();