# JavaScript
**JS Documentation :** https://github.com/anisul-Islam/javascript-documentation

JSON Placeholder : https://jsonplaceholder.typicode.com/guide/

font-awsome CDN : https://cdnjs.com/libraries/font-awesome  ,
font-awsome icon : https://fontawesome.com/search?q=trash&o=r&m=free&f=sharp%2Cclassic

**Prettier : https://prettier.io/**

Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- Ember/Handlebars
- JSON
- GraphQL
- Markdown, including GFM and MDX v1
- YAML

It removes all original styling and ensures that all outputted code conforms to a consistent style. 

**jsdoc Documentation :** https://github.com/anisul-Islam/jsdoc-documentation

HTML, CSS, JS cheat sheet : https://htmlcheatsheet.com/

---

# Notes

**What is JavaScript?**

-  JavaScript is a high level multi-paradign object-oriented Programming language.
  
-  It is also Synchronous and single threaded in Behavior

  
-  It is the Language of the Web and is used to make web pages and web applications work Dynamically.

**JavaScript on the Browser?**

- Almost Every Browser today is Empowered by JavaScript.

- Every browser has an embedded JavaScript engine.
  > For example, - Chrome uses V8 Engine, Mozilla firefox uses spider monkey.

- JavaScript was initially created to "make web pages alive".

- The programs in this language are called scripts. They can be written right in a web page's HTML and run automatically as the page loads.

**JavaScript in the Browser**
```
console.log('Welcome to JavaScript');
VM1239:1 Welcome to JavaScript
undefined
alert('This is an alert message');
```

```
let a = 2;
undefined
console.log(a);
VM1532:1 2
undefined
40+2+8
50
```

**What is Node.js?**

**Node.js** is an open-sounce, cross-platform, back-end JavaScript runtime environment that runs on the VS engine and executes JaavaSeript code outside a web browser, which was designed to build scalable network applications.

It was Developed by Ryan Dahi and It uses Chrome's V8 engine.

Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

**Variables in JavaScript**

> Variables are containers for storing data (storing data values).

> Variable means **anything that can very**. In JavaScript, a variable stores the data value that can be changed later on.

**The var keyword**

- This is a reserved keyword in JavaScript which is to declare variables that is the 'var' keyword
```
> var a = 20;

> var greet = "Hello"

> var persionName = 'Supriyo Das'

> var isAvailable = true
```

**Dynamically vs Statically typed Languages**

- Statically typed languages: each variable and expression is already known at compile time.

example:
``` c
#include<stdio.h>

int main()
{
    int a = 20;

    char ch = 'G';

    double b = 2.5;

    printf("%d, %c, %lf", a, ch, b);
}
```

- Dynamically typed languages: variables can receive different values at run time and their type is defined at run time.

``` JS
> var a = 20;

> var greet = "Hello"

> var persionName = 'Supriyo Das'

> var isAvailable = true
```

**Rules for variable**

Creating variables in JavaScript is fundamental for storing and manipulating data. Here are the basic rules:

1. **Variable Declaration**: You declare variables in JavaScript using the `var`, `let`, or `const` keyword.

    ```javascript
    var x; // Declares a variable named x
    let y; // Declares a block-scoped variable named y
    const z = 10; // Declares a constant named z with the value 10
    ```

2. **Naming Rules**:
    - Variable names can contain letters, digits, underscores, and dollar signs.
    - They must begin with a letter, an underscore (_), or a dollar sign ($).
    - Variable names are case-sensitive (`age` and `Age` are different variables).

3. **Reserved Keywords**: You cannot use JavaScript reserved keywords as variable names.

    ```javascript
    // Incorrect
    var var = 5; // 'var' is a reserved keyword

    // Correct
    var variable = 5;
    ```

4. **Initial Value Assignment**: You can optionally assign an initial value to a variable at the time of declaration.

    ```javascript
    var x = 5; // Declares a variable x and assigns it the value 5
    let y = "Hello"; // Declares a variable y and assigns it the string "Hello"
    const z = []; // Declares a constant z and assigns it an empty array
    ```

5. **Scope**:
    - Variables declared with `var` have function-level scope. They are visible throughout the function they are declared in.
    - Variables declared with `let` and `const` have block-level scope. They are only visible within the block they are declared in.

    ```javascript
    function example() {
        if (true) {
            var a = 10; // 'a' is accessible outside this block
            let b = 20; // 'b' is only accessible within this block
            const c = 30; // 'c' is also only accessible within this block
        }
        console.log(a); // Outputs 10
        console.log(b); // ReferenceError: b is not defined
        console.log(c); // ReferenceError: c is not defined
    }
    ```

6. **Re-declaration**:
    - Variables declared with `var` can be re-declared and updated.
    - Variables declared with `let` and `const` cannot be re-declared but can be updated.

    ```javascript
    var x = 5;
    var x = 10; // This is allowed, x is re-declared

    let y = 5;
    let y = 10; // SyntaxError: Identifier 'y' has already been declared

    const z = 5;
    z = 10; // TypeError: Assignment to constant variable.
    ```

**What are Arrays?**

- Similar to a variable an array also stores data but it can store multiple data items.

- It enables storing multiple values under a same variable name and we can also preform operations on them by using different methods and properties also every value gets a sequenial index starting from 0.

- In JavaScript arrays can store values of different data types whereas in statically typed language arrays will store only that data by which the Array is defined.

**Representing an Array**

Array starts from index 0 by default and it goes upto the last element.

