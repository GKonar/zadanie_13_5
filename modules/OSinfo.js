var os = require('os');
var colors = require('colors');
var timeFormat = require('./timeFormat');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.grey , type);
    console.log('Release:'.red , release);
    console.log('CPU model:'.blue , cpu);
    console.log('User name:'.green , userInfo.username);
    console.log('Home dir:'.yellow , userInfo.homedir);
    timeFormat.print();
}


exports.print = getOSinfo;