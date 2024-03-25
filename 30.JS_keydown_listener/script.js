var count = 0;
document.querySelector("textarea").addEventListener("keydown", function(event){
    var text = event.key;
    if(text === 'Backspace' || text === "Delete"){
        count--;
    }
    else{
        count++;
    }

    document.querySelector('p').innerHTML = "You Have pressed : <b>"+count+ "</b> character"
})