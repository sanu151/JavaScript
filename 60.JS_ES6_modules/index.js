// ES6 Modules - import, export

import {text as message, myText, myName} from "./modules.js";

console.log(message);
console.log(myName);

myText('Hello World'); // Set text = "Hello World" in modules.js
console.log(message);