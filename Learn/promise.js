// Function returning a Promise
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    num > 10
      ? resolve("Number is greater than 10")
      : reject("Number is less than or equal to 10");
  });
}

// Using Promise with .then() and .catch()
checkNumber(15)
  .then((message) => {
    console.log("Success:", message); // Output: Success: Number is greater than 10
  })
  .catch((error) => {
    console.log("Error:", error); // Not executed here as 15 is greater than 10
  })
  .finally(() => console.log("done"));

checkNumber(5)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error); // Output: Error: Number is less than or equal to 10
  });

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(2);
    return sleep(1000);
  })
  .then(() => {
    console.log(3);
    return sleep(1000);
  });
