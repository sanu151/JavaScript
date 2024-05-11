// forEach

const inr = [1000, 3000, 4000, 2000, -898, -3500, -4325];
const inrToDoller = 80;

const doller = inr.forEach((amount) => {
  console.log(Number(amount / inrToDoller).toFixed(2)); // forEach cann't return a value
});
