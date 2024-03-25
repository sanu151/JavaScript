// getElementById

var myheading1 = document.getElementById('heading1');
myheading1.innerHTML = "Hello World";

var mypara1 = document.getElementById('para1');
mypara1.innerHTML = 'My name is Supriyo Das. I am 36 years old.';

var myheading2 = document.getElementById('heading2');
myheading2.innerHTML = 'Good Bye Good Bye';

document.getElementsByTagName('h2')[0].innerHTML = 'Hi there!';
document.getElementsByTagName('h2')[1].innerHTML = 'Bye Bye';

document.getElementsByClassName('para1')[0].innerHTML = 'Thank you';
