const yargs= require('yargs');
yargs.command({
    command:'list',
    describe:'items present',
    handler: function(){
        console.log("many items are present");
    }

});
console.log(yargs.argv);