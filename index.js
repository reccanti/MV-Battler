var setup = require('./setup')();
var Actor = require('./actor');

var actor6 = Actor.get(6);
console.log(actor6);

var battle = BattleManager.setup(1, true, true);
