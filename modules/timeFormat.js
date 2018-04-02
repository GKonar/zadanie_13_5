var os = require('os'); // Implementacja modułu os
var colors = require('colors');

function getTimeFormat() {
	var uptime = os.uptime();
	var minutes = Math.floor((uptime / 60).toFixed(2)) + ' min ' + uptime % 60 + ' s' ; 
	var hours = Math.floor((uptime / 3600).toFixed(2)) + ' h ' + Math.floor((uptime % 3600) / 60) + 
				' min ' + (((uptime % 3600) / 60) * 60) % 60  + ' s'; 
	console.log('Uptime (min & sec): ~ '.magenta + minutes);
    console.log('Uptime (hour & min & sec) ~ '.cyan + hours);
}

exports.print = getTimeFormat;

