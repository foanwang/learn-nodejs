#!/usr/bin/env node

var program = require('commander');
var json = require('jsonfile')
var calculation = require('./lib/calculation.js');
var direction = require('./lib/directionweb.js');
var showdata = require('./lib/showdata.js');
var datafile = 'data/data.json';
var data;   

module.exports.ActionFunction = ActionFunction;

function checkcmd(cmdValue){
    if (typeof data === 'undefined') {
       initData();
    }
    var result =  data[cmdValue];
    return result;
}

function initData(){
    if (typeof data === 'undefined') {
        data = json.readFileSync(datafile);
    }
}

    function ActionFunction(){
    cmdValue = arguments[0];
    initData();
    //console.log("arguments:",arguments);
    var result = checkcmd(cmdValue);
    if (typeof result === 'undefined') {
        console.error('No such command!');
        process.exit(1);
    }

    argumentsize = arguments.length-2;
    if(argumentsize < 1){
        console.error('no environment given!');
        process.exit(1);
    }
    //check action function
    if (result["calculation"] == 'true'){
        var list = new Array();
        for(var i = 1; i < argumentsize+1; i++){
            //check args isNaN            
            if(isNaN(arguments[i])==true){
                console.error('args is isNaN!');
                process.exit(1);
            }

            list.push(arguments[i]);
        }
        var string = calculation.calculation(result, list);
        showdata.show(string);
    }

    if(result['show'] == 'true'){    
        if (typeof result[arguments[1]] === 'undefined') {
                console.error('No such args!');
                process.exit(1);
        }
        showdata.show(result["title"]+result[arguments[1]]);
    }

    if (result["direction"]== 'true'){
        direction.directionWeb(result[arguments[1]]);
    }   
}

program
  .version('0.0.1')
  .action(ActionFunction);  

program.parse(process.argv);
// if (typeof cmdValue === 'undefined') {
// 	console.error('no command given!');
// 	process.exit(1);
// }


 

