/**
 * Given the ID of an actor, return a Game_Actor
 * object
 */
module.exports.get = function (actorId) {
    var actor = new Game_Actor(actorId);
    return actor;
}
