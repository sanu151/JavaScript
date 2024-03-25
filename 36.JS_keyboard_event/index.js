// keydown, keypress, keyup

var textarea = document.querySelector('#text');
var mytext = document.querySelector('#mytxt');

textarea.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.repeat)
    {
        alert('Do not repeat');
    }
});

textarea.addEventListener('keypress', function(e){
    mytext.innerHTML = 'You have pressed '+e.key;
});

textarea.addEventListener('keyup', function(e){
    console.log(e.keyCode);
})