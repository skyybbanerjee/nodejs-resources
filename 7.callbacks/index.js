//callbacks and callback hell

const fs = require('fs');

function person(name, callBackFx) {
  console.log(`Hello ${name}`);
  callBackFx();
}

function address() {
  console.log(`The callBack fx!`);
}

person("Soumadip Banerjee", address);

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
} )

