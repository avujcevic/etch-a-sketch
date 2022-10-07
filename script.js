const container = document.querySelector("#grid_container");

for (let i = 1; i <= 256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.cssText = "width: 40px; height: 40px; background-color: red; border-style: dashed; box-sizing: border-box;"
    container.appendChild(gridSquare);
}
