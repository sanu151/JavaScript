var len = document.querySelectorAll('.mybutton').length;
for(var i = 0; i<len; i++)
{
    document.querySelectorAll('.mybutton')[i].addEventListener("click", function(){
        var myheading = document.querySelector('#headingId');
        var text = this.innerHTML;
        myheading.innerHTML = text + " is Clicked!"
    });
}