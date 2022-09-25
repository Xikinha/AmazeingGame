/// Function to move through maze using arrow keys

let row = 1;
let col = 1;

const movePlayer = (event, storedGameCounter, timeLeft, interval, btnNext) => {

    let previousBlock = maze.children[row].children[col];
        
    switch (event.keyCode) {
        //Arrow down
        case 40:
            if (maze.children[row].children[col+1].className !== "wall") {
                col++
            }
        break;
        //Arrow up
        case 38:
            if (maze.children[row].children[col-1].className !== "wall") {
                col--
            }
        break;
        //Arrow right
        case 39:
            if (maze.children[row+1].children[col].className !== "wall") {
                row++
            }
        break;
        //Arrow left
        case 37:
            if (maze.children[row-1].children[col].className !== "wall") {
                row--
            }
        break;
        };

        let activeBlock = maze.children[row].children[col];

        if (activeBlock.className === "path" || activeBlock.className === "played") {
            previousBlock.className = "played";
            activeBlock.className = "player";
        } else if (activeBlock.className === "treasure") {
            previousBlock.className = "played";
            activeBlock.className = "player";

            clearInterval(interval);
            time.innerHTML = timeLeft;

            row = 1;
            col = 1;

            message.className = "win";
            
            storedGameCounter = localStorage.getItem("gameCounter");
            if (storedGameCounter === "1") {
                localStorage.setItem("treasureCounter", 1);
                message.innerHTML = "LEVEL 1 PASSED";
                message.style.display = "block";
                btnNext.style.display = "block";
                btnStart.style.display = "none";
            } else if (storedGameCounter === "2") {
                localStorage.setItem("treasureCounter", 2);
                message.innerHTML = "LEVEL 2 PASSED";
                message.style.display = "block";
                btnNext.style.display = "block";
                btnStart.style.display = "none";
            } else if (storedGameCounter === "3") {
                localStorage.setItem("treasureCounter", 3);
                message.innerHTML = "CONGRATULATIONS";
                message.style.display = "block";
                btnNext.style.display = "none";
                btnNew.style.display = "block";
                btnStart.style.display = "none";
            }

            localStorage.setItem("gameOn", false);
        }
};

export {movePlayer};