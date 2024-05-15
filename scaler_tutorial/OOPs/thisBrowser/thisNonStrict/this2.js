// this keyword Non Strict mode in browser

console.log(this); // window obj

function displayThis() {
  console.log(this);
}

displayThis(); // window obj

let myObj = {
  name: "Supriyo Das",
  age: 36,

  myfn: function () {
    console.log(this);
  },
};

myObj.myfn(); // object itself

let myObj1 = {
  name: "Supriyo Das",
  age: 36,

  myfn1: function () {
    function myfn2() {
      console.log(this);
    }
    myfn2();
  },
};

myObj1.myfn1(); // Window obj
