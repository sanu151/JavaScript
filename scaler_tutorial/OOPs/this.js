// this keyword with Node.js in Non-Strict mode

console.log(this); // {}

function displayThis() {
  console.log(this);
}

displayThis(); // Global Object

let myObj = {
  name: "Supriyo Das",
  age: 36,

  myfn: function () {
    console.log(this);
  },
};

myObj.myfn(); // { name: 'Supriyo Das', age: 36, myfn: [Function: myfn] }

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

myObj1.myfn1(); // Global Object
