jQuery(document).ready(function() {
			
	$('#image_submit').attr('disabled', 'disabled');
	$('#search_form').show();		
			
	// if there is a word then that means there was an error //	
	// if there was an error repolulate form with js variables and present error //	
		
	if (word == undefined) {
		$("#change_image, #terms_and_conditions_div, #image_form").hide();
	} else {
		$('#image_terms_and_conditions').removeAttr('checked');
		$('#terms_and_conditions_div, #word_form').hide();
		$('#change_image').show();
		$('#current_word').html(word).show();
	}

	// When the user decides to add a picture //

	$('#add_image').click(function() {
		$('#current_word').html(word);
		$("#add_image, #word_form").hide();
		$("#change_image, #image_requirements, #image_requirements, #image_form, #current_word").show();
	})
	
	// When the user changes the word to add //

	$('#change_image').click(function() {
		$("#images, #current_word").html("");
		$('#word, #image_picture').val("");
		$('#image_requirements, #error_explanation, #terms_and_conditions_div').hide();		
		$('#image_form, #change_image, #add_image, #current_word').hide();		
		$('#image_submit').attr('disabled', 'disabled');
		$('#image_terms_and_conditions').removeAttr('checked');
		$("#word_form, #search_form").show();
	});			

	// When the user selects a picture //
	
	$('#image_picture').change(function() {
		$('#image_requirements').hide();
	 	$('#terms_and_conditions_div').show();
	});
	
	// Disable submit if user has not agreed to terms and conditions //
	
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