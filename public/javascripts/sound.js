jQuery(document).ready(function() {
	
	$('.image').each(function(index) {
		soundPlay(this.id, false)
	});

	$('.image').click(function(){
		soundPlay(this.id, true);
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