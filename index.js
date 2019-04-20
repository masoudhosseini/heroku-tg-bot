function sayhelloo(name) {
    console.log('helloo'+name);
}
sayhelloo('masoudjan');

var logger = require('./logger');
logger.sih('hasan');
const path = require('path');
var pathobj = path.parse(__filename);
console.log(pathobj);
const os = require('os');
var totalmemm =os.totalmem();
var freememm =os.freemem();

console.log('totalmemory ' + totalmemm);
console.log(freememm);
console.log(`total memory: ${totalmemm}`);
const DigikeyParser = require('./digikey_parser2');

DigikeyParser('5027543', function(data) {
    console.log(data);
});