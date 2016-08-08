var requireMV = require('./requireMV');

global.performance = {};
performance.now = require('performance-now');

requireMV('./js-extensions.js');
requireMV('../../rpg_objects.js');
requireMV('../../rpg_managers.js');

// TODO: Put these $ variables in  a config file
global.$dataActors = require('../../../data/Actors');
global.$dataClasses = require('../../../data/Classes');
global.$dataSystem = require('../../../data/System');
global.$dataWeapons = require('../../../data/Weapons');
global.$dataArmors = require('../../../data/Armors');

var actor = new Game_Actor(1);
console.log(actor);


/**
 * Given the ID of an actor, return a Game_Actor
 * object
 */
module.exports.get = function (actorId) {
    var actor = new Game_Actor(actorId);
    return actor;
}
