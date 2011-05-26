jQuery(document).ready(function() {	
	$('#images .image').click(function(){
		if ($('#phrase img').length < 10) {
			$('#' + this.id + ' img').clone().attr('id', this.id).css({'width' : '75px'}).appendTo($('#phrase'));	
		}
		return false
	})

	
	$('#back').click(function(){
		if ($('#phrase img').length > 0) {
			$('#phrase > img:last-child').remove();
		}
		return false
	})
	
	$('#restart, #home').click(function(){
		if (this.id == 'home') {
			$('#home').css({opacity : 0.3 })
		} else {
			$('#restart').css({opacity : 0.3 })
		}
	})
	

	
})