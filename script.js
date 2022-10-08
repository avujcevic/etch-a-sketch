const container = document.querySelector("#grid_container");
const containerWidth = container.clientWidth;

let gridSize = 64;

for (let i = 1; i <= gridSize ** 2; i++) {
    const gridSquare = document.createElement("div");
    const gridSquareWidth = containerWidth / gridSize;

    gridSquare.style.width = gridSquareWidth + "px";
    gridSquare.style.height =  gridSquare.style.width;

    container.appendChild(gridSquare);

    gridSquare.addEventListener("mouseover", function (e) {
        e.target.style.background = "black";
    });  
}

