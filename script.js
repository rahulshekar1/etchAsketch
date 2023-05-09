createGrid(16);
function createGrid(gridSize){
    for(let i=0; i<((gridSize)**2); i++){
        let boxes = document.createElement('div');
        boxes.classList.add("tiles");
        document.getElementById('row1').appendChild(boxes);
    }
    colorGrid();
}
let sub = document.querySelector('.sub')
sub.addEventListener('click',()=>{
    a = document.querySelectorAll(".tiles")
    a.forEach(d=>{d.remove();})
    let gridSize = document.getElementById('Uinp').value;
    createGrid(gridSize);
})
function colorGrid(){
    const selectTiles = document.querySelectorAll(".tiles");
    selectTiles.forEach(item=>{
    item.addEventListener('mouseover',() => {
        item.style.backgroundColor ="blue";
        })
    })
}

const btn = document.querySelector("#btn");
function clearGrid(){
    selectTiles.forEach(item=>{item.style.backgroundColor="white"});
    }
btn.addEventListener('click',clearGrid);


