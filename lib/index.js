module.exports = function(config) {
    
    var cli = config.cli;
    var storage = config.common.storage;
    
    cli.on('cliSandbox', function(sandbox) {
        sandbox.roomtool = function() {
            sandbox.print("Room Tool Mod");
        };
//        sandbox.roomtool.setNovice = function(start, end) {
//            if (end === undefined) {
//                end = start;
//            }
//            for 
//        };
        sandbox.roomtool.setNovice = function(start, duration) {
            storage.db.rooms.update({_id: start}, {$set: {respawnArea: Date.now() + duration}});
        };
    });
};