var myStyle = document.querySelector('#headingId');
myStyle.addEventListener("mouseover", function(){
    myStyle.classList.add('my-style');
});
myStyle.addEventListener("mouseout", function(){
    myStyle.classList.remove('my-style');
});
