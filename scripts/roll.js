module.exports = function(robot){
    robot.respond(/roll (\d+)/i,function(msg){
        randomInt = Math.floor(Math.random() * msg.match[1]) + 1;
        msg.send("you rolled the number " + randomInt);
    });
};
