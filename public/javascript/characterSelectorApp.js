$(document).ready(function(){

	var charID ;
	$(".pickCharacter").on("click", function(event){
		event.preventDefault();
		$(this).parent().addClass("selectedCharacter");
		charID =  $(this).id.val;
		console.log("charID", CharID);
		// make a cookie
		setCookie("selectedCharacter", charID);
	})

})

function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
