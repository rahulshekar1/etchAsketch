createGrid(16);
function createGrid(gridInp){
    for(let i=0; i<((gridInp)**2); i++){
        let boxes = document.createElement('div');
        boxes.classList.add("tiles");
        document.getElementById('row1').appendChild(boxes);
    }
    colorGrid();
    
}
document.getElementById("Jathre").onclick = function(){
    if (this.checked == true){
        JcolorGrid();
    }
    else{
        colorGrid();
    }
}
document.getElementById("Greyed").onclick = function(){
    if (this.checked == true){
        GcolorGrid();
    }
    else{
        colorGrid();
    }
}

function colorGrid(){
    document.querySelectorAll(".tiles").forEach(item=>{item.style.backgroundColor="white"});
    document.querySelectorAll(".tiles").forEach(item=>{
    item.addEventListener('mouseover',() => {
        item.style.backgroundColor = "black";
        })
    })
}

function JcolorGrid(){
 
    document.getElementById("Greyed").checked = false;
    document.querySelectorAll(".tiles").forEach(item=>{item.style.backgroundColor="white"});
    document.querySelectorAll(".tiles").forEach(item=>{
    item.addEventListener('mouseover',() => {
        let hue = Math.floor(Math.random()*360)+1;
        item.style.backgroundColor =`hsl(${hue}, 70%, 50%)`;
        })
    })
}

function GcolorGrid(){
    document.getElementById("Jathre").checked = false;
    document.querySelectorAll(".tiles").forEach(item=>{item.style.backgroundColor="white"});
    document.querySelectorAll(".tiles").forEach(item=>{
    item.addEventListener('mouseover',() => {
        let hue = Math.floor(Math.random()*200)+1;
        item.style.backgroundColor =`rgb(${hue}, ${hue}, ${hue})`;
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

