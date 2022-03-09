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
// Creates inital grid 
createGrid(gridSize)



function resizeGrid(newSize) {
    oldGrid = document.querySelectorAll("box");
    oldGrid.forEach((oldGrid) => {
        oldGrid.remove();
    })
    createGrid(newSize)
    setupBoxes()
};

function setupBoxes() {
    allBox = document.querySelectorAll("box")
    allBox.forEach((allBox) => {
        allBox.addEventListener("click", () => {
            console.log(currentBrush)
            allBox.removeAttribute('class')
            allBox.classList.add(currentBrush)
        });
    });
    allBox.forEach((allBox) => {
        allBox.addEventListener("mousedown", () => {
            console.log(currentBrush)
            allBox.removeAttribute('class')
            allBox.classList.add(currentBrush)
            
        });
    })
    allBox.forEach((allBox) => {
        allBox.addEventListener("mouseover", () => {
            if (isMouseDown === 1) {
                console.log("YES")
                allBox.removeAttribute("class")
                allBox.classList.add(currentBrush)
            }
        })
    })
}

function generateGridAgain(newSize) {
    createGrid(newSize)
    allBox = document.querySelectorAll("box");
}

let cssBody = document.querySelector(":root")

function eraserBrushChange() {
    currentBrush = "eraser"
}
function blackBrushChange() {
    currentBrush = "black-box"

}
function redBrushChange() {
    currentBrush = "red-box"
}

function blueBrushChange() {
    currentBrush = "blue-box"
}

function greenBrushChange() {
    currentBrush = "green-box"
}

let eraserBrushButton = document.querySelector("#eraser")
eraserBrushButton.addEventListener("click", eraserBrushChange);
eraserBrushButton.addEventListener("click", () => {
    cssBody.style.setProperty("--current-background-color", "white");
    blackBrushButton.classList.remove("active-button")
    clearActiveEffect()
});

let blackBrushButton = document.querySelector("#black-brush")
blackBrushButton.addEventListener("click", blackBrushChange);
blackBrushButton.addEventListener("click", () => {
    cssBody.style.setProperty("--current-background-color", "black");
    clearActiveEffect()
});

let redBrushButton = document.querySelector("#red-brush");
redBrushButton.addEventListener("click", redBrushChange);
redBrushButton.addEventListener("click", () => {
    cssBody.style.setProperty("--current-background-color", "#E53629")
    console.log("RED");
    clearActiveEffect()
});

let blueBrushButton = document.querySelector("#blue-brush");
blueBrushButton.addEventListener("click", blueBrushChange);
blueBrushButton.addEventListener("click", () => {
    cssBody.style.setProperty("--current-background-color", "#4149C3");
    clearActiveEffect()
});

let greenBrushButton = document.querySelector("#green-brush");
greenBrushButton.addEventListener("click", greenBrushChange);
greenBrushButton.addEventListener("click", () => {
    cssBody.style.setProperty("--current-background-color", "#2CD23E");
    clearActiveEffect()
});



let clearGridButton = document.querySelector("#clear-grid")
clearGridButton.addEventListener("click", () => {
    allBox.forEach((allBox) => {
        allBox.removeAttribute("class")

    })
})
let isMouseDown = 0
bodySelect = document.querySelector("body")
bodySelect.addEventListener("mousedown", () => {
    isMouseDown = 1
    console.log(isMouseDown)
})
bodySelect.addEventListener("mouseup", () => {
    isMouseDown = 0;
    console.log(isMouseDown)
})


let allBox = document.querySelectorAll("box")
allBox.forEach((allBox) => {
    allBox.addEventListener("mousedown", () => {
        console.log(currentBrush)
        allBox.removeAttribute('class')
        allBox.classList.add(currentBrush)
        
    });
})

allBox.forEach((allBox) => {
    allBox.addEventListener("mouseover", () => {
        if (isMouseDown === 1) {
            console.log("YES")
            allBox.removeAttribute("class")
            allBox.classList.add(currentBrush)
        }
    })
})


let allButtons = document.querySelectorAll("button")
allButtons.forEach((allButtons) => {
    allButtons.addEventListener("click", () => {
        allButtons.classList.add("active-button")
        clearGridButton.classList.remove("active-button")
    });
});

function clearActiveEffect() {
    allButtons.forEach((allButtons) => {
        allButtons.classList.remove("active-button")
    })
}

let resizeGridButton = document.querySelector(".resize-grid")
resizeGridButton.addEventListener("click", () => {
    gridSize = prompt("Enter new grid size (Max size is 64x64)");
    if (gridSize < 64 && gridSize > 0) {
        resizeGrid(gridSize);
        resizeGridButton.classList.remove("active-button")
    }
    else if (gridSize >= 64) {
        gridSize = 64;
        resizeGrid(gridSize);
        resizeGridButton.classList.remove("active-button");
    }
    else {
        alert("Invalid input, grid set to default size")
        resizeGrid(10);
        resizeGridButton.classList.remove("active-button");
    }
    console.log(gridSize)
})