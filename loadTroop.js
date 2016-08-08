var requireMV = require('./requireMV');
global.performance = {};
global.window = global;
performance.now = require('performance-now');
global.Utils = {};
Utils.isOptionValid = function () {
    return true;
}
global.XMLHttpRequest = require('xhr2');

requireMV('../../rpg_managers.js');
DataManager.loadDatabase();
