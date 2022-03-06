function createGrid(size) {
    for (let i = 0; i < (size * size);) {
        const grid = document.querySelector(".grid");
        const box = document.createElement("box");
        box.classList.add("actual-box");
        grid.appendChild(box);
        ++i
    }
    document.getElementsByClassName("grid")[0].style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

createGrid(10)


