$(document).ready(function(){
// hide the fight button
	$("#fightBtn").hide();

	var charID ;
	$(".pickCharacter").on("click", function(event){
		event.preventDefault();
		// remove selected Character 
		// $(".selectedCharacter").removeClass("selectedCharacter");
		// add the selected character class to the card 
		$(this).parent().parent().addClass("selectedCharacter");
		charID =  $(this).id;
		console.log("charID", charID);
		//show the fight button
		$("#fightBtn").show();
		
	});

	$("#fightBtn").on("click", function(event){
		event.preventDefault();
		setCookie("selectedCharacter", charID);

		// run the apiquery which will serve up the fight screen;
	});

function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + " path=/";
};
// end page functions
});