![image](https://github.com/sanu151/JavaScript/assets/68671274/57efabd9-4335-4580-9691-20e865ead81a)

```
> var arr = [12, 'Supriyo', true, 12.4];

> console.log(arr);
[ 12, 'Supriyo', true, 12.4 ]

> var a = arr[1];

> console.log(a);
Supriyo

> console.log(arr[3]);
12.4

> // replacing elements of an arry by using index

> arr[1] = 'Rupa';
'Rupa'
> console.log(arr);
[ 12, 'Rupa', true, 12.4 ]

> console.log('The length of the array is :', arr.length);
The length of the array is : 4

```

**Array methodes**

JavaScript provides several built-in methods for working with arrays. Here are some commonly used array methods:

1. **push()**: Adds one or more elements to the end of an array and returns the new length of the array.

    ```javascript
    const fruits = ['apple', 'banana'];
    fruits.push('orange'); // ['apple', 'banana', 'orange']
    ```

2. **pop()**: Removes the last element from an array and returns that element.

    ```javascript
    const fruits = ['apple', 'banana', 'orange'];
    const lastFruit = fruits.pop(); // 'orange'
    ```

3. **shift()**: Removes the first element from an array and returns that element.

    ```javascript
    const fruits = ['apple', 'banana', 'orange'];
    const firstFruit = fruits.shift(); // 'apple'
    ```

4. **unshift()**: Adds one or more elements to the beginning of an array and returns the new length of the array.

    ```javascript
    const fruits = ['banana', 'orange'];
    fruits.unshift('apple'); // ['apple', 'banana', 'orange']
    ```

5. **concat()**: Returns a new array that combines the elements of the original array with the elements of other arrays or values.

    ```javascript
    const fruits = ['apple', 'banana'];
    const moreFruits = fruits.concat(['orange', 'kiwi']); // ['apple', 'banana', 'orange', 'kiwi']
    ```

6. **splice()**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

    ```javascript
    const fruits = ['apple', 'banana', 'orange', 'kiwi'];
    fruits.splice(2, 1, 'grape'); // ['apple', 'banana', 'grape', 'kiwi']
    ```

7. **slice()**: Returns a shallow copy of a portion of an array into a new array object.

    ```javascript
    const fruits = ['apple', 'banana', 'orange', 'kiwi'];
    const citrus = fruits.slice(1, 3); // ['banana', 'orange']
    ```

8. **forEach()**: Calls a function for each element in the array.

    ```javascript
    const numbers = [1, 2, 3];
    numbers.forEach((num) => console.log(num)); // Outputs: 1, 2, 3
    ```

These are just a few of the many methods available for manipulating arrays in JavaScript. Each method serves a specific purpose and can be used to efficiently work with arrays in your code.

**Objects in JavaScript**

- IN JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

- The key of a property can be a string. And the value of a property can be any value, e.g., *string*, a *number*, an *array*, and even a *function*.

- JavaScript provides us with many ways to create an object. The most commonly used one is to use the object literal notation.

- Every object in JavaScript describes a different Entity with its properties

Example 1:
```JavaScript
> var car = {
... "model_no": "wxy123",
... "brand": "abc",
... "top_speed": 200,
... "color": "red"
... };

> console.log(car);
{ model_no: 'wxy123', brand: 'abc', top_speed: 200, color: 'red' }

// fatch the value from object

// dot notation
> console.log(car.color);
red

// bracket notation
> console.log(car['model_no']);
wxy123
```

Example 2:
```JavaScript
// Create nested object

var myData = {
  firstName: "Supriyo",
  lastName: "Das",
  age: 36,
  address: {
    city: {
      line1: "Keota Kundubagan",
      line2: "Onkernath Lane",
      line3: "Near Onkernath Ashrom",
      nearByRailStation: "Bandel",
    },
    post: "Sahaganj",
    municipality: "Hooghly-Chuchura",
    dist: "Hooghly",
    state: "West Bengal",
    pincode: 712104,
  },
  friends: ["Jojo", "Kanai", "Sanu"],
  family: {
    father: "Let Mritunjoy Das",
    mother: "Sandhya Das",
    garden: "Sandhya Das (Aunt)",
    spose: "Rupa Das",
    daughter: "Rishika Das",
  },
};

console.log(myData.family.spose); // Rupa Das
```

**Conditional Statements(if, else, else-if)**

* Conditional statements, also known as decision-making statements, are a fundamental concept in programming. They allow you to control the flow of your program based on certain conditions.

*There are three main types of conditional statements:*

**if statement:** This statement checks a condition. If the condition is true, a block of code is executed.

**else statement:** This statement is used in conjunction with an if statement. If the condition in the if statement is false, the code block in the else statement is executed.

**else if statement:** This statement is also used in conjunction with an if statement. It allows you to check multiple conditions. If the condition in the if statement is false, the conditions in the else if statements are checked sequentially. If a condition in an else if statement is true, the corresponding code block is executed, and the remaining else if and else statements are skipped. If none of the conditions are true, the code block in the else statement (if it exists) is executed.

Example:
```JavaScript
var myScore = 93;

// if else
if (myScore >= 90) {
  console.log("yaeee! I got the bicycle");
} else {
  console.log("opps! missed this time");
}

// if else-if else
if (myScore >= 90) {
  console.log("Grade A");
} else if (myScore >= 70 && myScore < 90) {
  console.log("Grade B");
} else if (myScore >= 50 && myScore < 70) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
```
Output:
```
yaeee! I got the bicycle
Grade A
```
**The for loop**

- loops are the statements that we can use to control a flow of the program and to do some repeatative.

Example1:

```JavaScript
// for loop
for (var i = 0; i < 10; i++) {
  console.log("Hello World");
}
```

Example2:
```JavaScript
var arr = [2, 3, 4, 5, 6, 7, 8, 9];

var squreArray = [];

for (var i = 0; i < arr.length; i++) {
  squreArray.push(arr[i] * arr[i]);
}

console.log(squreArray);
```

**The while loop**

- Awhile loop evaluated the condition inside the parenthesis ().

- If the condithin evaluates to true, the code inside the while loop is executed.

- The condithin is evaluated again.

- This process continues untill the condition is false.
- When the condition evaluates to false, the loop stops.

Example1:
```JavaScript
var i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
```

**The do-while loop**

- A do...while loop in JavaScript is similar to a while loop, but with one key difference: it always executes its code block at least once, and then repeats the loop as long as the specified condition evaluates to true.

```JavaScript
var i = 11;

do {
  console.log(i);
} while (i <= 10);
```

**for in loop**

- In JavaScript, the for-in loop allows us to loop through the properties of an object.

- The statements of code found within th eloop body will be executed once for each property of the object.

Example1:
```JavaScript
// for in loop with object

var colors = {
  primary: "red",
  secondary: "yellow",
  thirdly: "green",
  fourthly: "blue",
};

for (var color in colors) {
  console.log(color + " -> " + colors[color]);
}
```

Example2:
```JavaScript
// for in loop with Array

var colorsArray = [
  "violate",
  "Indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];

for (var color in colorsArray) {
  console.log(color + " -> " + colorsArray[color]);
}
```

**for of loop**

- The for of sratement creates a loop iterating over iterable objects.
- including: built-in string, Array, array-like objects like NodeList and also map and set.

Example1:
```JavaScript
// for of loop

var scores = [12, 24, 45, 23];

for (var score of scores) {
  console.log(score);
}

// for of loop with index
for (var [index, value] of scores.entries()) {
  console.log(index + " : " + value);
```

Example2:
```JavaScript
// for of loop with string
var str = "Supriyo Das";

for (var c of str) {
  console.log(c);
}
```

**Functions in JavaScript**

What are Functions?

*A function is a block of code that performs a specific task*

- A JavaScript function is executed when "something" invokes it (calls it).

- Functions are one of the fundamental building bolcks in JavaScript.

- A function in JavaScript is similar to a procedure-a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, we must define it somewhere in the scope from which we wish to call it.

Declaring and invoking a Function

The syntax to declare and call a function is given below:

```PsudoCode
function demo() {
  // code goes here
} // This is how to declare a function

demo(); // Invoking or calling a function
```

Example:

```JavaScript
function greet() {
  console.log("Hello World");
}

greet();
```

Parameters and Arguments:

- A function can be defined with a set of parameters that it will take Parameters are generally the values that we want the function to accept

- Arguments are the values that we pass for those Parameters.

Example:
```JavaScript
function add(a, b){
  console.log(a + b);
}

add(2, 3); // Arguments
```

**Functions as Expression**

- In JavaScript, functions can be defined in two ways: function declarations and function expressions. Function expressions allow you to create functions by assigning them to variables or using them within expressions. This makes functions behave like any other value in JavaScript.

Example:
```JavaScript
// Function as Expression

var add = function (a, b) {
  return a + b;
};

var result = add(4, 5);

console.log(result);
```

**Hoisting**

 Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are moved to the top of the scope, giving the impression that they are "hoisted" to the top.

There are two main aspects of hoisting in JavaScript:

1. **Variable Hoisting**: Variable declarations (not variable initializations) are hoisted to the top of their containing scope. However, the initialization remains in place.

    ```javascript
    console.log(x); // undefined
    var x = 5;
    ```

    This code is equivalent to:

    ```javascript
    var x;
    console.log(x); // undefined
    x = 5;
    ```

2. **Function Hoisting**: Function declarations are also hoisted to the top of their containing scope. This means that you can call a function before it's declared in the code.

    ```javascript
    foo(); // "Hello, I am foo!"

    function foo() {
        console.log("Hello, I am foo!");
    }
    ```

    This code works because the function declaration of `foo` is hoisted to the top, allowing you to call it before its actual declaration in the code.

However, it's important to note that function expressions (e.g., using `var`, `let`, or `const` to assign a function to a variable) are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function assignment.

```javascript
// This will throw a TypeError: foo is not a function
foo();

var foo = function() {
    console.log("Hello, I am foo!");
};
```

In this case, the variable `foo` is hoisted, but its value (the function) is not. Therefore, trying to call `foo()` before the function assignment will result in a TypeError.

**ES6 - EcmaScript 2015**

**ECMA** - *Eupropean Computer Manufacturer Association*

* ES6 or ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. It defines the standard for the implementation of JavaScript and it has become much more popular than the previous edition ES5.

* ES6 comes with significant changes to the JavaScript language. It brought several new features like let and const keyword, rest and spread operators, template literals, classes, modules and many other enhancements to make JavaScript programming easier and more functional.

**ES6 Feature**

1. let and the const keyword
2. Arrow Function
3. Default Parameter
4. Template Literals and Multi Line Strings
5. destructuring
6. Higher Order Functions
7. Promises
8. Classes
9. Modules

**Problems with var**

The main problems with `var` in JavaScript stem from its handling of scope and hoisting. Here's a breakdown of the key issues:

**1. Lack of Block Scope:**

- `var` variables are scoped to their nearest function, not the code block (like `if` statements or loops) where they are declared.
  - This can lead to unexpected behavior if you intend a variable to be local to a specific block.

**Example:**

```javascript
for (var i = 0; i < 3; i++) {
  console.log(i); // This will print 3 three times, not just inside the loop.
}

console.log(i); // Here, i is still accessible and holds the value 3.
```

**2. Hoisting Issues:**

- `var` declarations are hoisted to the top of their function scope. This creates the illusion that you can use a variable before it's declared.
  - While you can call functions before their declaration, using `var` variables before initialization will result in `undefined`.

**Example:**

```javascript
console.log(message); // This will print undefined

var message = "Hoisted!";
```

**3. Re-declaration and Shadowing:**

- You can re-declare `var` variables within the same scope, which can lead to confusion and unexpected behavior.
  - This can also lead to variable shadowing, where a local variable with the same name hides a global or outer scope variable.

**Example:**

```javascript
var message = "global";

function saySomething() {
  var message = "local";
  console.log(message); // This will print "local"
}

saySomething();
console.log(message); // This will still print "global"
```

**Solutions and Best Practices:**

To avoid these problems, it's generally recommended to use `let` and `const` instead of `var`.

- `let` variables have block scope, so they are only accessible within the block they are declared in.
- `const` variables are similar to `let` but cannot be re-assigned after declaration.

By using `let` and `const`, your code becomes more predictable and easier to reason about, especially in larger projects.

Here are some additional tips:

- Always declare variables at the top of their scope for better readability.
- Avoid relying on hoisting behavior to prevent bugs.
- If you need to support older browsers that don't understand `let` and `const`, you can use tools like Babel to transpile your code.

**let and const**

In JavaScript, `let` and `const` are keywords used to declare variables, but they have different characteristics, especially regarding scope and mutability. Here's a breakdown:

**Scope:**

* `let` and `const` variables have **block scope**. This means they are only accessible within the block of code where they are declared, such as an `if` statement or a loop. This helps prevent accidental modification of variables from other parts of your code.

**Mutability:**

* `let` variables **can be reassigned** a new value after their initial declaration. This is useful when you need a variable to hold different values throughout your code.
* `const` variables, however, are **constant**. Once you assign a value to a `const` variable, you cannot reassign it to a different value. This ensures that the value of the variable remains consistent throughout your code.

**General Best Practices:**

* It's generally recommended to use `const` by default for variables that don't need to be reassigned. This helps prevent accidental modification and makes your code more predictable.
* Use `let` only when you specifically need to reassign a variable.

**Additional Considerations:**

* `var` is an older keyword for declaring variables in JavaScript. It has different scoping rules (function scope) and can lead to unexpected behavior. It's recommended to avoid using `var` in favor of `let` and `const`.

Here's an example to illustrate the difference:

```javascript
if (true) {
  let x = 10;  // Block-scoped variable (accessible only within the if block)
  x = 20;      // Reassignment allowed with let
  const y = 30; // Block-scoped constant
}

console.log(x); // This will work (output: 20)
// console.log(y); // This will cause an error because y is not accessible outside the if block

// This will cause an error because you cannot reassign a const variable
y = 40;
```

By understanding `let` and `const`, you can write cleaner, more maintainable JavaScript code.

| Feature           | var                 | let                 | const               |
|-------------------|---------------------|---------------------|---------------------|
| Scope             | Function or Global  | Block                | Block                |
| Mutability       | Can be reassigned   | Can be reassigned   | Cannot be reassigned |
| Hoisting           | Yes (to top of scope, initialized with undefined) | Yes (to top of scope, but not initialized) | Yes (to top of scope, but not initialized) |
| Redeclaration     | Yes                  | No                   | No                   |
| Best Practice      | Avoid               | Use by default      | Use for constants   |


**Arrow Functions**

Arrow functions, introduced in ES6 (ECMAScript 2015), provide a concise syntax for writing JavaScript functions. Here's a breakdown of their key characteristics:

**Syntax:**

```javascript
(parameters) => { function body }  // Block body with curly braces and explicit return
(parameters) => expression          // Expression body, implicit return
```

**Key Features:**

* **Conciseness:** Arrow functions are often shorter than traditional function expressions, especially for simple functions.
* **Lexical `this`:** Unlike regular functions, arrow functions inherit the `this` value from their surrounding scope, making them useful for event listeners and callback functions.
* **No `arguments` object:** Arrow functions don't have their own `arguments` object. You can access function arguments using the `rest` parameter syntax (`...rest`).

**Use Cases:**

* **Simple function expressions:**  When you have a short function with a single expression as its body, arrow functions provide a cleaner syntax.
* **Callback functions:** Arrow functions are often used as callback functions because they inherit the `this` value from the surrounding scope.
* **Event listeners:** Similar to callbacks, arrow functions are well-suited for event listeners due to their lexical `this` binding.

**Here's an example comparing a traditional function with an arrow function:**

```javascript
// Traditional function
function add(x, y) {
  return x + y;
}

// Arrow function (expression body)
const add = (x, y) => x + y;

console.log(add(3, 5)); // Both functions will output 8
```

Example : 
```JavaScript
// Arrow Function
let test1 = () => console.log("Hello World"); // One liner function, no need to use carly breses {}

let test2 = (b) => {
  // For one parameter (here is b) no need to add parenthesis ()
  let c = b * b;
  console.log(c);
};

let test3 = (a, b) => {
  let sum = a + b;
  return sum;
};

test1();

test2(4);

console.log(test3(2, 5));
```

**Things to Consider:**

* Arrow functions cannot be used as constructors or with the `yield` keyword.
* They also don't have access to the `arguments` object.

By understanding arrow functions, you can write more concise and readable JavaScript code, especially for short functions and callbacks.

**Template Literal and multi-line string**

Template literals, introduced in ES6 (ECMAScript 2015), offer a powerful and versatile way to create strings in JavaScript. They address some limitations of traditional string concatenation and provide several advantages.

**Multi-Line Strings:**

* Creating multi-line strings is much easier and cleaner with template literals. You simply enclose your string within backtick characters (`) and can add line breaks directly within the string. This eliminates the need for awkward concatenation using the `+` operator or escape sequences with backslashes (`\n`).

**String Interpolation:**

* Template literals allow you to embed expressions within the string using `${expression}` syntax. This expression can be any valid JavaScript code that evaluates to a value. The evaluated value is then seamlessly inserted into the string.

**Tagged Template Literals (Advanced):**

* Template literals can be tagged with a function, providing more control over string manipulation and formatting. This is an advanced feature, but it can be useful for complex formatting scenarios.

Here's a comparison to illustrate the benefits of template literals:

**Traditional String Concatenation:**

```javascript
const name = "Alice";
const message = "Hello, " + name + "!\nHow are you today?";
console.log(message);
```

**Template Literal Equivalent:**

```javascript
const name = "Alice";
const message = `Hello, ${name}!
How are you today?`;
console.log(message);
```

As you can see, the template literal version is more concise, readable, and easier to maintain, especially for multi-line strings and dynamic content.

Example :
```JavaScript
// Multi line string
console.log(`My
Name
is
Supriyo Das`);

// use variable inside template leteral
let a = 34;

console.log(`My age is ${a}`); // template leteral
```

**Additional Considerations:**

* Template literals can also be used for string interpolation with variables of any data type, not just strings.
* They can be used to create HTML templates by embedding expressions within the string for dynamic content generation.

By using template literals effectively, you can improve the readability and maintainability of your JavaScript code, especially when dealing with strings and dynamic content.

**Destructuring Arrays**

In JavaScript, array destructuring is a powerful technique introduced in ES6 (ECMAScript 2015) that allows you to unpack values from an array into distinct variables. It provides a concise and readable way to extract specific elements from an array.

**Basic Destructuring:**

* Destructuring uses square brackets `[]` similar to array indexing, but on the left side of an assignment expression.
* You can assign variables to specific positions within the array based on their index.

```javascript
const numbers = [10, 20, 30];
const first = numbers[0];
const second = numbers[1];

// Using destructuring
const [first, second] = numbers;
console.log(first, second); // Output: 10 20
```

Example :
```JavaScript
// Destructuring Array

let arr = ["Hi", "I", "am", "Supriyo", "Das"];

let [a, b, c, d, e] = arr; // destructure all the element from arr Array.

console.log(a); // hi
console.log(b); // I
console.log(c); //am
```

**Destructuring with Rest Parameter:**

* The rest parameter (`...`) allows you to capture the remaining elements of an array into a new variable.
* It must be placed at the end of the destructuring pattern.

```javascript
const numbers = [10, 20, 30, 40];
const first = numbers[0];
const rest = numbers.slice(1); // Rest of the elements

// Using destructuring with rest parameter
const [first, ...rest] = numbers;
console.log(first, rest); // Output: 10 [20, 30, 40]
```

**Destructuring Defaults:**

* You can provide default values for variables in case the corresponding element in the array is missing.

```javascript
const colors = ["red", undefined, "blue"];
const firstColor = colors[0] || "default";
const secondColor = colors[1] || "default";

// Using destructuring with defaults
const [firstColor = "default", secondColor = "default"] = colors;
console.log(firstColor, secondColor); // Output: red default
```

**Nested Destructuring:**

* Destructuring can be nested to extract values from arrays within arrays.

```javascript
const data = ["name", ["Alice", "Bob"], age];
const name = data[0];
const people = data[1];
const age = data[2];

// Using nested destructuring
const [name, [firstName, lastName], age] = data;
console.log(name, firstName, lastName, age); // Output: name Alice Bob age
```

By effectively using array destructuring, you can write cleaner, more readable, and less error-prone code when working with arrays in JavaScript.

**Destructuring Object**

Destructuring in Javascript is a shorthand way to extract values from objects or arrays and assign them to variables. Particularly useful when you only need specific properties from an object.

Here's a breakdown of destructuring objects:

**Basic Destructuring:**

Imagine an object like this:

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
}
```

Normally, you'd access the properties like this:

```javascript
const name = person.name;
const age = person.age;
```

Destructuring allows achieving the same outcome in a cleaner way:

```javascript
const { name, age } = person;
```

Here, on the left side, we define an object pattern that mirrors the structure of the object we want to destructure. The variable names (`name` and `age`) match the property names in the original object. This creates new variables with the corresponding values from the object.

**Destructuring with Renaming:**

What if you want to use a different variable name for a property? Destructuring allows renaming during the assignment:

```javascript
const { name: fullName, age } = person;
```

Here, we're destructuring the `name` property but assigning it to a new variable named `fullName`.

**Default Values:**

Sometimes, a property might not exist in the object. You can provide a default value during destructuring:

```javascript
const { name = "John Doe", age } = person; // John Doe if name is missing
```

This assigns "John Doe" to `name` if the `name` property is absent in the original object.

**Destructuring Nested Objects:**

Destructuring works with nested objects too. Imagine the `person` object has an address property:

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  address: {
    street: "Main St",
    number: 100
  }
}
```

To access the `street` property within the nested `address` object:

```javascript
const { address: { street } } = person;
```

Here, we create another nested object pattern on the left to match the structure of the nested object.

**Rest Operator:**

The rest operator (`...`) can be used to capture remaining properties into a single object:

```javascript
const { name, ...rest } = person; // rest will contain { age: 30, city: "New York", address: {...}}
```

This is useful when you only need a specific property and want to group the rest into another object.

Destructuring improves code readability and makes it easier to work with objects, especially when dealing with nested data structures.

**Modules and Modularity**

In JavaScript, modules are a way to organize your code into reusable and self-contained units. They promote code modularity, which is the practice of breaking down large programs into smaller, more manageable pieces.

**Why Use Modules?**

Here are some benefits of using modules in JavaScript:

* **Improved Organization:** Modules help structure your codebase by separating functionalities into logical units. This makes your code easier to understand, maintain, and navigate.
* **Reusability:** Modules allow you to create reusable code components. You can import a module into different parts of your application or even use it in other projects.
* **Reduced Complexity:** By breaking down complex logic into smaller modules, you can reason about and debug code more easily.
* **Private vs Public Members:** Modules allow you to control which parts of your code are accessible to other parts of the application. You can define private variables and functions that are only accessible within the module, and public functions and variables that can be imported and used by other modules.

**How Modules Work in JavaScript**

JavaScript introduced a formal module system in ECMAScript 2015 (ES6). Modules are typically created in separate files with a `.js` or `.mjs` extension. Here's a basic overview of how modules work:

1. **Exporting Code:** You can use the `export` keyword to define functions, variables, or classes that you want to make available to other modules.
2. **Importing Code:** The `import` statement is used to import functionalities from other modules. You can specify which exports you want to bring into your current module.

**Here's an example to illustrate this:**

**math.js (Module with exports):**

```javascript
export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}
```

**main.js (Module importing math.js):**

```javascript
import { add, subtract } from './math.js'; // Import specific exports

