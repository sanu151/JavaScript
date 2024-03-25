const myinput = document.querySelector('input[name=name]');

myinput.addEventListener('change', changefunction);

function changefunction(e){
    // console.log(e.target.value);
    // console.log(e.type);
    console.log(e);
}

var programs = document.querySelectorAll('input[name=mycheckbox]');

Array.from(programs).map((program) => {
    program.addEventListener('change', programhandeler);
});

function programhandeler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}

var subject = document.querySelector('#subjectlist');
subject.addEventListener("change", subjectHandle);

function subjectHandle(e) {
    document.querySelector('#selectSubject').innerHTML = "You Have Selected : "+e.target.value;
}