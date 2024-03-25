// copy, cut, paste

const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('copy', function(){
    p.innerText = "You have Copied";
});

input.addEventListener('cut', function(){
    p.innerText = "You have cuted";
});

input.addEventListener('paste', function(){
    p.innerText = "You have Pasted";
});