const result1 = add(5, 3);
const result2 = subtract(10, 2);

console.log(result1); // Output: 8
console.log(result2); // Output: 8
```

In this example, the `math.js` module exports two functions, `add` and `subtract`. The `main.js` module imports these specific exports and then uses them to perform calculations.

Example : 

`calc.js`
```JavaScript
const add = (a, b) => console.log(a + b);
const sub = (a, b) => console.log(a - b);
const mul = (a, b) => console.log(a * b);
const div = (a, b) => console.log(a / b);

module.exports = {
  addition: add,
  subtruction: sub,
  multiplication: mul,
  divition: div,
};
```

`main.js`
```JavaScript
const calc = require("./calc");

calc.addition(4, 6);
calc.subtruction(12, 5);
calc.multiplication(3, 9);
calc.divition(15, 6);
```

**Additional Considerations:**

* **Module Loaders:** Modern browsers and JavaScript environments like Node.js use module loaders to handle loading and executing modules.
* **Module Types:** There are different module types like CommonJS and ES Modules. The specific syntax and approach might vary slightly depending on the module type. 
* **Bundlers:** For larger projects, bundlers like Webpack are often used to manage dependencies and combine multiple modules into a single file for better performance in browsers.

By effectively using modules and modularity principles, you can write cleaner, more maintainable, and scalable JavaScript applications.

**Functional Programming**

Functional programming is a programming paradigm designed to handle functions in a better way in JS (mainly pure functions)

JavaScript is a multi-paradigm lannguage. We can use object-oriented, procedural and functional programming paradigms all at the same time in JavaScript

Functional programming has a few important concepts that we need to know and understand. By implementing these concepts in our applications, we will end up with more functional code. this will make a huge difference in our application, makeing it more readable, usable, managable and easy to test.

**Key Features of Functional**

*Programming*
1. Imperative an Declarative way of writing code.
2. Pure functions and what are Side effects?
3. Higher Order Functions (map, filter, reduce, etc)
4. Composition
5. Closures
6. Currying

**Impreative and Declerative way to write code**

In JavaScript, there are two main approaches to writing code: imperative and declarative. Here's a breakdown of each concept and how they differ:

**Imperative Programming:**

* Focuses on "how" to achieve a specific outcome.
* Provides step-by-step instructions for the computer to execute.
* Often uses control flow statements like `if`, `for`, and `while` loops to control the flow of execution.
* Mutates the state of variables directly.

**Example (Imperative):**

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

**Explanation:**

1. We define an array `numbers`.
2. We initialize an empty array `doubledNumbers` to store the results.
3. We use a `for` loop to iterate through each element in the `numbers` array.
4. Inside the loop, we calculate the doubled value and push it into the `doubledNumbers` array.
5. We print the `doubledNumbers` array containing the doubled values.

**Declarative Programming:**

* Focuses on "what" the desired outcome is, leaving the "how" to the underlying system.
* Often uses functions and expressions to describe the desired state or transformation.
* Avoids mutating existing data structures and instead creates new ones with the desired result.

**Example (Declarative):**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

**Explanation:**

1. We define an array `numbers`.
2. We use the `map` method on the `numbers` array.
3. The `map` method takes a callback function that defines the transformation for each element.
4. Inside the callback, we multiply the current element (`number`) by 2 and return the result.
5. `map` creates a new array (`doubledNumbers`) containing the doubled values.
6. We print the `doubledNumbers` array with the results.

**Key Differences:**

* **Control Flow:** Imperative code explicitly controls the flow using loops and conditionals, while declarative code relies on higher-order functions (like `map`) to handle iteration and transformations.
* **Data Mutation:** Imperative code often modifies existing variables, while declarative code tends to create new data structures with the desired outcome.
* **Readability:** Declarative code can sometimes be more concise and easier to read, especially for complex operations.

**Choosing the Right Approach:**

* **Simple Tasks:** Imperative code might be more straightforward for basic tasks.
* **Complex Logic:** Declarative code can be cleaner and easier to reason about for complex data transformations.
* **Functional Programming:** If you're using functional programming principles in JavaScript, declarative style is often preferred.

**Pure Functions and Side Effects**

A **pure function** is a function which:
> Given the same input, always returns the same output.
> Produces no side effects.

Example : Pure and Impure function

```JavaScript
// Impure function

