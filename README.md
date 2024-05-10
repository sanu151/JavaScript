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

Example : 
```JavaScript
