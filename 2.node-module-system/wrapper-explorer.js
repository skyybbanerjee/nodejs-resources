console.log(`Node module-wrapper:`);

console.log("######__filename in Wrapper-Explorer:######", __filename);
console.log("#####__dirname in Wrapper-Explorer:######", __dirname);

module.exports.greet = function (name) {
  console.log(`Hello ${name}`);
};
