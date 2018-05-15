	// placeholder for the values we will get from the monster later
	var monsterScoreArr;

	//placeholder variable for the challenge rating of the fight
	var challengeRating;

	// globally scoped pseudo-react pieces:

	function buttonMaker(obj) {
		console.log("obj", obj)
		return $("<button>")
			.addClass("monsterSearchBtn")
			.attr("value", obj)
			.text("Fight " + obj + " Monster");
	}

	$(document).ready(function () {

		$('body').on("click", ".monsterSearchBtn", function (event) {
			console.log("Click click click click click for the api")
			event.preventDefault();
			APIcall(this);;
			challengeRating = this.value;
			console.log("challengeRating", challengeRating);
		})

		$('body').on("click", ".startOverBtn", function (event) {
			event.preventDefault();
			console.log("clicking the start over btn")
			// empty the fightRow
			$("#fightRow").empty();
			var eBtn = buttonMaker("Easy");
			var mBtn = buttonMaker("Medium");
			var hBtn = buttonMaker("Hard");
			$("#monsterDiv")
				.empty()
				.append(
					eBtn, mBtn, hBtn
				)
		});
		$('body').on("click", ".fightStartBtn", function(){
			// hey so we need to put the fight code in here yo
		});

		// end of the page function
	});

	function APIcall(obj) {
		// get the value
		var addOn = obj.value;
		// set the challenge rating to the value
		challengeRating = addOn
		// concatenate the value of the button into a query url
		var queryURL = "/api/find" + addOn;
		// run the query and then run the visualize function on the results
		$.ajax({
				url: queryURL,
				method: "GET",
			})
			.then(function (results) {
				visualize(results)
			})

	}

	// function to help us read the cookies
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = document.cookie.length;
				}
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	}

	function visualize(obj) {
		var cbody = $("<div>").addClass("card-body");
		var newImg = $("<img>").attr("src", obj.photo).addClass("monsterImg");
		var header = $("<h4>").addClass("card-title").text(obj.name);
		// update the scoreArr that we will use later for the fight functions
		monsterScoreArr = obj.scores;
		// make a new card but with custom class
		var updateDiv =
			$("<div>")
			.addClass("card monsterCard")
			// fill the insides
			.append(
				cbody
				.append(newImg, header)
			)
		// move the buttons out and replace w/ the monster info
		$("#monsterDiv").html(updateDiv);
		// update the fightrow with a button
		var fightBtn = $("<button>")
			.addClass("fightStartBtn")
			.text("Start the fight!");
		var newChallenge = $("<button>")
			.addClass("startOverBtn")
			.text("Change Difficulty Rating");
		console.log("farther down", challengeRating)
		var newMonster = $("<button>")
			.addClass("monsterSearchBtn")
			.attr("value", challengeRating)
			.text("Random Monster (Same Difficulty)");


		$("#fightRow")
			.empty()
			.append(fightBtn, newChallenge, newMonster)

	}