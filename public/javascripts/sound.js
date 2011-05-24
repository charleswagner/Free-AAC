jQuery(document).ready(function() {	
	soundManager.url = '/data/swf/';
	soundManager.flashVersion = 9; // optional: shiny features (default = 8)
	soundManager.useFlashBlock = true; // optionally, enable when you're ready to dive in
	soundManager.debugMode = false; // enable HTML5 audio support, iPad/iPhone will always get this.
	//soundManager.useHTML5Audio = true;
	soundManager.onready(function(oStatus) {
		soundManager.url = '/data/swf/';
		if (!oStatus.success) {
		  return false;
		}	
	 	//soundManager is ready to use.
		soundManager.onload = function() {
		}
		//no sound support
		soundManager.onerror = function() {
		}
	});
	
	$('#play').click(function(){
		if ($('#phrase img').length > 0) {
			playPhrase();
		}
	})
	
	function playPhrase() {
		var spoken_phrase = "";

		$('#phrase img').fadeOut('fast')
		$('#play').css({'top' : '15px', 'background-image' : 'url(/images/loading.gif)'})

		$('#phrase img').each(function(index){
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
			  onload: function() {
			  	$('#play').css({'background-image' : 'url(/images/play.png)', 'top' : '5px'});
				$('#phrase img').remove();
			  }
			});
		}
	}
	
	
})