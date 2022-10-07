const container = document.querySelector("#grid_container");

for (let i = 1; i <= 16; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.cssText = "width: 150px; height: 150px; background-color: red; border-style: dashed; box-sizing: border-box;"
    container.appendChild(gridSquare);
}
