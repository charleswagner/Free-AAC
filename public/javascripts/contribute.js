jQuery(document).ready(function() {
	
	$("#add_image").hide();	
		
	if (word == undefined) {
		$("#change_image, #terms_and_conditions_div, #image_form").hide();
	} else {
		$('#image_terms_and_conditions').removeAttr('checked');
		$('#terms_and_conditions_div, #word_form').hide();
	}

	$('#add_image').click(function() {
		$('#current_word').html(word).show();
		$("#add_image, #word_form").hide();
		$("#change_image, #image_requirements").show();
		$('#image_requirements, #image_form').show();		
	})
	
	$('#change_image').click(function() {
		$("#images, #current_word").html("");
		$('#word, #image_picture').val("");
		$("#add_image, #word_form").show();
		$('#image_requirements, #error_explanation, #terms_and_conditions_div, #image_form, #change_image, #add_image, #current_word').hide();		
		$('#image_submit').attr('disabled', 'disabled');
		$('#image_terms_and_conditions').removeAttr('checked')
	});			
	
	$('#image_picture').change(function() {
		$('#image_requirements').hide();
	 	$('#terms_and_conditions_div').show();
	});
	
	// Disable this and check when Internet is up //
	
	$('#image_terms_and_conditions').click(function() {
		if ($('#image_terms_and_conditions').attr('checked')) {
			$('#image_submit').removeAttr('disabled');		
		} else {
			$('#image_submit').attr('disabled', 'disabled');
		}	
	});
	
	// Inform Mobile Safari Users About No Uploading//
	
	if (navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) ) {
	 	alert('Sorry! Apple does not allow uploads from Mobile Safari. Try a PC/Mac browser.')
	}
	
});
