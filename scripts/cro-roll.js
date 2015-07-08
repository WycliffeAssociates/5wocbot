/* Inspired by Reuben's awesome roll script
*/

function rollDice(numDice, numSides) {
    var results = {
        rolls: [],
        total: 0
    };
    for (var rollNum = 0; rollNum < numDice; rollNum++) {
        var roll = Math.floor(Math.random() * numSides + 1);
        results.rolls.push(roll);
        results.total += roll;
    }
    return results;
}

module.exports = function (robot) {
    robot.respond(/(\d+)d(\d+)/i,function(msg){
        var numDice = msg.match[1];
        var numSides = msg.match[2];
        var results = rollDice(numDice, numSides);
        msg.send("You rolled a " + results.total + ". (" + results.rolls + ")");
    });
};
