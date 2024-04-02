// Counting of slideShow-element
const slideshowElements = document.querySelectorAll('.slideShow-element');

let countElement = 1;
setInterval(() => {
    countElement++;
   let currentElement = document.querySelector('.current'); 

   currentElement.classList.remove('current');

    if(countElement > slideshowElements.length){
        slideshowElements[0].classList.add('current'); // when slideshowElement reached last element we marked fist element as next element for looping
        countElement = 1;
    }
    else{
        currentElement.nextElementSibling.classList.add('current'); // if currentElement != lastElement then current = nextElementSibling
    }

}, 1500);