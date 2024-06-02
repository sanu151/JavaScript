async function f() {
  let result = "new!";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  result = await promise;
  console.log(result);
}

f();
