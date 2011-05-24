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
		var snd = new Audio("/sounds/" + this.id + ".mp3");
		snd.play();
	})	
	
})