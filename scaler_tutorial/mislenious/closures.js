// Closures in JavaScript

const test = () => {
  let a = 2;

  const test1 = () => {
    console.log(a); // Closure, here a is accessable form it's outer function.
  };

  return test1;
};

const fun = test();

console.log(fun);

fun();
