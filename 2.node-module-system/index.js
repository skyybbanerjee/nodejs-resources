//module.exports
//require

const firstModule = require("./firstModule");

console.log(firstModule.add(3, 5));

try {
  //console.log(`Trying to divide by 0`);
  let result = firstModule.divide(200, 10);
  console.log(result);
} catch (error) {
  console.log(`Caught error: ${error}`);
}

//module-wrapper
// function (exports, require, module, __dirname){
    //module code goes here
// }
