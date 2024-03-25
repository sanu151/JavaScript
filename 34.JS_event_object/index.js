window.addEventListener('load', function(){
    console.log("load");
});

window.addEventListener('unload', function(){
    console.log("unload");
});

window.addEventListener('scroll', function(){
    console.log("Scroll");
});

var mytext = document.querySelector('#mytext');

window.addEventListener('resize', function(){
    var height = window.outerHeight;
    var width = this.window.outerWidth;

    mytext.innerHTML = 'Window Height : '+height+ '<br>Window Width : '+width;
});

var detailsSelect = document.querySelector('details');

detailsSelect.addEventListener('toggle', function(e){
    console.log(e.target.open);
});