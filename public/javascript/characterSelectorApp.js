$(document).ready(function(){
// hide the fight button
	var charID ;
	$(".pickCharacter").on("click", function(event){
		event.preventDefault();
		// remove selected Character 
		// $(".selectedCharacter").removeClass("selectedCharacter");
		// add the selected character class to the card 
		$(this).parent().parent().addClass("selectedCharacter");
		charID =  $(this).attr("id");
		console.log("charID", charID);
		//show the fight button
		$("#fightBtn").removeClass("hidden");
		setCookie("characterID", charID)
	});

function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + " path=/";
};
// end page functions
});
