var p = new Promise((resolve, reject) => {
  reject(Error("Promise Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));
