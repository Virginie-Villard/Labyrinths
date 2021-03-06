
// document.getElementsByTagName('h1').style.textAlign = "center";

// const size = 8; Uncomment to access the mazes in the json file
// let myMaze = labyrinths[size]["ex-2"]; Uncomment to access the mazes in the json file

const root = document.documentElement;
root.style.setProperty("--maze-size", size);

document.getElementById("maze").textContent = JSON.stringify(myMaze, undefined, 2);
document.getElementById("maze").style.display = "none";

const outline = document.getElementById('outline');

let number = 0;

for(let i in myMaze) {

    let createdCell = myMaze[i]

    let cell = document.createElement('div');
    cell.classList.add('cell');
    outline.append(cell);
    cell.setAttribute("id", number);
    cell.innerText = createdCell.zone;


    if(createdCell.entrance == true) {
        cell.classList.add('entrance');
        cell.innerText = 'Start';
        cell.style.textAlign = 'center';
    }
    if(createdCell.exit) {
        cell.classList.add('exit');
        cell.innerText = 'Exit';
        cell.style.textAlign = 'center';
    }

    if(createdCell.walls[0]) {
        cell.classList.add('top');
    }

    if(createdCell.walls[1]) {
        cell.classList.add('right');
    }

    if(createdCell.walls[2]) {
        cell.classList.add('bottom');
    }

    if(createdCell.walls[3]) {
        cell.classList.add('left');
    }

    number ++;
}


// Uncomment to access the mazes resolutions in the json file :
// console.log(dfs(findEntrance()))

// let path = dfs(findEntrance());
// for(let p of path) {
//     document.getElementById(getIndexFromPosition(p.posX, p.posY)).style.backgroundColor = "#d2fc72";
// }

// let path = bfs(findEntrance());
// for(let p of path) {
//     document.getElementById(getIndexFromPosition(p.posX, p.posY)).style.backgroundColor = "#d2fc72";
// }

