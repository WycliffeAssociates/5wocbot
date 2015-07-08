# Description:
#   Generate a random number like a dice roll
#
# Commands:
#   hubot roll N - returns a number between 1 and N
#
# Notes:
#   Currently assumes a single die, future expansion could include logic for multiple dice
#
# Author:
#   rbnswartz

module.exports = function (robot) {
    robot.respond(/roll (\d+)/i,function(msg){
        randomInt = Math.floor(Math.random() * msg.match[1]) + 1;
        msg.send("you rolled the number " + randomInt);
    });
};
