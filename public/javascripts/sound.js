jQuery(document).ready(function() {
	
	soundManager.url = '/data/swf/';
	soundManager.flashVersion = 9; // optional: shiny features (default = 8)
	soundManager.useFlashBlock = true; // optionally, enable when you're ready to dive in
	soundManager.debugMode = false; // enable HTML5 audio support, iPad/iPhone will always get this.
	soundManager.useHTML5Audio = true;
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
	
	//Attempt to fix iPad click function issue
	//http://www.danwellman.co.uk/fixing-jquery-click-events-for-the-ipad/ 

	var ua = navigator.userAgent,
	event = (ua.match(/iPad/i)) ? "touchstart" : "click";



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
	
	

})