/* Description:
   Generate a random number like a dice roll

 Commands:
   hubot roll N - returns a number between 1 and N

 Notes:
   Currently assumes a single die, future expansion could include logic for multiple dice

 Author:
   rbnswartz
*/
module.exports = function (robot) {
    robot.respond(/(\d+)d(\d+)/i,function(msg){
        var numDice = msg.match[1];
        var numSides = msg.match[2];
        var total = 0;
        for (var roll = 0; roll < numDice; roll++) {
            total = total + Math.floor(Math.random() * numSides + 1);
        }
        msg.send("You rolled a " + total + ".");
    });
};
