var img = document.querySelector('img');

var photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
var count = 0;
function next()
{
    count++;

    if(count >= photos.length)
    {
        count = 0;
        img.src = photos[count];
    }
    else
        img.src = photos[count];
}

function prev()
{
    count--;

    if(count < 0)
    {
        count = photos.length -1;
        img.src = photos[count];
    }
    else
        img.src = photos[count];
}