/* So currently this will create a element with a class called box, it then fills each box with a
inputted amount of divs called tests, to fix we need to create multiple boxs */


function createDrawingGrid(size) {
    for (let i = 0; i < size;) {
        const body = document.querySelector(".grid")
        const box = document.createElement("box")
        for (let x = 0; x < size;) {
            const grid = document.createElement("div");
            body.appendChild(box)
            grid.classList.add("test")
            box.appendChild(grid);
            ++x
        }
        ++i;
        console.log(i);

    }
}

function createGrid(size) {
    for (let i = 0; i < (size * size);) {
        const grid = document.querySelector(".grid");
        const box = document.createElement("box");
        box.classList.add("test");
        grid.appendChild(box);
        ++i
    }
    document.getElementsByClassName("grid")[0].style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

createGrid(64)
