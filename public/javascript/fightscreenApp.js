$(document).ready(function(){
// load the value of the character
// var medBtn = $("#medMonster").val();
// var easyBtn = $("#easyMonster").val();
// var hardBtn = $("#hardMonster").val();
$(".monsterSearchBtn").on("click", function(event){
	event.preventDefault();
	console.log("this, " , this);
	APIcall(this);;
})

	// end of the page function
});

function APIcall(obj){
	// get the value
	var addOn = obj.value;
	// concatenate the value of the button into a query url
	var queryURL = "/api/find" + addOn;
// run the query and then run the visualize function on the results
$.ajax({
	url: queryURL,
	method: "GET",

})
.then(function(results){
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
	var header = $("<h4>").addClass("card-title")

	// make a new card but with custom class
	$("<div>")
	.addClass("card monsterCard")
	// fill the insides
	.html(
		
	)
}

