jQuery(document).ready(function() {
	
	soundManager.url = '/data/swf/';
	soundManager.flashVersion = 9; // optional: shiny features (default = 8)
	soundManager.useFlashBlock = true; // optionally, enable when you're ready to dive in
	soundManager.debugMode = false;
	// enable HTML5 audio support, if you're feeling adventurous. iPad/iPhone will always get this.
	// soundManager.useHTML5Audio = true;
	soundManager.onready(function(oStatus) {
	    soundManager.url = '/data/swf/';
	  if (!oStatus.success) {
	    return false;
	  }
	  // soundManager is initialised, ready to use. Create a sound for this demo page.
	/*
	if (soundManager.flashVersion > 8) {
	t = window.setInterval(checkRAM,500);
	document.getElementById('flash-ram-use').style.display = 'inline';
	checkRAM();
	}*/

	 

	 soundManager.onload = function() {
	  // soundManager is ready to use.
	  // createSound() / play() etc. can now be called



	    //
	    //soundManager.play('i','/data/i.wav');
	}
	soundManager.onerror = function() {
	  // Oh no! No sound support.
	  // Maybe configure your app to ignore sound calls.
	  // (SM2 calls will silently return false after this point.)
	}

	  //soundManager.play('i');
	 // soundManager.play('love');
	  //soundManager.play('you');
	 // soundManager.play('aDrumSound');
	});
	

	
	//Attempt to fix iPad click function issue
	//http://www.danwellman.co.uk/fixing-jquery-click-events-for-the-ipad/ 

	var ua = navigator.userAgent,
	event = (ua.match(/iPad/i)) ? "touchstart" : "click";

	//onclick function to play sound 

	$('.image').bind(event, function(e){
		
		if (soundManager.getSoundById(this.id)) {
			soundManager.play(this.id);
			
			
		}	else {
			soundManager.createSound({
			  id: this.id,
			  url: "/sounds/"+this.id+".mp3",
			  autoLoad: true,
			  autoPlay: true,
			  volume: 50
			});
		}

	})
	
	

})