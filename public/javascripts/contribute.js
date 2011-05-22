jQuery(document).ready(function() {
	
	if (word == undefined) {
		$('#terms_and_conditions_div').hide();
		$('#image_form').hide();
	} else {
		$('#image_terms_and_conditions').removeAttr('checked');
		$('#terms_and_conditions_div').hide();
		$("#links").append("<p><span class='highlight'>"+ word + "</span> - <a href='#' id='change_image'>change this word</a></p>");	
		$('#word_form').hide();
		
		$('#change_image').click(function() {
			$('#terms_and_conditions_div').hide();
			$('#image_form').hide();
			$("#image_picture").val("");
			$('#word_form').show();
			$("#images").html('');
			$("#links").html('');
			$('#image_requirements').show();
		});

		$('#image_picture').change(function() {
			$('#image_requirements').hide();
		 	$('#terms_and_conditions_div').show();
		});	
	}
	
	// Inform Mobile Safari Users About No Uploading//
	
	if (navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) ) {
	 	alert('Sorry! Apple does not allow uploads from Mobile Safari. Try a PC/Mac browser.')
	}
	
	
	// Disable this and check when Internet is up //
	
	$('#image_terms_and_conditions').click(function() {
		if ($('#image_terms_and_conditions').attr('checked')) {
			//$('#image_submit').show();
			$('#image_submit').removeAttr('disabled');		
			
		} else {
			//$('#image_submit').hide();		
			$('#image_submit').attr('disabled', 'disabled');
		}	
	});
	
	
	
	
	
	
});
