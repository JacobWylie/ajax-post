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
	}).fail(function(jqXHR) { 
		var errorMessage = "<p>Sorry, there has been an error. ";
		errorMessage += "Please try again later. </p>";
		errorMessage += "<p>Error: " + jqXHR.status + "</p>";
		$('#signup').html(errorMessage)
	}) // end post
}); // end submit