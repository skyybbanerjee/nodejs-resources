//2 ways to run nodejs-code - 1. In the terminal 2. By making files
console.log("Hello node");
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(testArr);

setTimeout(() => {
  console.log(`This line/message is delayed by 2 secs.. ⏳`);
}, 2000);

console.log(`This is the last line of sync. code..`);

/*

Hello node
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
This is the last line of sync. code..
This line/message is delayed by 2 secs.. ⏳       


*/
