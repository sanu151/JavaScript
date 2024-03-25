// onfocus, onblur, onfocusin, onfocusout

var input = document.querySelector('input');

input.addEventListener('focus', function(){
    input.style.backgroundColor = 'yellow';
});

input.addEventListener('blur', function(e){
    input.value = e.target.value.toUpperCase();
    input.style.backgroundColor = ' transparent';
});

input.addEventListener('focusin', function(){
    console.log('focusin is occured');
});

input.addEventListener('focusout', function(e){
    console.log(e.target.value);
})