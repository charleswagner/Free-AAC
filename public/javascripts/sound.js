jQuery(document).ready(function() {	
	soundManager.url = '/data/swf/';
	soundManager.flashVersion = 9;
	soundManager.useFlashBlock = false;
	soundManager.debugMode = false;
	$('#play').click(function(){
		if ($('#phrase .image').length > 0) {
			playPhrase();
		}
	})
	function playPhrase() {
		var spoken_phrase = "";
		var images = $('#phrase .image');
		images.fadeOut('fast')
		$('#play').css({'background-position' : 'center', 'background-image' : 'url(/images/loading.gif)', 'cursor' : 'default'})
		$('#phrase .image').each(function(index){
			spoken_phrase += (" " + this.id);
		})
		if (soundManager.getSoundById(spoken_phrase)) {
			soundManager.play(spoken_phrase);
		}	else {
		soundManager.createSound({
			  id: spoken_phrase,
	  		  url: "http://charleswagner.net/speak/"+spoken_phrase+".mp3",
			  autoLoad: true,
			  autoPlay: true,
			  volume: 50,
			  whileplaying: function() {
			  	$('#play').css({'background-image' : 'url(/images/speak.png)', 'top' : '10px', 'right' : '25px', 'cursor' : 'pointer'});
				images.remove();
			  }
		 	});
		}
	}	
})