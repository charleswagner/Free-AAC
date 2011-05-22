jQuery(document).ready(function() {
	
	// Inform Mobile Safari Users About No Uploading//
	
	if (navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) ) {
	 	alert('Sorry! Apple does not allow uploads from Mobile Safari. Try a PC/Mac browser.')
	}
	
	// Disable this and check when Internet is up //
	
	$('#image_terms_and_conditions').click(function() {
		if ($('#image_terms_and_conditions').attr('checked')) {
			$('#image_submit').show();		
		} else {
			$('#image_submit').hide();		
		}	
	});
	
});


