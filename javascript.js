let currentBrush = "black-box"
let gridSize = 10
function createGrid(size) {
    for (let i = 0; i < (size * size);) {
        const grid = document.querySelector(".grid");
        const box = document.createElement("box");
        grid.appendChild(box);
        ++i
    }
    document.getElementsByClassName("grid")[0].style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
createGrid(gridSize)

function eraserBrushChange() {
    currentBrush = "eraser"
}
function blackBrushChange() {
    currentBrush = "black-box"
}

let eraserBrushButton = document.querySelector("#eraser")
eraserBrushButton.addEventListener("click", eraserBrushChange);

let blackBrushButton = document.querySelector("#black-brush")
blackBrushButton.addEventListener("click", blackBrushChange);

let clearGridButton = document.querySelector("#clear-grid")
clearGridButton.addEventListener("click", () => {
    allBox.forEach((allBox) => {
        allBox.removeAttribute("class")
    })
})



let allBox = document.querySelectorAll("box")
allBox.forEach((allBox) => {
    allBox.addEventListener("click", () => {
        console.log(currentBrush)
        allBox.removeAttribute('class')
        allBox.classList.add(currentBrush)
        
    });
});