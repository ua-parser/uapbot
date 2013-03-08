var jerk = require("jerk");
var fs = require("fs");
var url = require("url");
var options = JSON.parse(fs.readFileSync("./options.json"));
var PACKAGE_INFO = JSON.parse(fs.readFileSync("./node_modules/ua-parser/package.json"));
var uap = require("ua-parser");

function parse(str) {
  var out = '',
      r = uap.parse(str);
  out += "User Agent: " + r.userAgent;
  out += "; Operating System: " + r.os;
  out += "; Device: " + r.device + ".";
  return out;
}

jerk(function(j) {
  j.watch_for(new RegExp("^" + options.nick + ":\\s+(.*)$", "i"), function(message) {
    var str = message.match_data[1].trim(),
        out = '';
    switch (str) {
      case "--version":
      case "-v":
        out = "ua-parser v" + PACKAGE_INFO.version;
        break;
      default:
        out = parse(str);
    }
    message.say(message.user + ": " + out);
  });
}).connect(options);
