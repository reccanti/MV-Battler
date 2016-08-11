var config = require('./config');
var requireMV = require('./requireMV');

/**
 * sets up the environment for the app
 */
module.exports = function () {
    global.performance = {};
    performance.now = require('performance-now');

    require('./js-extensions');

    requireMV(config.engine.objects);
    requireMV(config.engine.managers);

    global.$dataActors  = require(config.data.actors);
    global.$dataArmors  = require(config.data.armors);
    global.$dataClasses = require(config.data.classes);
    global.$dataEnemies = require(config.data.enemies);
    global.$dataSkills  = require(config.data.skills);
    global.$dataSystem  = require(config.data.system);
    global.$dataTroops  = require(config.data.troops);
    global.$dataWeapons = require(config.data.weapons);

    global.$gameParty   = new Game_Party();
    global.$gameScreen  = new Game_Screen();
    global.$gameSystem  = new Game_System();
    global.$gameTroop   = new Game_Troop();

    BattleManager.setup(1, true, true);
    BattleManager._logWindow = {};
    BattleManager._logWindow.push = function () {
        return null;
    }
}