var a = 2;

const add = (x) => {
  // This function is dependent on external a value, If the a value changes result of this function is changed.
  console.log(a + x); // console.log use a external resource : console,
  a++;
};

console.log(`Impure Function result : `);
add(2);
add(2);
add(2); // The result is changes every time althow we given the same value as a parameter

//Pure function
const add1 = (b, y) => {
  return b + y; // this function is not dependent any external resources.
};

console.log(`Pure function result : `);
console.log(add1(3, 4));
console.log(add1(3, 4));
console.log(add1(3, 4));
```

**Callback functions**

* In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be involed at a later stage of time.
* Since in JavaScript, functions are objects, functions can be passed as arguments.

Example 1: 
```JavaScript
// Callback function

const printName = (firstName, lastName) => {
  firstName("Supriyo");
  lastName("Das");
};

const firstName = (fn) => {
  console.log(fn);
};

const lastName = (ln) => {
  console.log(ln);
};

printName(firstName, lastName); // Send functions (firstName and lastName) as arguments.
```

Example 2 : 
```JavaScript
// Callback Function

const even = (n) => n % 2 === 0;

const printEven = (even, num) => {
  let isEven = even(num);

  console.log(`The number ${num} is an Even number ${isEven}`);
};

printEven(even, 15);
```

**Hogher Order Function(map and forEach)**

Higher order functions are functions that operate on other functions, eithe by taking them as arguments or by returning them. In simple words, A higher-Order functon is a function that receives a function as a argument or returns the function as output.

**Map** 
- Map will loop through every element of our array and will perform specific operations that we have provided.
- Map method will always return us a new array with our results.

Example1:

```JavaScript
// Higher-Order Function

const arr = [1, 2, 3, 4, 5];

// Map
const sqrArray = arr.map(function (n) {
  return n * n;
});

console.log(sqrArray);
```

Example2 :

```JavaScript
// Convert Rupee to Doller my account transaction

const transactionRs = [1000, 3000, 4000, 2000, -898, -3800, -4500];
const inrToDoller = 80;

const transactionDoller = transactionRs.map((n) => {
  return Number((n / inrToDoller).toFixed(2));
});

console.log(transactionDoller);
```

**forEach**

- The forEach() method is a built-in function in JavaScript that iterates over the elements of an array. It executes a provided function once for each element in the array, allowing you to process or transform the elements as needed.
- It doesn't return a value

Example:

```JavaScript
// forEach

const inr = [1000, 3000, 4000, 2000, -898, -3500, -4325];
const inrToDoller = 80;

const doller = inr.forEach((amount) => {
  console.log(Number(amount / inrToDoller).toFixed(2)); // forEach cann't return a value
});
```

**find, findindex, some and every**

**find** : returns the first element of an array that satiasfy the condition.

```JavaScript
// find 
const transaction = [1000, 3000, 4000, 2000, -898, 1200, -3600, -1500];

let firstWithdrawl = transaction.find((n) => {
  return n < 0;
});

console.log(firstWithdrawl); // -898
```

**findIndex** : returns the index of first element of an array that satisfy the conditions.

```JavaScript
//findIndex 

let transaction = [1000, 3000, 2000, -898, -1200, 4000, -3600];

let firstTransnsactionIndex = transaction.findIndex((n) => {
  return n < 0;
});

console.log(firstTransnsactionIndex); // 3
```

**some method** : 
> To get true or false based on a condition
> It will return true if even one statement satisfies the condition.

**every method**
> To get true or false based on a condition
> It will return true if all statement satisfies the condition.

```JavaScript
// some and every method

let transaction = [1000, -3000, 2000, 4000, -899, 1200];

// some method
let resultSome = transaction.some((n) => {
  return n < 0;
});

console.log(resultSome); // true

// every method
let resultEvery = transaction.every((n) => {
  return n < 0;
});

console.log(resultEvery); // false
```

**filter method**
> Filter returns a new array it will return all those elements that matches the specific condition
> If the condition is true it will return the element for that condition and if it is false it will discard the element.

```JavaScript
// filter method

let arr = [2, 5, 6, 8, 3, 12, 43, 25, 33, 22];

let evenArray = arr.filter((n) => {
  return n % 2 == 0;
});

console.log(evenArray);
```

**Reduce method**
> Reduce method always returns a single result.

```JavaScript
// Some of every element in an Array

let arr = [1, 2, 3, 4, 10];

let sumArr = arr.reduce((acc, value) => {
  // accumulator, value
  let result = acc + value;
  return result;
}, 0); // Initial accumulator = 0;

console.log(sumArr); // 20
```

**Chaining Methods**
> Chaining is a programming technique that allows us to call multiple methods on the same object consecutively, with each method call returning the object itself. This creates a chain-like syntax that can improve readability and maintainability of our code.

```JavaScript
// Chaining Method
let arr = [
  { name: "A", age: 13, gender: "M" },
  { name: "B", age: 34, gender: "F" },
  { name: "C", age: 17, gender: "M" },
  { name: "D", age: 22, gender: "F" },
  { name: "E", age: 42, gender: "M" },
  { name: "F", age: 14, gender: "M" },
  { name: "G", age: 28, gender: "F" },
  { name: "H", age: 16, gender: "F" },
];

// Ages of all the Man(Male)
// Chaining map method after filter method.
let ageOfMales = arr
  .filter((obj) => {
    return obj.gender == "M";
  })
  .map((male) => {
    return male.age;
  });
```

**Object Oriented JavaScript**

Object-orinted programming (OOP) is a computer programming model that organizes softwate design around data, or objects, rather than functions and logic. An object can be defined as a data fild that has unique attributes and behavior.

The Four Pillars of OOPs are : 
1. *Encapsulation*
2. *Absrtaction*
3. *Polymorphism*
4. *Inheritance*

JavaScript is not actually an Object Oriented Language, but we can write objcet oriented code by using something called as a Prototype object.

**OOPs Module** :
1. this keyword
2. constructor functions
3. classes
4. classical inheritance
5. encapsulation
6. polymorphism
7. prototype object
8. prototypal inheritance
9. call apply bind

**Non-strict and strict mode**

JavaScript offers two main ways to run your code: non-strict mode (sometimes referred to as "sloppy mode") and strict mode. They differ in how they handle errors and certain syntax.

**Non-strict mode** is the default behavior in JavaScript. It allows for more flexible coding but can lead to errors that might go unnoticed. Here's what you can encounter in non-strict mode:

* **Silent errors:** Certain mistakes might not cause any errors and lead to unexpected behavior.
* **Accidental globals:** Using an undeclared variable creates a global variable by default.
* **Duplicate function parameters:** Functions can have duplicate parameter names, causing confusion.
* **Deleting non-configurable properties:** You can delete properties even if they are not meant to be changed.

Example:
```JavaScript
// Non-strict mode

a = 10;

console.log(a); // 10 will be printed
```

**Strict mode**, on the other hand, enforces stricter rules and helps catch errors early on. Here are some benefits of using strict mode:

* **Catches errors:** Strict mode throws errors for things like undeclared variables, making debugging easier.
* **Prevents accidental globals:** Using a variable before declaration results in an error.
* **Disallows duplicate function parameters:** Function parameters must have unique names.
* **Protects properties:** You cannot delete properties that are marked as non-configurable.

Here's how to enable strict mode:

```javascript
"use strict";

// Your code here will run in strict mode
```

You can enable strict mode at the beginning of a script, a function, or even a block of code.

Example:
```JavaScript
"use strict";

a = 10;

console.log(a); // ReferenceError: a is not defined
```
```JavaScript
"use strict";

let a = 10;

console.log(a); // 10 will be printed
```

**Choosing between non-strict and strict mode:**

* **Strict mode is generally recommended** for modern JavaScript development. It helps write cleaner, more reliable code.
* **Non-strict mode might be used** for compatibility with older code that relies on its looser behavior. However, it's advisable to migrate such code to strict mode eventually.

Remember, strict mode coexists with non-strict mode. You can gradually incorporate strict mode into your codebase for a smoother transition.

**The `this` keyword in JS**

`this` keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, `this` references the global object. If the function that is being referenced is a method in an object, `this` references the object itself.

The JavaScript `this` keyword is one of the most widely used keywords, It can seem complex at first, but once we start using `this` keyword, everything will become clear.


`this` keyword -> Node.js in Non-Strict mode:

```JavaScript
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
```

`this` keyword -> Node.js in Strict mode

```JavaScript
// this keyword with Node.js in Strict mode
"use strict";

console.log(this); //{}

function displayThis() {
  console.log(this);
}

displayThis(); // undefined

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

myObj1.myfn1(); // undefined
```

`this` keyword Non Strict in browser

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="this2.js"></script>
  </body>
</html>
```

this2.js
```JavaScript
/ this keyword Non Strict mode in browser

console.log(this);   // window obj

function displayThis() {
  console.log(this);
}

displayThis();   // window obj

let myObj = {
  name: "Supriyo Das",
  age: 36,

  myfn: function () {
    console.log(this);
  },
};

myObj.myfn();   // object itself

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
```
`this` keyword strict monde in browser

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="this3.js"></script>
  </body>
</html>
```

this3.js
```JavaScript
// this keyword Strict mode in browser

"use strict";

// console.log(this); // window obj

// function displayThis() {
//   console.log(this);
// }

// displayThis(); // undefined

// let myObj = {
//   name: "Supriyo Das",
//   age: 36,

//   myfn: function () {
//     console.log(this);
//   },
// };

// myObj.myfn(); // {name: 'Supriyo Das', age: 36, myfn: ƒ}

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

