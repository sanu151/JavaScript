// Popup box - alert, confirm, prompt

var myheading = document.querySelector('h1');

// alert
function myalert(){
    alert('No problem, Thank you.');
}

// confirm
function conf(){
    var value = confirm('Are you sure to enter here?');
    if(value){
        myname();
    }
    else{
        myalert();
    }
}

conf();


// prompt
function myname(){
    var my_name = prompt('Enter Your Name : ');
    if(my_name == null || my_name == ''){
        myheading.textContent = "Hello Guest!"
    }
    else{
        myheading.textContent = "Hello "+my_name;
    }
}