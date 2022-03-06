let gridSize = 24
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

/* To draw a box, we need it to tell us which number the box has to find it's numbers and then we can
add another class to this box so that only it gets coloured */ 

let allBox = document.querySelectorAll("box")
allBox.forEach((allBox) => {
    allBox.addEventListener("click", () => {
        allBox.classList.add("black-box")

    });
});