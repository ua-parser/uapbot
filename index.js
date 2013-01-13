var jerk = require("jerk");
var fs = require("fs");
var url = require("url");
var options = JSON.parse(fs.readFileSync("./options.json"));
var uap = require("ua-parser");

jerk(function(j) {
  j.watch_for(new RegExp("^" + options.nick + ":\\s+(.*)$", "i"), function(message) {
    var str = message.match_data[1].trim(),
        r = uap.parse(str),
        out = "";
    
    out += message.user 
    out += ": User Agent: " + r.userAgent;
    out += "; Operating System: " + r.os;
    out += "; Device: " + r.device + ".";
    message.say(out);
  });
}).connect(options);
