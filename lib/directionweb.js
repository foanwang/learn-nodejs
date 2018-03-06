const opn = require('openurl');

module.exports.directionWeb = function(link){
    if (typeof link === 'undefined') {
        console.error('No such args!');
        process.exit(1);
    }
    opn.open(link);
    process.exit(1);
}
