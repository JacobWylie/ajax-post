// $('form').submit(function(evt) {
// 	evt.preventDefault();
// 	var url = $(this).attr("action");
// 	var formData = $(this).serialize();
// 	$.post(url, formData, function(response) {
// 		$('#signup').html("<p>Thanks for signing up!</p>");
// 	}); // end post
// }); // end submit


//.AJAX () below

$('form').submit(function(evt) {
	evt.preventDefault();
	var url = $(this).attr("action");
	var formData = $(this).serialize();
	$.ajax(url, {
		data : formData,
		type : "POST",
		success : function(response) {
			$('#signup').html("<p>Thanks for signing up!</p>")
		} // end success
	}); // end post
}); // end submit