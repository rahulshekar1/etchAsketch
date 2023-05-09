for(let i=0; i<(16*16); i++){
    let boxes = document.createElement('div');
    boxes.classList.add("tiles");
    document.getElementById('row1').appendChild(boxes);
}

const selectTiles = document.querySelectorAll(".tiles");
selectTiles.forEach(item=>{
    item.addEventListener('mouseover',() => {
        item.style.backgroundColor ="blue";
        })
    })
const btn = document.querySelector("#btn");

function clearGrid(){
    selectTiles.forEach(item=>{item.style.backgroundColor="white"});
    }
btn.addEventListener('click',clearGrid);



