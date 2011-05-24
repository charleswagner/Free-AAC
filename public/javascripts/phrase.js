jQuery(document).ready(function() {	
	$('#images .image').click(function(){
		if ($('#phrase img').length < 10) {
			$('#' + this.id).clone().css({'width' : '50px', 'height': '50px;'}).appendTo($('#phrase'));	
		}
		return false
	})
})

