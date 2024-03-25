
// Get a reference to the buttons container
var buttonsContainer = document.getElementById('buttons-container');

// Create buttons for letters A to Z
for (var i = 0; i < 26; i++) {
  var letter = String.fromCharCode(65 + i); // Convert ASCII code to letter
  var button = document.createElement('button');
  button.textContent = letter;
  button.className = 'mybutton '+letter; // Set class attribute to "mybutton"
  buttonsContainer.appendChild(button);
}

for (var i = 0; i < 26; i++)
{
    document.querySelectorAll('.mybutton')[i].addEventListener("click", function(){
        var txt = this.innerHTML;
        audioPlay(txt);
        playAnimation(txt)
    });
}

document.addEventListener("keypress", function(event){
    var text = event.key;
    text = text.toUpperCase();
    audioPlay(text);
    playAnimation(text);
});

function playAnimation(text){
    console.log(text);
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add('anime');

    setTimeout(function(){
        selectedButton.classList.remove('anime');
    }, 1000)
}

function audioPlay(txt){
    switch(txt) {
        case "A":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;
        
        case "B":
            var audio = new Audio('sounds/b.mp3');
            audio.play();
            break;
        
        case "C":
            var audio = new Audio('sounds/c.mp3');
            audio.play();
            break;
        
        case "D":
            var audio = new Audio('sounds/d.mp3');
            audio.play();
            break;
        
        case "E":
            var audio = new Audio('sounds/e.mp3');
            audio.play();
            break;
        
        case "F":
            var audio = new Audio('sounds/f.mp3');
            audio.play();
            break;
        
        case "G":
            var audio = new Audio('sounds/g.mp3');
            audio.play();
            break;
        
        case "H":
            var audio = new Audio('sounds/h.mp3');
            audio.play();
            break;
        
        case "I":
            var audio = new Audio('sounds/i.mp3');
            audio.play();
            break;
        
        case "J":
            var audio = new Audio('sounds/j.mp3');
            audio.play();
            break;
        
        case "K":
            var audio = new Audio('sounds/k.mp3');
            audio.play();
            break;
        
        case "L":
            var audio = new Audio('sounds/l.mp3');
            audio.play();
            break;
        
        case "M":
            var audio = new Audio('sounds/m.mp3');
            audio.play();
            break;
        
        case "N":
            var audio = new Audio('sounds/n.mp3');
            audio.play();
            break;
        
        case "O":
            var audio = new Audio('sounds/o.mp3');
            audio.play();
            break;
        
        case "P":
            var audio = new Audio('sounds/p.mp3');
            audio.play();
            break;
        
        case "Q":
            var audio = new Audio('sounds/q.mp3');
            audio.play();
            break;
        
        case "R":
            var audio = new Audio('sounds/r.mp3');
            audio.play();
            break;
        
        case "S":
            var audio = new Audio('sounds/s.mp3');
            audio.play();
            break;
        
        case "T":
            var audio = new Audio('sounds/t.mp3');
            audio.play();
            break;
        
        case "U":
            var audio = new Audio('sounds/u.mp3');
            audio.play();
            break;
        
        case "V":
            var audio = new Audio('sounds/v.mp3');
            audio.play();
            break;
        
        case "W":
            var audio = new Audio('sounds/w.mp3');
            audio.play();
            break;
        
        case "X":
            var audio = new Audio('sounds/x.mp3');
            audio.play();
            break;
        
        case "Y":
            var audio = new Audio('sounds/y.mp3');
            audio.play();
            break;
        
        case "Z":
            var audio = new Audio('sounds/z.mp3');
            audio.play();
            break;
        
    }
    

    
}