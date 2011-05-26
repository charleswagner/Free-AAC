jQuery(document).ready(function() {	

	resizePictures($(window).height());

	window.onorientationchange = function() {
		resizePictures($(document).height());
	}	
	
	$(window).resize(function() {
	 resizePictures($(window).height())
	});
	
	function resizePictures(height) {
		var images = $('#images img');
		if (height < 700 ) {
			images.css({'width' : '85'});
		} else if (height < 750 & height > 700)  {
			images.css({'width' : '95'});
		} else if (height > 825 & height < 900) {
			images.css({'width' : '105'});
		} else if (height > 925 & height < 1000) {
			images.css({'width' : '115'});
		} else if (height > 1100 & height < 1300) {
			images.css({'width' : '180'});
		} 
	}
	
})


	