$('#submitCharacter').on("click", function(event){
	// preventing the default
	event.preventDefault();
	// make a new object for the api call

	//get the values from the page and login info
	var charClass = $("#characterClass option:selected");

evaluateClass(charClass);

	var newChar = {
		user_owner: ****figure this out****,
		characterClass: charClass,
		character_name1: $("#charName1").val(),
		character_name2:  $("#charName2").val(),

	}
});

var hp;
var str;
var agi;
var int;


function evaluateClass(classInput){
	switch(classInput){
		case "Wizard": {
			hp: 20;
			str: 5;
			agi: 10;
			int: 35;
		}
		break;
		case "Rogue":{
			hp: 30;
			str: 10;
			agi: 15;
			int: 10;
		}
		break;
		case "Warrior": {
			hp: 45;
			str: 20;
			agi: 15;

		}
	}

}
