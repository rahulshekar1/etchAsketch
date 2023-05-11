createGrid(16);
function createGrid(gridInp){
    for(let i=0; i<((gridInp)**2); i++){
        let boxes = document.createElement('div');
        boxes.classList.add("tiles");
        document.getElementById('row1').appendChild(boxes);
    }
    colorGrid();
}

function colorGrid(){
    document.querySelectorAll(".tiles").forEach(item=>{
    item.addEventListener('mouseover',() => {
        item.style.backgroundColor ="blue";
        })
    })
}


function gridResize(){
    document.querySelectorAll(".tiles").forEach(tile=>{tile.remove();})
    let gridInp = document.getElementById('Uinp').value;
    console.log(gridInp);
    let gridSize = (500/gridInp);
    console.log(gridSize);
    createGrid(gridInp);
    document.querySelectorAll(".tiles").forEach(item =>{
        item.style["height"] = gridSize  + "px";
        item.style["width"] = gridSize  + "px";
        }
    );
}

let submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click',gridResize);


function clearGrid(){
    document.querySelectorAll(".tiles").forEach(item=>{item.style.backgroundColor="white"});
    }

const reset = document.querySelector("#reset");
reset.addEventListener('click',clearGrid);
