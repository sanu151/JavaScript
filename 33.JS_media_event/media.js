const myvideo = document.querySelector('video');
const mytext = document.querySelector('h2');

myvideo.addEventListener('canplay', function(){
    mytext.innerHTML = "Your video is ready to play";
});

myvideo.addEventListener('play', function(){
    console.log('Play');
});

myvideo.addEventListener('playing', function(){
    mytext.innerHTML = "Your video is striming";
});

myvideo.addEventListener('pause', function(){
    mytext.innerHTML = "Your video is paused";
});

myvideo.addEventListener('ended', function(){
    mytext.innerHTML = "Thanks for watching this video";
});
