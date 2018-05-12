
// list of variables that we'll need for the character build
var hp = 0;
var str = 0;
var agi = 0;
var int = 0;
var charImage = '';


$('#submitCharacter').on("click", function(event){
	// preventing the default
	console.log("the button was clicked");
	event.preventDefault();
	// make a new object for the api call

	//get the values from the page and login info
	var charClass = $("#characterClass option:selected").text();
console.log(charClass)
evaluateClass(charClass);

	var newChar = {
		// we need to access this from the local storage 
		user_owner: 1,

		character_class: charClass,
		character_name1: $("#charName1").val(),
		character_name2:  $("#charName2").val(),
		character_img: charImage,
		level: 1,
		hp: hp,
		str: str,
		agi: agi,
		int: int,
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
function evaluateClass(classInput){
	console.log("evaluating")
	switch(classInput){
		case "Wizard": {
			hp = 10;
			str = 5;
			agi = 10;
			int = 20;
			charImage: "/assets/characterimages/wizard.png";


			console.log("HP, wizard" , hp)
		};

		break;
		case "Rogue":{
			hp = 10;
			str = 10;
			agi =20;
			int = 5;
			charImage: "need a file name"
		}
		console.log("HP, rogue" , hp)

		break;
		case "Warrior": {
			hp =10;
			str =20;
			agi = 5;
			int = 10;
			charImage: "need a file name"
			console.log("HP," , hp)

		}
		break;
		default:
		console.log('dafuq')
	}

}
