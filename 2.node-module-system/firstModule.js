function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Dividing by zero isn't allowed");
  return a / b;
}

//exporting
module.exports = {
    add,
    substract,
    divide,
  };