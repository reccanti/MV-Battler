/**
 * Reads the contents of the file into the
 * global scope
 */
var fs = require('fs');
module.exports = function (filepath) {
    var filedata = fs.readFileSync(filepath,'utf8');
    eval.call(global, filedata);
}
