var myform = document.querySelector('form');
var myname = myform.querySelector('#myname');
var email = myform.querySelector('#email');
var password = myform.querySelector('#password');

myform.addEventListener('submit', formdata);

function formdata(e) {
    e.preventDefault();

    var mydata = {
        name : myname.value,
        email : email.value,
        password : password.value
    };
    console.log(mydata);

    myname.value = "";
    email.value = "";
    password.value = "";
}