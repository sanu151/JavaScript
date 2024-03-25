// MouseEvent doesnot work with <html> <head> <meta> <title> <br> <style> <script> <iframe> <param> <base> <bdo>

// MouseEvents : 
    // onclick
    // ondblclick
    // onmousedown
    // onmouseup
    // onmouseenter
    // onmouseleave
    // onmousemove
    // onmouseover

var mydiv = document.querySelector('div');
var pos = document.querySelector('#pos');

mydiv.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
});

mydiv.addEventListener('dblclick', function(){
    console.log('Double Clicked');
});

mydiv.addEventListener('mousedown', function(){
    console.log('Mouse Down');
});

mydiv.addEventListener('mouseup', function(){
    console.log('Mouse Up');
});

mydiv.addEventListener('mouseenter', function(){
    console.log('Mouse Enter');
});

mydiv.addEventListener('mouseleave', function(){
    console.log('Mouse Leave');
});

mydiv.addEventListener('mousemove', function(e){
    console.log('Mouse Move');
    pos.innerHTML = "ClientX = "+e.clientX+"<br>ClientY = "+e.clientY+"<br><br>OffsetX = "+e.offsetX+"<br>OffsetY = "+e.offsetY;
});

mydiv.addEventListener('mouseover', function(){
    console.log('Mouse Over');
});

var mybtn = document.querySelectorAll('.btn');
var btnTxt = document.querySelector('#btntxt');

Array.from(mybtn).map((button) => {
    button.addEventListener('click', function(e){
        btnTxt.innerHTML = "You are clicked "+e.target.innerText;
    })
})
