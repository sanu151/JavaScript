document.querySelector('#submit-button').addEventListener('click',()=>{
    var num = Number(document.querySelector('#input-text').value);

    try {
        if(num >=5 && num <=10){
            console.log(num);
        }
        else if(num < 5){
            throw 'Input is too low';
        }
        else if(num > 10){
            throw 'Input is too high';
        }
        else{
            throw 'Invalid input';
        }
    } catch (err) {
        alert(err);
    }
});
