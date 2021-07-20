const chalk = require('chalk');
var figlet = require('figlet');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

figlet(styledMessage, function(err, data){
    if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
})
const styledMessage1 = chalk.bgRedBright.blue(greet('Vasco'));
console.log(styledMessage1);