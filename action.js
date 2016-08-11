/**
 * make a Game_Action object for the given
 * subject
 */
module.exports.make = function (subject, isforcing) {
    var forcing = isforcing || false; 
    var action = new Game_Action(subject, forcing);
    return action;
}
