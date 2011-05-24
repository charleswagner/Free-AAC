jQuery(document).ready(function() {	
	$('#images .image').click(function(){
		if ($('#phrase img').length < 10) {
			$('#' + this.id).clone().appendTo($('#phrase'));	
		}
		return false
	})
})