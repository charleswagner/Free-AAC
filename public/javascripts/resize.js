jQuery(document).ready(function() {	

		resizePictures($(window).height());

	window.onorientationchange = function() {
		resizePictures($(document).height())
		alert($(document).height());
		alert('document.getElementById("images").clientHeight;');
	}	
	

	
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
		} else if (height > 1100 & height < 1300) {
			$('#images img').css({'width' : '180'});
		}
	}
	
})


	