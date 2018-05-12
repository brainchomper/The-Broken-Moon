$('#submitCharacter').on("click", function (event) {
	// preventing the default
	console.log("the button was clicked");
	event.preventDefault();
	// make a new object for the api call

	//get the values from the page and login info
	var charClass = $("#class option:selected").val();
	console.log(charClass)
	var charAttr = evaluateClass(charClass);
	var newChar = {
		// we need to access this from the local storage 
		user_owner: 1,

		character_class: charClass,
		character_name1: $("#charName1").val(),
		character_name2: $("#charName2").val(),
		character_img: charAttr.charImage,
		level: 1,
		hp: charAttr.hp,
		str: charAttr.str,
		agi: charAttr.agi,
		int: charAttr.int,
		exp: 0,
		loot: ""
	};
	console.log('newchar', newChar);
	$.ajax({
		url: "/api/characters",
		method: "POST",
		data: newChar,
		dataType: "json"
	}
	)
		.then(console.log("stuff"))
});


// uses a switchase on the classInput to change different attributes
function evaluateClass(classInput) {
	console.log("evaluating" + classInput);
	switch (classInput) {
		case "Wizard": {
			return {
				
				hp: 10,
				str: 5,
				agi: 10,
				int: 15,
				charImage: "/assets/characterimages/wizard.png"
			};


			console.log("HP, wizard", hp)
		};

			break;
		case "Rogue": {
			return {

				hp: 10,
				str: 10,
				agi: 15,
				int: 5,
				charImage: "/assets/characterimages/rogue.png"
			}
		}
			console.log("HP, rogue", hp)

			break;
		case "Warrior": {
			return {

				hp: 10,
				str: 15,
				agi: 5,
				int: 10,
				charImage: "/assets/characterimages/warrior.png"
			}
			console.log("HP,", hp)

		}
			break;
		default:
			console.log('dafuq')
	}

}
