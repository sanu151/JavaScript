// JS timing event methods
// setTimeOut(), setInterval();

var saveBtn = document.querySelector('.save-btn');
var mypara = document.querySelector('.mypara');

saveBtn.addEventListener('click', ()=>{
    mypara.textContent = 'User Registration Successful.';

    setTimeout(()=>{
        mypara.textContent = '';
    }, 3000);
});

var counterBtn = document.querySelector('.count-btn');
var counterTag = document.querySelector('.counter-tag');

counterBtn.addEventListener('click', counterfunc);

function counterfunc(){
    var count = 0;
    counterTag.textContent = "Counter : "+count;

    setInterval(() => {
        count++;
        counterTag.textContent = "Counter : "+count;
    }, 1000);
}