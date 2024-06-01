function coffieshop(drink) {
  return new Promise(function (resolved, rejected) {
    if (drink === "coffee") {
      resolved("Your Order is placed");
    } else {
      rejected("Other Order rejected");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolved) {
    console.log("Your Order is prossed");
    resolved(`${order} is served`);
  });
}

coffieshop("coffee")
  .then(function (orderPlaced) {
    console.log(orderPlaced);
    let orderIsPlaced = processOrder(orderPlaced);
    return orderIsPlaced;
  })
  .then(function (porcessedOrder) {
    console.log(porcessedOrder);
  })
  .catch(function (err) {
    console.log(err);
  });
