const box = document.querySelector(".box")
function createDrawingGrid(size) {
    for (let i = 0; i < size;) {
        const grid = document.createElement("div");
        grid.classList.add("test")
        box.appendChild(grid);
        ++i;
        console.log(i);
    }
}


function createMultipleGrid() {
    for (let i = 0; i < 5;) {
        const box = document.querySelector(".box")
        createDrawingGrid(5)
    }
}

createMultipleGrid()