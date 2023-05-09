for(let i=0; i<(16*16); i++){
    let boxes = document.createElement('div');
    boxes.classList.add("tiles");
    document.getElementById('row1').appendChild(boxes);
}
document.querySelectorAll(".tiles").forEach(a=>{
    a.addEventListener('mouseover',() => {
        a.style.backgroundColor ="blue";
        })
    })

