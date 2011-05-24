jQuery(document).ready(function() {	
	$('#images .image').click(function(){
		$('#phrase').append($('#' + this.id).css({'width' : '50px', 'height': '50px;'}));
	})
})