myObj1.myfn1(); // undefined
```

`this` keyword in various mode

![this](https://github.com/sanu151/JavaScript/assets/68671274/23fcf30c-3093-4010-9f31-d493a39c21e5)

**Constructor Function**

In object-oriented programming, a constructor function is a special function that is used to create and initialize new objects of a certain class. It defines the blueprint for the objects of that class, specifying the properties and behaviors that they will share.

Here are some key points about constructor functions:

* **Creation and Initialization:** When a constructor function is called using the `new` keyword, it creates a new object and initializes its state by assigning values to its properties.
* **`this` Keyword:** Inside the constructor function, the `this` keyword refers to the new object being created. It is used to assign property values to the object.
* **Common Naming Convention:** Constructor functions are typically named with a capital letter to distinguish them from regular functions.

```JavaScript
// Constractor Function

function students(_name, _stream, _semister) {
  this.name = _name;
  this.stream = _stream;
  this.semister = _semister;

  this.studentData = () => {
    console.log(
      `I am ${this.name}, I am doing ${this.stream} from ABC University, This is my ${this.semister} semister`
    );
  };
}

let student1 = new students("Supriyo Das", "BCA", "VI");
let student2 = new students("Rupa Das", "BBA", "III");

student1.studentData();  // I am Supriyo Das, I am doing BCA from ABC University, This is my VI semister
student2.studentData(); // I am Rupa Das, I am doing BBA from ABC University, This is my III semister
```

Constructor functions are a fundamental concept in object-oriented programming as they provide a mechanism to create objects with specific properties and behaviors.

**Classes in JavaScript**

In JavaScript, classes provide a more structured and syntactic sugar way to achieve what constructor functions do. They act as blueprints for creating objects with similar properties and methods.

Here's a breakdown of classes in JavaScript:

**Similarities to Constructor Functions:**

* **Blueprints for Objects:** Like constructor functions, classes define the properties and behaviors that objects of that class will have.
* **`this` Keyword:** The `this` keyword inside a class also refers to the new object being created.

**Differences and Advantages of Classes:**

* **Syntax:** Classes use a cleaner and more familiar syntax compared to constructor functions.
* **Constructors:** Classes still have constructors (a special method named `constructor`), but they are defined within the class itself.
* **Methods:** Methods are defined directly inside the class body, improving readability and organization.

```JavaScript
// JavaScript Classes

class Persion {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  welcome() {
    console.log(`Welcome ${this.name}`);
  }
}

let persion1 = new Persion("Supriyo Das", 36);
let persion2 = new Persion("Gobinda Pal", 22);

console.log(persion1); // Persion { name: 'Supriyo Das', age: 36 }

persion2.welcome(); // Welcome Gobinda Pal
```

**Inheritance**

Methods & Properties from base class can be put down or can be passed into derived class.

Inheritance in JavaScript is a mechanism that allows you to create new classes (child classes) that inherit properties and methods from existing classes (parent classes). This promotes code reusability and simplifies the creation of related objects.

There are two main ways to achieve inheritance in JavaScript:

1. **Prototype-based Inheritance:** This is the traditional way of achieving inheritance in JavaScript. In this approach, objects inherit properties and methods from their prototype objects. Each object has an internal hidden link to another object called its prototype. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it's not found there, it then looks for it on the object's prototype, and then on the prototype's prototype, and so on until it's found or reaches the end of the prototype chain (which ends at null).

2. **Class-based Inheritance (ES6):** Introduced in ECMAScript 2015 (ES6), JavaScript introduced a class-based syntax for inheritance that is similar to how inheritance works in other class-based languages like Java or C++. Here, the `extends` keyword is used to create a child class that inherits from a parent class. The child class can access the properties and methods of the parent class and can also add its own.

Example:
```JavaScript
// Inheritance in JavaScript

class Animal {
  constructor(_species, _sound, _legs) {
    this.species = _species;
    this.sound = _sound;
    this.legs = _legs;
  }
}

class cat extends Animal {
  constructor(_species, _sound, _legs, _name, _age, _color) {
    super(_species, _sound, _legs);
    this.name = _name;
    this.age = _age;
    this.color = _color;
  }

  makeSound() {
    console.log(`${this.species} sounds ${this.sound}`);
  }
}

let myPet = new cat("Cat", "Meow", "Four", "Newton", 2, "White");

console.log(myPet);

myPet.makeSound();
```
output:
```
cat {
  species: 'Cat',
  sound: 'Meow',
  legs: 'Four',
  name: 'Newton',
  age: 2,
  color: 'White'
}
Cat sounds Meow
```

**Method Inheritance**

Example:

```JavaScript
// Method Inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Welcome ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, empID, position) {
    super(name, age);
    this.empID = empID;
    this.position = position;
  }

  hello() {
    super.greet();
  }
}

let employee1 = new Employee("Ratul", 32, 2197, "Sales Executive");

console.log(employee1);
employee1.hello();
```
Output:
```
Employee {
  name: 'Ratul',
  age: 32,
  empID: 2197,
  position: 'Sales Executive'
}
Welcome Ratul
```

**Polymorphism**

The word "polymorphism" comes from the Greek words "poly" meaning many and "morph" meaning form. So, literally, it means "having many forms".

In computer science, and especially in object-oriented programming, polymorphism refers to the ability of objects to respond differently to the same message. This message can be a method call, an operator, or any interaction with the object.

Here's how polymorphism helps:

* **Flexibility:** Code becomes more flexible as you can treat objects of different types in a similar way if they respond to the same message.
* **Code Reusability:** By defining generic behaviors in a base class, subclasses can inherit and potentially specialize them, reducing code duplication.
* **Maintainability:** Polymorphism can make code easier to maintain as changes to a base class behavior can propagate to its subclasses automatically.

Example:

```JavaScript
// Polymorphism in JavaScript

class Animal {
  sound() {
    console.log(`Animal make differente Sound`);
  }
}

class Cat {
  sound() {
    console.log("Cat Mews");
  }
}

class Dog {
  sound() {
    console.log("Dog Barks");
  }
}

let animal1 = new Animal();
let cat1 = new Cat();
let dog1 = new Dog();

animal1.sound();
cat1.sound();
dog1.sound();
```
Output:
```
Animal make differente Sound
Cat Mews
Dog Barks
```

**Encapsulation**

Encapsulation in JavaScript is a technique to bundle data (properties) and the functions (methods) operating on that data within a single unit, typically a class. It promotes data protection, code reusability, and maintainability.

Here's why encapsulation is important in JavaScript:

* **Data Protection:** By controlling access to properties, you can prevent them from being accidentally modified from outside the class.
* **Code Reusability:** Classes act as blueprints for creating objects with similar properties and behaviors.
* **Maintainability:** Encapsulated code is easier to understand and modify as changes to internal implementation details are isolated within the class.

While JavaScript doesn't have strict keywords like `private` or `public` for access control, there are ways to achieve encapsulation:

1. **Closures:** A closure is a function that can access variables from its outer scope even after the outer function has returned. This allows you to create private variables within a constructor function that can only be accessed by methods defined within the same closure.

2. **Classes (ES6+):** Classes introduced in ECMAScript 6 (ES6) provide a more traditional object-oriented approach. While properties are still public by default, you can simulate private properties using weak maps or symbol properties. Additionally, getter and setter methods offer controlled access to properties.

Here are some resources to explore further:

* **Closures for Encapsulation:** [https://medium.com/@licaretraul/closure-in-javascript-6b9087ec3108](https://medium.com/@licaretraul/closure-in-javascript-6b9087ec3108)
* **Encapsulation with Classes:** [https://www.javatpoint.com/javascript-oops-encapsulation](https://www.javatpoint.com/javascript-oops-encapsulation)

Example
```JavaScript
// Encapsulation

class Person {
  constructor(_name, _age) {
    var name = _name;
    var age = _age;
  }
  // Encapsulate values using getting and setting method
  getName() {
    return this.name;
  }
  setName(_name) {
    this.name = _name;
  }
  getAge() {
    return this.age;
  }
  setAge(_age) {
    this.age = _age;
  }
}

let person1 = new Person();
person1.setName("Supriyo");
person1.setAge(36);

// person1 values are encapsulated and can't change using getName method.
console.log(person1.getName());
console.log(person1.getAge());
```

**Prototype and Prototype Inharitance**

In Object-Oriented Programming (OOP), a prototype is a blueprint or an object that serves as a base for creating other objects. These other objects inherit properties and methods from the prototype.

In Object-Oriented Programming (OOP), inheritance is a powerful tool for code reuse. It allows you to create new objects (child objects) that inherit properties and methods from existing objects (parent objects). JavaScript utilizes a concept called **prototypal inheritance** to achieve inheritance.

Here's a breakdown of prototypes and inheritance in JavaScript:

**Prototypes:**

* Every object in JavaScript has a hidden property called [[Prototype]] (written as `__proto__` in some browsers' developer tools for demonstration purposes). 
* This property points to another object, which is the object's prototype.
* The prototype object can also have its own prototype, forming a chain. This chain continues until it reaches an object with a `null` prototype, marking the end.

JavaScript, however, takes a different approach to OOP compared to languages like Java or C++. JavaScript uses a prototype-based inheritance model. Here's how prototypes work in JavaScript:

1. **Every Function has a Prototype:**  In JavaScript, every function (including constructor functions) has a property called `prototype`. This prototype object is used to attach properties and methods that will be shared by all instances (objects) created using that function.

2. **Prototype Chain:** When you create an object from a constructor function, that object gets linked to the constructor's prototype through a hidden property (usually denoted by `__proto__`). This creates a prototype chain.

3. **Property Lookup:** When you try to access a property on an object, JavaScript first looks for it on the object itself. If the property isn't found there, it then follows the prototype chain and searches the prototype object, then the prototype's prototype, and so on until it either finds the property or reaches the end of the chain (null).

Here's an example to illustrate:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hi, my name is " + this.name);
}

const person1 = new Person("Alice");
person1.greet(); // Output: "Hi, my name is Alice"
```

In this example, the `greet` method is defined on the `Person.prototype`. When we call `person1.greet()`, JavaScript first looks for `greet` on `person1`. Since it's not there, it follows the prototype chain to `Person.prototype` and finds the method.

This prototype-based approach allows JavaScript to achieve inheritance without explicit class definitions. It promotes code reusability and reduces memory usage by sharing properties and methods among objects.

For a deeper understanding, you can refer to these resources:

* [JavaScript Object Prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)
* [Object prototypes - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)


**Prototype Inheritance:**

* When you create a new object using a constructor function, the constructor's prototype becomes the new object's [[Prototype]].
* When you try to access a property on an object, JavaScript first looks for it on the object itself.
* If the property isn't found there, JavaScript follows the prototype chain, looking for the property on the object's prototype, then the prototype's prototype, and so on.
* This allows child objects to inherit properties and methods from their parent objects without copying them directly.

**Benefits:**

* **Code Reuse:** By inheriting from existing objects, you avoid duplicating code for shared functionalities.
* **Maintainability:** Changes made to the parent object's prototype are reflected in all child objects that inherit from it.

**Things to Consider:**

