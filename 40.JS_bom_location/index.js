console.clear();
console.log(window);

var locationModel = document.querySelector('.location-div');

locationModel.children[0].textContent = location.href;
locationModel.children[1].textContent = location.protocol;
locationModel.children[2].textContent = location.hostname;
locationModel.children[3].textContent = location.port;
locationModel.children[4].textContent = location.pathname;

var myButton = document.querySelector('#visit-button');
myButton.addEventListener('click', function(){
    location.assign('https://sanu151.github.io');
});