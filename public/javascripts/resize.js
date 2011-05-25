jQuery(document).ready(function() {	

	window.onorientationchange = function() {
		alert('test')
		//window.onorientationchange = function(resizePictures($(window).height()))
	}	
	resizePictures($(window).height());

	$(window).resize(function() {
	 resizePictures($(window).height())
	});
	
	function resizePictures(height) {
		if (height < 500 ) {
			$('#images img').css({'width' : '85'});
		} else if (height > 625 & height < 700)  {
			$('#images img').css({'width' : '95'});
		} else if (height > 725 & height < 800) {
			$('#images img').css({'width' : '105'});
		} else if (height > 825 & height < 900) {
			$('#images img').css({'width' : '115'});
		} else if (height > 925 & height < 1000) {
			$('#images img').css({'width' : '125'});
		} else if (height > 1025 & height < 1100) {
			$('#images img').css({'width' : '125'});
		}
	}
	
})


	