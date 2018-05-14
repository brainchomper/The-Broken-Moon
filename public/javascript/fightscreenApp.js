$(document).ready(function(){
// load the value of the character

function pageLoad(){
	console.log(getCookie("characterID"));

	var charCookie = getCookie("characterID");

	var charID = {
	searchID: charCookie
	}
console.log("charID = " + charID);
	$.ajax({
		method: "GET",
		url: "/api/fight_screen",
		data: charID,
		type: JSON
	})
	console.log("I think this sent the API query")
};
pageLoad();
	// end of the page function
});

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

