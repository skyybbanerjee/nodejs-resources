//async-await

function delayFn(time = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}

async function delayedMessage(name) {
  await delayFn(2500);
  console.log(`Message for ${name}, after 2.5 secs!`);
}

delayedMessage("Skyy");

//error handling
async function division(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero❌");
    }
    return num1 / num2;
  } catch (error) {
    console.error("Error:", error);
    return;
  }
}

async function mainFn() {
  console.log(await division(10, 2));
  console.log(await division(10, 10));
}

mainFn();
