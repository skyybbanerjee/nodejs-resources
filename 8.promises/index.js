//Better way to handle callbacks()
//Promise - interface

function delayFn(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

console.log(` ---- Promise lecture starts here ---- `);

delayFn(3000).then(() => {
  console.log(`Promise resolved after 3 secs ⌛`);
});

console.log(`--------- END ------------`);

//catching erros in promises

function divideFx(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can't perform division by zero ❌");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFx(10, 2)
  .then((res) => console.log(res)) //resolved
  .catch((err) => console.log(err)); //rejected

divideFx(10, 0)
  .then((res) => console.log(res)) //resolved
  .catch((err) => console.log(err)); //rejected
