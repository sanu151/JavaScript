//setInterval

function cb() {
  console.log(`This is callback function from setInterval`);
}

let timer = setInterval(cb, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 6000);
