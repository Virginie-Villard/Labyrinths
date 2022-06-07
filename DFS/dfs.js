let position;

// ________________________________________________________________________
function findEntrance() {
    for(let cell of myMaze) {
        if(cell.entrance) {
            console.log("posX = " + cell.posX + ", posY = " + cell.posY);
            return cell;
        }
    }
}

// ____________________________________
function getNeighbours(cell) {
    let myNeighbours = [];

    if(!cell.walls[0]) {

        const top = getTop(cell);

        myNeighbours.push(top);
    }

    if(!cell.walls[1]) {

        const right = getRight(cell);

        myNeighbours.push(right);
    }

    if(!cell.walls[2]) {

        const down = getDown(cell);

        myNeighbours.push(down);
    }

    if(!cell.walls[3]) {
        const left = getLeft(cell);

        myNeighbours.push(left);
    }

    console.log("myNeighbours : ")
    console.log(myNeighbours);
    return myNeighbours;
}

// ____________________________________
function getRight(cell) {
    const index = cell.posX * size + (cell.posY + 1);

    console.log(myMaze[index]);
    return myMaze[index];
}
function getDown(cell) {
        const index = (cell.posX + 1) * size + cell.posY;

        console.log(myMaze[index]);
        return myMaze[index];
}
function getTop(cell) {
    const index = (cell.posX - 1) * size + cell.posY;

    console.log(myMaze[index]);
    return myMaze[index];
}
function getLeft(cell) {
    const index = cell.posX * size + (cell.posY - 1);

    console.log("myMaze[index] : ")
    console.log(myMaze[index]);
    return myMaze[index];
}
// ____________________________________



// ____________________________________

// function isVisited(cell) {
//
//     cell.visited ++;
//
//     return cell.visited;
// }

function dfs(myMaze, vertex) { // vertex = position actuelle
    debugger;
    let visited = false;

    if(!vertex.visited) {
        vertex.visited = true;

        if(vertex.exit) {
            return vertex;
        }

        for()
        getNeighbours(vertex);
    }

}










