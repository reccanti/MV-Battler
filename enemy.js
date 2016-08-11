/**
 * Given the ID of an enemy, return a Game_Enemy
 * object
 */
module.exports.get = function (enemyId) {
    var enemy = new Game_Enemy(enemyId);
    return enemy;
}
