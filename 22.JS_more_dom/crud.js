var myDiv = document.querySelector('#my_div');
myDiv.style.backgroundColor = 'yellow';

var myElement = document.createElement('h2');
var text = document.createTextNode('This is Heading 2');
myElement.appendChild(text);

myDiv.appendChild(myElement);

var heading0 = document.querySelector('h1');
myDiv.removeChild(heading0);

var myElement1 = document.createElement('h1');
var text1 = document.createTextNode('Add new element before an element.');
myElement1.appendChild(text1);

var heading1 = document.getElementById('hdngID');
myDiv.insertBefore(myElement1, heading1);