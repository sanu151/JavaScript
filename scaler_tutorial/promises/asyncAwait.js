// Async Await

const placeOrder = (drink) => {
  return new Promise((resolve, reject) => {
    if (drink === "Coffee") {
      resolve("Order for Coffee received");
    } else {
      reject("Other order rejected");
    }
  });
};

const processOrder = (order) => {
  return new Promise((resolve) => {
    console.log("Order for Coffee is processed");
    resolve(`${order} and is served`);
  });
};

async function myorder() {
  let orderPlaced = await placeOrder("Coffee");
  console.log(orderPlaced);
  let orderProcessed = await processOrder(orderPlaced);
  console.log(orderProcessed);
}

myorder();
