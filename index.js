
const size = 5;

const root = document.documentElement;
root.style.setProperty("--maze-size", size);

document.getElementById("maze").textContent = JSON.stringify(labyrinths[size]["ex-0"], undefined, 2);

const outline = document.getElementById('outline');

for(let i in labyrinths[size]["ex-0"]) {

    let createdCell = labyrinths[size]["ex-0"][i]

    let cell = document.createElement('div');
    cell.classList.add('cell');
    outline.append(cell);

    if(createdCell.entrance == true) {
        cell.classList.add('entrance');
    }
    if(createdCell.exit) {
        cell.classList.add('exit');
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
}

