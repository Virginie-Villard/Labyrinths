let position;

// ________________________________________________________________________
function findEntrance() {

    console.log("myMaze : ")
    console.log(myMaze);

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
    const index = getIndexFromPosition(cell.posX, cell.posY + 1);

    console.log(myMaze[index]);
    return myMaze[index];
}
function getDown(cell) {
        const index = getIndexFromPosition(cell.posX + 1, cell.posY);

        console.log(myMaze[index]);
        return myMaze[index];
}
function getTop(cell) {
    const index = getIndexFromPosition(cell.posX - 1, cell.posY);

    console.log(myMaze[index]);
    return myMaze[index];
}
function getLeft(cell) {
    const index = getIndexFromPosition(cell.posX, cell.posY - 1);

    console.log("myMaze[index] : ")
    console.log(myMaze[index]);
    return myMaze[index];
}
// ____________________________________

function getIndexFromPosition(x, y) {
    return x * size + y;
}

// ____________________________________

// function dfs(vertex) { // vertex = position actuelle
//     debugger;
//
//     if(!vertex.visited) {
//         vertex.visited = true;
//
//         document.getElementById(getIndexFromPosition(vertex.posX, vertex.posY)).style.backgroundColor = "#99ffeb";
//
//         if(vertex.exit) {
//             return [vertex];
//         }
//
//         for(let w of getNeighbours(vertex)) {
//             let path = dfs(w)
//
//             if(path) {
//                 path = path.concat(vertex);
//                 if(vertex.entrance) {
//                     path = path.reverse();
//                 }
//                 return path;
//             }
//         }
//     }
//     console.log("Undefined vertex")
//     return
// }

function dfs() {
    let vertex = findEntrance();
    let stack = [];
    let numberInCell = 0;

    stack.push(vertex);

    while (stack.length > 0) {
        vertex = stack.pop() // retrieves one of the cells from the stack (and removes it from the stack)

        if(!vertex.visited) {
            vertex.visited = true;

            if(vertex.exit) {
                let path = [];
                path = path.concat(vertex);
                return path;
            }

            for(let w of getNeighbours(vertex)) {
                if(!w.visited) {
                    w.parent = vertex;
                    document.getElementById(getIndexFromPosition(w.posX, w.posY)).style.backgroundColor = "#99ffeb";
                    document.getElementById(getIndexFromPosition(w.posX, w.posY)).innerText = numberInCell.toString();
                    stack.push(w)
                    numberInCell ++;
                }
            }
        }
    }
    return
}










