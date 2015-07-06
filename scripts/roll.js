module.exports = function(robot){
    robot.hear(/^roll (\d+)/i,function(msg){
        randomInt = Math.floor(Math.random() * msg.match[1]);
        msg.send("you rolled " + randomInt);
    });
};
