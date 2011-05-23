jQuery(document).ready(function() {
	
	//Attempt to fix iPad click function issue
	//http://www.danwellman.co.uk/fixing-jquery-click-events-for-the-ipad/ 

	var ua = navigator.userAgent,
	event = (ua.match(/iPad/i)) ? "touchstart" : "click";

	//preload sounds
	
	$('.image').each(function(index) {
		soundPlay(this.id, false)
	});

	//play sound

	$('.image').bind(event, function(e){
		alert('Touch is working.');
		//soundPlay(this.id, true);
		
		var audio = new Audio("ruby.mp3");
		audio.play();
		
	})
	
	
	

	//http://stackoverflow.com/questions/187098/cross-platform-cross-browser-way-to-play-sound-from-javascript//
	//======================================================================
	var soundEmbed = null;
	//======================================================================
	function soundPlay(which, autostart)
	    {
	    if (!soundEmbed)
	        {
	        soundEmbed = document.createElement("embed");
	        soundEmbed.setAttribute("src", "/sounds/"+which+".mp3");
	        soundEmbed.setAttribute("hidden", true);
	        soundEmbed.setAttribute("autostart", autostart);
		    soundEmbed.setAttribute("id", which);
	        }
	    else
	        {
	        document.body.removeChild(soundEmbed);
	        soundEmbed.removed = true;
	        soundEmbed = null;
	        soundEmbed = document.createElement("embed");
	        soundEmbed.setAttribute("src", "/sounds/"+which+".mp3");
	        soundEmbed.setAttribute("hidden", true);
	        soundEmbed.setAttribute("autostart", autostart);
	        }
	    soundEmbed.removed = false;
	    document.body.appendChild(soundEmbed);
	    }
	//======================================================================

})