const lodash = require("lodash");

const names = ["skyy", "andrea", "john", "dominik"];
const capitalize = lodash.map(names, lodash.capitalize);
console.log(capitalize);
