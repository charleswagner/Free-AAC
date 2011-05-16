<?php

// WARNING : This code is not production ready.  The logging will grow forever...
//
//


// Creating a log file
$logFile = "stdout.log";
$fh = fopen($logFile, 'a');

// Grabbing the current URL and disecting the word.
$url = (!empty($_SERVER['HTTPS'])) ? "https://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'] : "http://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
fwrite($fh,$url."\n");
$phrase = str_replace("http://charleswagner.net/speak/","",$url);
fwrite($fh,$phrase."\n");
$phrase = str_replace(".mp3","",$phrase);
$phrase = urldecode($phrase);
fwrite($fh,$phrase."\n");

// Creating a filename for the word. We use a large random number 
// to make this code thread safe. 
$filename = rand(0, 10000000000000).".mp3";

// Write the mp3 file
$command = '/home/charles/espeak-1.45.04-linux/speak "'.$phrase.'" --stdout --path=/home/charles/espeak-1.45.04-linux/ -s70 | lame - "'.$filename.'"';
fwrite($fh,$command."\n");
exec ( $command );

// Read the file in and output it to the HTTPResponse
$fc
= file_get_contents($filename);
$size = filesize($filename);

header('Content-type: audio/mpeg');
header('Content-length: ' . $size);
header('Content-Disposition: filename="'.$phrase.'.mp3"');
header('X-Pad: avoid browser bug');
Header('Cache-Control: no-cache');

echo
$fc;

// Delete the file from the disk so this code has constant space
fwrite($fh, unlink($filename)."\n");

$fclose($fh);

?>
