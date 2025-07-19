console.log("Current File:", __filename);

console.log("Current Directory:", __dirname);

setTimeout(() => {
  console.log("Printed after 2 seconds (setTimeout)");
}, 2000); 

let count = 0;
const intervalId = setInterval(() => {
  console.log(`Repeating message ${++count}`);
  if (count === 3) {
    clearInterval(intervalId); 
    console.log("Interval stopped");
  }
}, 1000); 

console.log("Node Version:", process.version); 
console.log("Platform:", process.platform);     
console.log("Program will end after 3 repetitions...\n");
