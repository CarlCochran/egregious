/* Test Javascript */


cookieList();
function cookieList() {
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var c = cookies[i];
		console.log(i, c);
	}
	return cookies;
}

$(document).ready(function(){
    $(".one").click(function(){
        $(".one").hide();
        $(".two").show();
    });
    $(".two").click(function(){
        $(".two").hide();
        $(".one").show();
    });
});