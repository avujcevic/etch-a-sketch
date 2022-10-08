const container = document.querySelector("#grid_container");
const containerWidth = container.clientWidth;

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = prompt("Please enter desired squares per side")
    deleteGrid(container);
    generateGrid(gridSize);
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

