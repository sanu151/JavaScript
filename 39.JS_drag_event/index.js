// ondragstart, ondrag, ondragend, ondragenter, ondragover, drop

var mydiv = document.querySelector("#div1");
var mypara = document.querySelector("#drag1");

mypara.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text", e.target.id);
});

mydiv.addEventListener("dragover", function(e){
    e.preventDefault();
});

mydiv.addEventListener("drop", function(e){
    let id = e.dataTransfer.getData("text");
    mydiv.appendChild(document.getElementById(id));
    mypara.style.color = "white";
});