jQuery(document).ready(function() {	
	$('#images .image').click(function(){
		$('#' + this.id).clone().css({'width' : '50px', 'height': '50px;'}).appendTo($('#phrase'));
	})
})