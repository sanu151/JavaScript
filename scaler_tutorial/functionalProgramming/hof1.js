// Convert Rupee to Doller my account transaction

const transactionRs = [1000, 3000, 4000, 2000, -898, -3800, -4500];
const inrToDoller = 80;

const transactionDoller = transactionRs.map((n) => {
  return Number((n / inrToDoller).toFixed(2));
});

console.log(transactionDoller);
