document.querySelector('#heading1').innerHTML = 'Hello World';
var myPara = document.querySelector('#para1');
myPara.innerHTML = 'My Name is Supriyo Das. I am 36 years old';

document.querySelectorAll('h2')[0].innerHTML = 'Hi There';

document.querySelectorAll('h2')[1].innerHTML = 'Query Selecter All using tag'

document.querySelector('.para1').innerHTML = 'This is paragraph';
const allpara = document.querySelectorAll('.para1');

allpara.forEach(para1 =>{
    para1.innerHTML = "This is example of querySelectorAll";
    para1.style.color = 'red';
});

//-------------------------------------------------

document.querySelector('a').style.textDecoration = 'none';

document.querySelector('li a').style.color = 'orange';

var myDiv = document.querySelector('.my-div a');
myDiv.innerHTML = 'Text Changed';
myDiv.style.fontSize = '20px';