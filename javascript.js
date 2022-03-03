const box = document.querySelector(".box")
function createDrawingGrid(size) {
    for (let i = 0; i < size;) {
        const grid = document.createElement("div");
        grid.classList.add("test")
        box.append(grid);
        ++i;
        console.log(i);
    }
}

createDrawingGrid(10)
