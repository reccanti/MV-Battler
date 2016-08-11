var setup = require('./setup')();
var Actor = require('./actor');
var Enemy = require('./enemy');
var Action = require('./action');

var actor6 = Actor.get(6);
var enemy1 = Enemy.get(1);
var action1 = Action.make(actor6);
var action2 = Action.make(enemy1, true);

console.log(BattleManager);
console.log(actor6);
console.log(enemy1);
console.log(action1);
console.log(action2);


BattleManager._action = action1;
BattleManager.invokeAction(actor6, enemy1);

// console.log(BattleManager);
// console.log($gameParty);

// BattleManager.startInput();