* JavaScript's inheritance differs from classical class-based inheritance in languages like Java or Python.
* Be mindful of modifying inherited properties accidentally through the prototype chain.

Here are some resources for further exploration:

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/](https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/)

**Prototypical inharitance chain**

![image](https://github.com/sanu151/JavaScript/assets/68671274/594e2174-8048-406d-b264-650836b722b5)

**Call Apply and Bind**

All three, `call`, `apply`, and `bind`, are functions in JavaScript used to control the context of a function, specifically the value of the `this` keyword within the function. Here's a breakdown of each:

**Call**

* **Execution:** Executes the function immediately.
* **Arguments:** Takes two or more arguments. 
    * The first argument sets the value of `this` inside the function.
    * Subsequent arguments are passed as normal function arguments.

**Apply**

* **Execution:** Executes the function immediately.
* **Arguments:** Takes two arguments.
    * The first argument sets the value of `this` inside the function.
    * The second argument is an array containing all the other arguments to be passed to the function.

**Bind**

* **Execution:** Doesn't execute the function immediately. Instead, it creates a new function with the specified `this` value bound to it.
* **Arguments:** Takes two or more arguments.
    * The first argument sets the value of `this` inside the new function.
    * Subsequent arguments are optional and are pre-filled into the new function when it's called later.

**Key Differences**

* Call and apply execute the function immediately, while bind creates a new function for later execution.
* Call takes individual arguments after the `this` argument, while apply takes an array of arguments.

**Use Cases**

These functions are useful when you want a function to run with a specific context (`this` value) in mind. Common scenarios include:

* **Event Handlers:** In event-driven programming, you might want a function to access an object's properties when triggered by an event. You can use `call` or `apply` to bind the function to that object.
* **Callback Functions:**  When passing functions as arguments (callbacks), you might want to ensure they have a specific context when executed. You can use `bind` to create a new function with the desired context pre-set.

Here's an analogy: Imagine a function as a chef. Call and apply are like giving the chef specific ingredients (arguments) and telling them to cook immediately. Bind is like assigning the chef to a kitchen (setting the context) and letting them know what ingredients (some arguments) to use when you eventually tell them to cook.

Example:

```JavaScript
// Call Apply and Bind Method

let personDetails = function (city, a, occupation) {
  console.log(
    `Hi, I am ${this.firstName} ${this.lastName}. I am ${this.age} years old. I am from ${city}. I am ${a} ${occupation}`
  );
};

let perosn1 = {
  firstName: "Supriyo",
  lastName: "Das",
  age: 36,
};

let person2 = {
  firstName: "Rupa",
  lastName: "Das",
  age: 27,
};

let person3 = {
  firstName: "Rishika",
  lastName: "Das",
  age: 6,
};

// call Method
personDetails.call(perosn1, "Bandel", "an", "Engineer");

// apply Method
personDetails.apply(person2, ["Siddheswari", "a", "Home maker"]); // parameter will be pass as an arry in apply method

// bind Method
let myData = personDetails.bind(person3, "Bandel", "a", "Student"); // bind method used for store a function
myData();
```

**Synchronous and Asynchronous Programming**

*What is Synchronous and Asynchronous Programming*

* Synchromous Programming means it will use a single-thread, so only one operation of program will run at a time.

  > Sync is blocking - it will only send the server one request at a time and will wait fro that request to be answered by the server.

* Asynchromous is non-blocking, which means it will send multiple requests to a server at a time.

  > Async increases throughput because multiple operations can run at the same time.

![image](https://github.com/sanu151/JavaScript/assets/68671274/5b06eb41-f754-4964-9e51-37764e8460e9)

Sync function Example:
```JavaScript
const fs = require("fs");

console.log(`first line`);

let data = fs.readFileSync("demo.txt", "utf-8");
console.log(data);

console.log(`last line`);
```
Output:
```
first line
A quick brown fox jumpes over the lazy dog
last line
```

Async function Example:
```JavaScript
const fs = require("fs");

console.log(`first line`);

let data = fs.readFile("demo.txt", "utf-8", rfe); // now the block of code will execute leter
function rfe(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

console.log(`last line`);
```
Output
```
first line
last line
A quick brown fox jumpes over the lazy dog
```

**setTimeout**

The `setTimeout` function in JavaScript is used to delay the execution of a block of code by a specified amount of time. It's one of the main tools for creating asynchronous behavior in your web pages.

Here's how it works:

* **Syntax:**

```javascript
setTimeout(function, milliseconds);
```

* **Parameters:**
  * `function`: This is the function that you want to execute after the delay. It can be an anonymous function defined directly within the `setTimeout` call or a named function defined elsewhere in your code.
  * `milliseconds`: This is the delay in milliseconds. 1 second is equal to 1000 milliseconds.

* **Behavior:**
  * `setTimeout` schedules the provided function to be executed after the specified delay.
  * The JavaScript engine continues to execute other code after calling `setTimeout`. The execution of the delayed function doesn't block the main thread. This makes `setTimeout` asynchronous.
  * You can optionally store the return value of `setTimeout` in a variable for later use with `clearTimeout` (explained below).

Here's a simple example:

```javascript
function sayHi() {
  console.log("Hi!");
}

setTimeout(sayHi, 2000); // Call sayHi after 2 seconds (2000 milliseconds)

console.log("This will be logged first");
```

In this example, the code "This will be logged first" will be printed immediately, because `setTimeout` doesn't block the main thread. Then, after 2 seconds, the `sayHi` function will be executed, printing "Hi!" to the console.

**Key Points:**

* `setTimeout` is asynchronous.
* You can use multiple `setTimeout` calls to schedule multiple functions at different delays.
* For repeating functionality, consider using `setInterval` instead, which calls a function at regular intervals.
* There's a companion function `clearTimeout` that allows you to cancel a scheduled timeout before it's executed.

For more advanced usage and detailed explanations, you can refer to these resources:

* [MDN Web Docs - setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
* [W3Schools - setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

**Promises**

I'll explain promises in JavaScript:

**What are Promises?**

In JavaScript, promises are objects that represent the eventual completion (or failure) of an asynchronous operation. They provide a cleaner and more manageable way to handle these operations compared to traditional callback functions.

**Key Concepts:**

- **Asynchronous Operations:** These are actions that take some time to complete, often because they involve external factors like network requests or file I/O.
- **Pending State:** A promise starts in a pending state, indicating that the operation is ongoing.
- **Settled States:** A promise eventually settles into either a fulfilled state (operation successful) or a rejected state (operation failed).
- **Callbacks:** Functions associated with a promise to handle its success or failure.

**Creating Promises:**

You create promises using the `Promise` constructor, which takes an executor function as an argument. This function has two arguments:

- `resolve`: A callback to be invoked when the operation succeeds, passing the result value.
- `reject`: A callback to be invoked when the operation fails, passing the error object.

```javascript
let promise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., network request, file I/O)
  if (operationSuccessful) {
    resolve(resultValue);
  } else {
    reject(errorObject);
  }
});
```

**Consuming Promises:**

You use the `then()` method to attach callbacks to a promise. This method takes two optional arguments:

- `onFulfilled`: A callback to be executed if the promise is fulfilled, receiving the resolved value.
- `onRejected`: A callback to be executed if the promise is rejected, receiving the error object.

```javascript
promise.then(
  (result) => {
    // Handle successful operation with result
  },
  (error) => {
    // Handle error
  }
);
```

**Chaining Promises:**

Promises can be chained together to execute a sequence of asynchronous operations. You can return a new promise from a `then()` callback, allowing for a more readable and organized flow.

```javascript
promise1.then(result1 => {
  return promise2(result1);
}).then(result2 => {
  // Handle final result
});
```

**Error Handling (catch()):**

The `catch()` method is a shorthand for providing a callback to handle any rejections that occur in the promise chain.

```javascript
promise.then(result => {
  // ...
}).catch(error => {
  // Handle errors throughout the chain
});
```

**finally():**

The `finally()` method is used to execute a callback regardless of whether the promise is fulfilled or rejected. This is useful for performing cleanup tasks or side effects.

```javascript
promise.then(result => {
  // ...
}).catch(error => {
  // ...
}).finally(() => {
  // Always executed
});
```

**Benefits of Promises:**

- **Improved Readability:** Promises make asynchronous code easier to understand and reason about.
- **Error Handling:** Promises provide a structured way to handle errors and prevent uncaught exceptions.
- **Chaining:** Promises enable the creation of complex asynchronous workflows with clear dependencies.

By effectively using promises, you can write cleaner, more maintainable, and less error-prone JavaScript code when dealing with asynchronous operations.

**Async Await**

**`Async/await`** is a powerful combination of keywords introduced in ECMAScript 2017 (ES8) that simplifies working with promises in JavaScript. It provides a more synchronous-like way to write asynchronous code.

**How it Works:**

1. **Async Functions:**

   - You declare a function as asynchronous using the `async` keyword. This function inherently returns a promise.

2. **Await Keyword:**

   - Inside an async function, you use the `await` keyword before an expression that evaluates to a promise.
   - The `await` keyword pauses the execution of the async function until the promise settles (resolves or rejects).
   - Once the promise settles, the resolved value is assigned to the variable following `await`.

**Example:**

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data);
});
```

In this example:

- `fetchData` is an async function.
- `await fetch` pauses the function until the fetch operation finishes.
- `await response.json()` pauses again until the response is converted to JSON.

**Benefits:**

- **Readability:** Async/await makes asynchronous code appear more synchronous, improving readability and maintainability.
- **Error Handling:** You can use `try...catch` blocks within async functions to handle promise rejections in a structured manner.
- **Cleaner Code:** Async/await eliminates the need for complex promise chaining with nested `then` callbacks.

**Key Points:**

- `await` can only be used inside async functions.
- Async functions always return a promise, even if you don't explicitly use `return`.
- Error handling with `try...catch` is essential for handling promise rejections within async functions.

**In Conclusion:**

Async/await provides a more elegant and concise way to write asynchronous code in JavaScript. It builds upon promises and offers a more intuitive approach to handling asynchronous operations, making your code cleaner and easier to reason about.

**Promises**

**What are Promises?**

In JavaScript, Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. They provide a cleaner and more manageable way to handle asynchronous code compared to traditional callback methods.

**Key Concepts:**

- **Asynchronous Operations:** These are actions that take some time to complete, often because they involve waiting for external resources (like fetching data from a server).
- **Pending State:** A promise starts in a pending state, indicating that the operation is ongoing.
- **Fulfilled State:** When the operation finishes successfully, the promise transitions to a fulfilled state, holding the resulting value.
- **Rejected State:** If the operation encounters an error, the promise moves to a rejected state, containing the error reason.

**Creating Promises:**

You create a Promise using the `new Promise()` constructor. It takes an executor function as an argument:

```javascript
let promise = new Promise(function(resolve, reject) {
  // Asynchronous operation (e.g., fetch data, perform calculations)
  if (operationSuccessful) {
    resolve(resultValue); // Promise fulfilled with the result
  } else {
    reject(errorReason);  // Promise rejected with the error
  }
});
```

- **Executor Function:** This function contains the asynchronous operation's logic.
- **`resolve` Function:** Used to indicate successful completion, passing the resulting value.
- **`reject` Function:** Used to signal an error, passing the error reason.

**Consuming Promises:**

Once you have a promise, you can use the `then()` and `catch()` methods to handle its eventual outcome:

```javascript
promise.then(function(result) {
  // Code to execute if the promise is fulfilled, using the result
}, function(error) {
  // Code to handle errors if the promise is rejected
});
```

- **`then()` Method:** Takes two callback functions as arguments:
    - The first function is called with the resolved value if the promise is fulfilled.
    - The second function (optional) is called with the error reason if the promise is rejected.
- **`catch()` Method:** A shorthand for providing an error handler for a promise rejection. It's equivalent to calling `then(null, errorHandler)`.

**Benefits of Promises:**

- **Improved Code Readability:** Promises make asynchronous code easier to understand and follow by separating asynchronous logic from its usage.
- **Error Handling:** They provide a structured way to handle errors through the `catch()` method.
- **Chaining Promises:** You can chain multiple asynchronous operations using `.then()` to create sequences that depend on the results of previous ones.

**Example:**

```javascript
function fetchData(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error('Failed to fetch data'));
      }
    };
    xhr.onerror = function() {
      reject(new Error('Network error'));
    };
    xhr.send();
  });
}

