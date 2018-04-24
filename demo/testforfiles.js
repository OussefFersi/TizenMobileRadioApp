// check for missing media files and warn to download

$(function() {

	$.ajax({
		url: '../media/echo-hereweare.webm',
		success: function() {},
		error: function(e) {
		
		}
	});

});