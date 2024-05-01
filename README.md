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

Example:
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