fetchData('https://api.example.com/data')
  .then(function(data) {
    console.log('Data fetched successfully:', data);
  })
  .catch(function(error) {
    console.error('Error fetching data:', error);
  });
```

In this example, `fetchData()` returns a promise that resolves with the fetched data or rejects with an error. The `.then()` and `.catch()` methods are used to handle the promise's outcome.

**async await**

Async and await are keywords in JavaScript that work together to handle asynchronous operations in a cleaner and more synchronous-looking way. They are especially useful when dealing with Promises, which are the traditional way to handle asynchronous code in JavaScript.

Here's a breakdown of how they work:

**Async Functions:**

- Declared using the `async` keyword before the function definition.
- They always return a Promise, even if you don't explicitly use a `return` statement within the function.
- They allow the use of the `await` keyword within their body.

**Await Keyword:**

- Used only within `async` functions.
- Placed before a Promise-based operation.
- Pauses the execution of the async function until the Promise settles (resolves or rejects).
- Once the Promise settles, the `await` expression is replaced with the resolved value (if successful) or throws the rejection error.

**Benefits of Async/Await:**

- Makes asynchronous code easier to read and write by resembling synchronous code.
- Avoids the need for complex Promise chaining with `.then` and `.catch`.

**Here's an example to illustrate the difference:**

**Using Promises:**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

**Using Async/Await:**

```javascript
async function fetchData() {
  // Simulate some asynchronous operation
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
  console.log(data);
}

fetchData();
```

In the async/await version, the code reads more naturally, like we are waiting for the data to be fetched before continuing.

**Remember:** `await` can only be used inside `async` functions. If you try to use it outside, you'll get a syntax error.

I hope this explanation clarifies async/await in JavaScript!

**The micro Task Queue**

In JavaScript, the microtask queue is a critical component for managing the order of execution in asynchronous operations. It holds tasks with higher priority than the regular callback queue, ensuring they run before the event loop moves on to other tasks.

Here's a deeper look at the microtask queue:

**What are Microtasks?**

Microtasks are small, short-duration functions scheduled to run after the current script finishes but before control returns to the event loop. They are typically used for internal housekeeping or to ensure code related to a specific event completes before the event loop moves on.

**Sources of Microtasks:**

- **Promise callbacks:** The `.then`, `.catch`, and `.finally` methods of Promises add their callback functions to the microtask queue.
- **MutationObserver callbacks:**  Functions passed to the `MutationObserver` API to watch for DOM changes are also added to the microtask queue.
- **`queueMicrotask()` function:** This function, introduced in modern JavaScript, allows developers to explicitly add tasks to the microtask queue.

**How the Microtask Queue Works:**

The JavaScript engine follows these steps when dealing with the microtask queue and the event loop:

1. **Process the Call Stack:** The call stack executes code synchronously, one function at a time.
2. **Check for Microtasks:** When a function on the call stack finishes, the engine checks if there are any tasks in the microtask queue.
3. **Run Microtasks:** If there are microtasks, they are all executed one after another until the queue is empty. This can happen multiple times within a single event loop iteration.
4. **Move to the Callback Queue:** If the microtask queue is empty and there's no more code on the call stack, the event loop moves on to process tasks from the callback queue (which includes functions from timers, user interactions, etc.).

**Key Points about Microtasks:**

- **Higher Priority:** Microtasks have higher priority than tasks in the callback queue.
- **Nested Microtasks:** A microtask can itself add new microtasks to the queue using `queueMicrotask()`. These nested microtasks will all run before the event loop moves on.
- **Understanding Async/Await:** `await` within an `async` function pauses execution until the awaited Promise settles, but it checks for microtasks before continuing. This allows microtasks related to the Promise to run before the `async` function resumes.

By understanding the microtask queue, you can write more predictable and well-structured asynchronous code in JavaScript. It ensures related tasks are executed in the expected order and helps avoid race conditions or unexpected behavior.

**Comparison Operator**

In JavaScript, comparison operators are used to compare values and determine whether a condition is true or false. These operators are essential for making decisions and controlling the flow of your program. Here's a breakdown of common comparison operators in JavaScript:

**Equality Operators**

* **Equal (`==`):** This operator checks if two values are equal, but it can be loose with data types. For example, `1 == "1"` will be true even though one is a number and the other is a string.
* **Strict Equal (`===`):** This operator performs a stricter comparison, ensuring both the value and data type are the same. So, `1 === "1"` will be false.

**Inequality Operators**

* **Greater Than (`>`):** Checks if the value on the left is greater than the value on the right.
* **Greater Than or Equal To (`>=`):** Checks if the value on the left is greater than or equal to the value on the right.
* **Less Than (`<`):** Checks if the value on the left is less than the value on right.
* **Less Than or Equal To (`<=`):** Checks if the value on the left is less than or equal to the value on the right.

**Other Comparison Operators**

* **Not Equal (`!=`):** The opposite of the equal operator. It returns true if the values are not equal.
* **Strict Not Equal (`!==`):** The opposite of the strict equal operator. It returns true if the values are not equal or have different data types.

**Using Comparison Operators in Conditional Statements**

Comparison operators are often used in conditional statements like `if`, `else if`, and `switch` to control the program flow based on the comparison results. Here's an example:

```javascript
let age = 25;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```

In this example, the `if` statement checks if the `age` is greater than or equal to 18. If the condition is true, the program prints "You are eligible to vote." Otherwise, it prints "You are not eligible to vote."

By effectively using comparison operators, you can write programs that make decisions and react to different conditions.

**Truthy and Falsy values**

In JavaScript, you'll encounter the concept of truthy and falsy values. These terms refer to how non-boolean values are evaluated in a Boolean context, like conditions in if statements or logical operations.

Here's a breakdown of truthy and falsy values:

**Truthy Values**

These values are considered true when coerced into a boolean. They include:

* **Non-zero numbers:** Any number except zero (e.g., 1, -5, 10.2).
* **Non-empty strings:** Any string with characters (e.g., "hello", "world!", "42").
* **Arrays and Objects:** Even empty arrays (`[]`) and objects (`{}`) are truthy.
* **Functions:** Any function you define is truthy.

**Falsy Values**

These values are considered false when coerced into a boolean. They include:

* **false:** The boolean value `false` itself.
* **0:** The number zero (0, -0, and 0n [bigint zero]).
* **Empty String:** An empty string with no characters (`""`).
* **null:** Represents the intentional absence of a value.
* **undefined:** Indicates a variable has not been declared or assigned a value.
* **NaN (Not a Number):** The result of invalid mathematical operations like `0 / 0`.

**Why are Truthy and Falsy Important?**

Truthy and falsy values are important because they allow for concise conditional statements. For instance:

```javascript
let userName = "Alice";

if (userName) {
  console.log("Welcome, " + userName + "!");
} else {
  console.log("Please enter your name.");
}
```

In this example, the `if` statement checks if `userName` has a value. Since "Alice" is a truthy value, the welcome message is displayed.

**Key Points to Remember**

* All values are truthy except for the explicit falsy ones mentioned above.
* JavaScript performs type coercion when evaluating truthiness in Boolean contexts.
* Be cautious when relying on truthy/falsy behavior, as it can lead to unexpected results if not used carefully.

For more complex checks, it's generally recommended to use the strict equality operator (`===`) to avoid unintended consequences from type coercion.

**Premitive and Reference data types**

In JavaScript, data comes in two flavors: primitive and reference types. Understanding this distinction is crucial for working effectively with variables and data structures.

**Primitive Data Types**

* **Simple and immutable:** Primitive data types represent basic building blocks of data. Their values are directly stored in the variable itself. Any changes to the variable modify the value itself.
* **Fixed size in memory:** Since they hold a single piece of data, primitive types have a predefined size in memory allocation. This makes them efficient for storing fundamental values.
* **Examples:**
    * Numbers (e.g., 3.14, -20)
    * Strings (e.g., "hello", "world!")
    * Booleans (true or false)
    * Null (represents the intentional absence of a value)
    * Undefined (indicates a variable has no value assigned)
    * Symbol (a unique and immutable identifier) (introduced in ES6)
    * BigInt (arbitrary-precision integers) (introduced in ES2020)

**Reference Data Types**

* **Complex and mutable:** Reference data types hold references to memory locations where the actual data is stored. Assigning a reference type to a variable creates a reference, not a copy of the data. Changes made through the variable will affect the original data.
* **Dynamic size in memory:** The size of reference types can vary depending on the data they hold. This makes them suitable for storing complex structures.
* **Examples:**
    * Objects (collections of key-value pairs)
    * Arrays (ordered collections of items)
    * Functions (reusable blocks of code)

**Key Differences and When to Use Each**

The choice between primitive and reference data types depends on your data needs:

* Use primitive data types for simple values like numbers, strings, or boolean flags where you don't need to modify the data itself.
* Use reference data types for complex structures like collections of information (objects and arrays) or reusable functionalities (functions).

Example using JavaScript code
```JavaScript
// Premitive dataType
let firstPerson = "Supriyo";

let secondPerson = firstPerson;

firstPerson = "Rupa";

console.log(firstPerson);
console.log(secondPerson);

// Reference dataType
let person1 = {
  name: "Supriyo",
  age: 23,
};

let person2 = person1;

person2.name = "Rupa";

