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
        $("#left_half").removeClass("narrow_focus").removeClass("wide_focus");
	    $("#right_half").removeClass("wide_focus").removeClass("narrow_focus");
    });
    $(".two").click(function(){
        $(".two").hide();
        $(".one").show();
        $("#left_half").removeClass("narrow_focus").removeClass("wide_focus");
	    $("#right_half").removeClass("wide_focus").removeClass("narrow_focus");
    });
    $("#left_half").click(function(){
	    $("#left_half").removeClass("narrow_focus").addClass("wide_focus");
	    $("#right_half").removeClass("wide_focus").addClass("narrow_focus");
    });
    $("#right_half").click(function(){
	    $("#right_half").removeClass("narrow_focus").addClass("wide_focus");
	    $("#left_half").removeClass("wide_focus").addClass("narrow_focus");
    });
});