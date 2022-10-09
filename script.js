const container = document.querySelector("#grid_container");
const containerWidth = container.clientWidth;

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = getUserInput();

    if (gridSize !== null) {
        deleteGrid(container);
        generateGrid(gridSize);
    }
});

function generateGrid(squares) {
    for (let i = 1; i <= squares ** 2; i++) {
        const gridSquare = document.createElement("div");
        const gridSquareWidth = containerWidth / squares;

        gridSquare.style.width = gridSquareWidth + "px";
        gridSquare.style.height =  gridSquare.style.width;

        container.appendChild(gridSquare);

        gridSquare.addEventListener("mouseover", function (e) {
            e.target.style.background = "black";
        });  
    }
}

function deleteGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getUserInput() {
    while (true) {
        let gridSize = prompt("Please enter desired number of squares per side (1-100)");
        if (gridSize > 0 && gridSize <= 100) {
            return gridSize;
        } if (gridSize === null) {
            return gridSize;
        }
    }
}