console.log(person1);
console.log(person2);
```
Output
```
Rupa
Supriyo
{ name: 'Rupa', age: 23 }
{ name: 'Rupa', age: 23 }
```

Here's an analogy to illustrate the difference:

* Imagine primitive data types like sticky notes where you write a single piece of information. The information on the note itself cannot be changed.
* Reference data types are like folders. Assigning a folder to a variable gives you a reference to its location. You can add, remove, or modify items within the folder, but the folder itself (the reference) remains the same.

By understanding primitive and reference data types, you can write more efficient and predictable JavaScript code.

**Shallow Copy**

The spread operator (`...`) in JavaScript creates a shallow copy of objects and arrays.

Here's how it works for shallow copy:

* **Arrays:** When you use the spread operator on an array, it creates a new array with copies of the original elements. However, if those elements are themselves objects or arrays, they are still references to the same objects in memory. Modifying a nested object or array element in the copy will affect the original as well.
* **Objects:** Similar to arrays, spreading an object creates a new object with copies of the top-level properties. But, any nested objects or arrays within those properties remain as references. Changes to these nested structures in the copy will also be reflected in the original.

**Example:**

```javascript
const originalObj = {
  name: "Alice",
  address: {
    street: "123 Main St",
  },
};

const copiedObj = { ...originalObj };

copiedObj.address.street = "456 Elm St";

console.log(originalObj.address.street); // Output: "456 Elm St" (modified through the copy)
```

In this example, even though `copiedObj` is a new object, the `address` property still refers to the same object as the original. Modifying the `street` property within the copy's `address` object changes it in the original as well.

**Key points to remember:**

* The spread operator is convenient for creating quick copies of object structures.
* It's important to be aware of shallow copy behavior when dealing with nested objects or arrays.
* If you need completely independent copies, explore deep copy techniques like recursion or libraries like `lodash`.

**Deep Copy**

In JavaScript, a deep copy of an object creates a new object that's entirely independent of the original. This means not only are the top-level properties copied, but also any nested objects or arrays within them. Modifications to the copy won't affect the original and vice versa, as they point to separate memory locations.

Here's a breakdown of deep copy:

* **Primitive values:** Similar to shallow copy, primitive values (strings, numbers, booleans) are directly copied into the new object.
* **Nested objects/arrays:** Unlike shallow copy, deep copy creates entirely new objects or arrays for any nested structures within the original object. This ensures independence from the original data.

**Why Deep Copy?**

* **Preserves data integrity:** When you modify the copy, you don't unintentionally change the original object. This is crucial for scenarios where you need to work on a separate version of the data.
* **Isolation:** Deep copies allow you to pass or store objects without worrying about unintended side effects on the original data.

**JSON.parse(JSON.stringify())**

   This approach involves converting the object to a JSON string using `JSON.stringify` and then parsing it back into an object using `JSON.parse`. While convenient, it has limitations:

   * Doesn't handle circular references (objects referencing themselves)
   * May lose complex object structures or functions during conversion

```JavaScript
let firstPerson = {
  name: "Supriyo Das",
  age: 35,

  address: {
    city: "Bandel",
    state: "WB",
  },
};

let secondPerson = JSON.parse(JSON.stringify(firstPerson));

secondPerson.name = "Rupa Das";
secondPerson.address.city = "Siddheswary";

console.log(firstPerson);
console.log(secondPerson);
```
Output
```
{
  name: 'Supriyo Das',
  age: 35,
  address: { city: 'Bandel', state: 'WB' }
}
{
  name: 'Rupa Das',
  age: 35,
  address: { city: 'Siddheswary', state: 'WB' }
}
```

**Closures in JavaScript**

In JavaScript, closures are a powerful concept that leverages function scoping to create functions that can "remember" and access variables from their outer (enclosing) function's scope, even after the outer function has finished executing.

Here's a breakdown of closures:

**Key Idea:**

* A closure is the combination of a function bundled together (enclosed) with the references to its surrounding state, which is the lexical environment where the function was created.
* This lexical environment includes local variables that were in scope at the time the closure was created.

**How it Works:**

1. **Function Definition:** When you define a function inside another function, the inner function has access to the outer function's variables and parameters, even after the outer function finishes execution.
2. **Closure Creation:** When the outer function is called, a closure is created. This closure includes the inner function and a reference to the outer function's lexical environment.
3. **Inner Function Access:** Even after the outer function finishes running, the inner function can still access the variables in the outer function's scope because of the closure.

**Benefits of Closures:**

* **Data Privacy:** Closures can be used to create private variables within a function. The outer function's variables are not directly accessible from outside, but the inner function can access and modify them.
* **State Management:** Closures can be used to simulate private state within functions, allowing them to remember values between calls.
* **Function Customization:** By capturing variables from the outer scope, closures can create functions tailored to specific contexts.

**Example:**

```javascript
function createGreeter(greeting) {
  // Outer function scope
  let name = "World";

  function greet() {
    // Inner function with access to outer scope's 'greeting' and 'name'
    return `${greeting}, ${name}!`;
  }

  return greet; // Returning the inner function (closure)
}

const myGreeter = createGreeter("Hello");

console.log(myGreeter()); // Output: "Hello, World!"
```

In this example, the `greet` function (closure) is returned from the `createGreeter` function. Even though `createGreeter` has finished, `greet` can still access the `greeting` and `name` variables from its outer scope.

**Real-World Uses of Closures:**

* **Event Listeners:** Closures are commonly used in event listeners to preserve the state of variables between event triggers.
* **Modules:** Closures can help create private variables within modules, promoting data encapsulation.
* **Functions with State:** Closures can be used to create functions that maintain state between calls, useful for things like stateful UI components.

By understanding closures, you can write more modular, flexible, and powerful JavaScript code.

**Closures in nested functions**

Closures are indeed tightly connected with nested functions in JavaScript. In fact, closures are often created when you define a function inside another function.

Here's how nested functions and closures work together:

1. **Nested Function Definition:** When you define a function within another function, the inner function has access to the outer function's scope, including its variables and parameters. This is because JavaScript uses lexical scoping, which determines the visibility of variables based on where the function is defined, not where it's called.

2. **Closure Creation:** When the outer function is executed, a closure is created. This closure captures the inner function and a reference to the outer function's lexical environment. This lexical environment includes the variables that were in scope at the time the inner function was created.

3. **Inner Function Access:** Even after the outer function finishes its execution and its local variables are typically gone, the inner function (closure) can still access those variables because of the reference it holds through the closure.

**Example:**

```javascript
function createGreeter(greeting) {
  // Outer function scope
  let name = "World";

  function greet() {
    // Inner function with access to outer scope's 'greeting' and 'name'
    return `${greeting}, ${name}!`;
  }

  return greet; // Returning the inner function (closure)
}

const myGreeter = createGreeter("Hello");

console.log(myGreeter()); // Output: "Hello, World!"
```

In this example:

* The `createGreeter` function is the outer function.
* It defines a variable `name` and an inner function `greet`.
* The `greet` function is the closure. It's returned from `createGreeter`.
* Even though `createGreeter` finishes running and `name` goes out of scope, the closure (`greet`) remembers the value of `name` because of the closure.
* When you call `myGreeter()`, it executes the `greet` function (closure), which accesses the `name` variable and returns the greeting.

**Key Points:**

* Nested functions are a way to create closures.
* The closure holds a reference to the outer function's lexical environment, allowing the inner function to access variables even after the outer function finishes.
* This ability to remember and access variables from the outer scope makes closures powerful for various purposes like data privacy, state management, and function customization.

By understanding how nested functions and closures work together, you can leverage this concept to write more effective and versatile JavaScript code.

**Function Currying**

**Concept**

Currying is an advanced technique in functional programming that transforms a function with multiple arguments into a sequence of functions that each take a single argument. It essentially breaks down the function into smaller, more manageable pieces.

**How it Works**

Imagine a function `add(x, y)` that takes two numbers and returns their sum. Currying this function would create a series of nested functions:

1. The first nested function takes the first argument (`x`) and returns a new function that remembers the value of `x`.
2. The second nested function takes the second argument (`y`) and performs the actual addition using the remembered `x` and the provided `y`.

Here's an example implementation:

```javascript
function curry(func) {
  return function curried(arg1) {
    if (arguments.length >= func.length) {
      return func.apply(this, arguments); // Call the original function with all args
    }
    return function (...rest) {
      return curried(...rest, arg1); // Return a new curried function with remaining args
    };
  };
}
```

**Benefits of Currying**

- **Partial Application:** Create pre-configured functions by fixing some arguments.
- **Higher-Order Functions:** Build functions that operate on other functions.
- **Improved Code Readability:** Break down complex logic into smaller, more focused functions.
- **Modular and Reusable Code:** Create reusable function building blocks.

**Example Usage**

```javascript
const add = curry((x, y) => x + y);

const add5 = add(5); // Partially apply add with 5

console.log(add5(3)); // Output: 8 (5 + 3)

const multiply = curry((x, y) => x * y);

const multiplyBy3 = multiply(3);

console.log(multiplyBy3(4)); // Output: 12 (3 * 4)
```

**In summary,** currying provides a powerful tool for managing functions with multiple arguments in JavaScript, promoting functional programming principles and creating more flexible and reusable code.

**Undefined vs null vs not defined**

Here's a breakdown of null vs not defined vs undefined in JavaScript:

**Undefined**

- Indicates a variable has been declared but **not assigned a value**.
- JavaScript automatically assigns `undefined` to such variables.
- Think of it as an empty container with no contents yet.

**Example:**

```javascript
let x;
console.log(x); // Output: undefined
```

**Null**

- Represents an **intentional absence of a value**.
- You explicitly assign `null` to a variable to indicate it doesn't hold any object reference.
- Think of it as a placeholder that signifies "no value here."

**Example:**

```javascript
let y = null;
console.log(y); // Output: null
```

**Not Defined**

- Refers to a variable that hasn't even been declared using `var`, `let`, or `const`.
- Trying to access it results in a reference error.
- It's different from `undefined` because the variable itself doesn't exist.

**Example:**

```javascript
console.log(z); // Throws a ReferenceError because z is not defined
```

**Key Differences**

| Feature                 | Undefined                                 | Null                                       | Not Defined                                 |
|-------------------------|--------------------------------------------|---------------------------------------------|----------------------------------------------|
| Declaration              | Variable declared but not assigned a value | Explicitly assigned `null`                 | Variable not declared at all                |
| Value                    | `undefined` (primitive type)              | `null` (primitive type)                     | ReferenceError                              |
| Represents               | Missing value                              | Intentional absence of an object reference  | Variable itself doesn't exist                |

**Additional Notes**

- While `null` and `undefined` might evaluate to equal using the loose equality operator (`==`), they are not strictly equal (`!==`).
- `typeof undefined` returns "undefined".
- `typeof null` surprisingly returns "object" (a historical quirk in JavaScript).
