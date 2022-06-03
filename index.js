
// document.getElementsByTagName('h1').style.textAlign = "center";

const size = 10;

const root = document.documentElement;
root.style.setProperty("--maze-size", size);

document.getElementById("maze").textContent = JSON.stringify(labyrinths[size]["ex-2"], undefined, 2);
document.getElementById("maze").style.display = "none";

const outline = document.getElementById('outline');

for(let i in labyrinths[size]["ex-2"]) {

    let createdCell = labyrinths[size]["ex-2"][i]

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



