

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
			//preload here?
		}
		//no sound support
		soundManager.onerror = function() {
		}
	});
	
	$('.image').click(function(){
		if (soundManager.getSoundById(this.id)) {
			soundManager.play(this.id);
		}	else {
			soundManager.createSound({
			  id: this.id,
			  url: "http://charleswagner.net/speak/"+this.id+".mp3",
			  autoLoad: true,
			  autoPlay: true,
			  volume: 50
			});
		}
	})	
	
	$('#play').click(function(){
		var spoken_phrase = "";
		
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
			  volume: 50
			});
		}
	})
	
})