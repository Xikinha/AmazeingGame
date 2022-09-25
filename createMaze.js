/// Create maze layout

const createMaze = (array, width, height) => {
    for (let i = 0; i < array.length; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < array[i].length; j++) {
            const block = document.createElement("div");
            if (array[i][j] === "*") {
                block.classList.add("wall");
            } else if (array[i][j] === "S") {
                block.classList.add("start");
            } else if (array[i][j] === "T") {
                block.classList.add("treasure");
            } else {
                block.classList.add("path");
            };
            block.style.width = width;
            block.style.height = height;
            row.append(block)
        }
        maze.append(row);
    }
}

export {createMaze};