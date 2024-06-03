// Closures in nested functions

const fn1 = () => {
  let name = "Supriyo";

  const fn2 = () => {
    let age = 36;

    const fn3 = () => {
      console.log(`${name} ${age}`);
    };
    return fn3;
  };
  return fn2;
};

const fn = fn1();

const fnf = fn();

fnf();
