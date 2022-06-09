let position;

// ________________________________________________________________________
function findEntrance() {

    // console.log("myMaze : ")
    // console.log(myMaze);

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

    if(!cell.walls[3]) {
        const left = getLeft(cell);

        myNeighbours.push(left);
    }

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
let numberInCell = 0;

function bfs() {
    let vertex = findEntrance();
    let queue = [];
    let numberInCell = 0;

    queue.push(vertex);

    while (queue.length > 0) {
        vertex = queue.shift() // retrieves the first cell from the stack (and removes it from the stack)

        if(!vertex.visited) {
            vertex.visited = true;
            document.getElementById(getIndexFromPosition(vertex.posX, vertex.posY)).style.backgroundColor = "#cffaf2";
            document.getElementById(getIndexFromPosition(vertex.posX, vertex.posY)).innerText = ''+numberInCell;
            numberInCell ++;

            if(vertex.exit) {
                debugger;
                let path = [];
                while (!vertex.entrance) {
                    path.push(vertex);
                    vertex = vertex.parent;
                }
                path.push(vertex);
                return path;
            }

            for(let w of getNeighbours(vertex)) {
                if(!w.visited) {
                    w.parent = vertex;

                    queue.push(w)
                }
            }
        }
    }
    return
}


function dfs(vertex) { // vertex = position actuelle
    // debugger;

    if(!vertex.visited) {
        vertex.visited = true;

        document.getElementById(getIndexFromPosition(vertex.posX, vertex.posY)).style.backgroundColor = "#99ffeb";
        document.getElementById(getIndexFromPosition(vertex.posX, vertex.posY)).innerText = numberInCell.toString();
        numberInCell ++;

        if(vertex.exit) {
            return [vertex];
        }

        for(let w of getNeighbours(vertex)) {
            let path = dfs(w)

            if(path) {
                path = path.concat(vertex);
                if(vertex.entrance) {
                    path = path.reverse();
                }
                return path;
            }
        }
    }
    console.log("Undefined vertex")
    return
}

// function dfs() {
//     let vertex = findEntrance();
//     let stack = [];
//     let numberInCell = 0;
//
//     stack.push(vertex);
//
//     while (stack.length > 0) {
//         vertex = stack.pop() // retrieves the last cell from the stack (and removes it from the stack)
//
//         if(!vertex.visited) {
//             vertex.visited = true;
//             document.getElementById(getIndexFromPosition(vertex.posX, vertex.posY)).style.backgroundColor = "#cffaf2"; // "#99ffeb" till; "#fce3f4" pink; "#d2fc72" green;
//             document.getElementById(getIndexFromPosition(vertex.posX, vertex.posY)).innerText = ''+numberInCell;
//             numberInCell ++;
//
//             if(vertex.exit) {
//                 debugger;
//                 let path = [];
//                 while (!vertex.entrance) {
//                     path.push(vertex);
//                     vertex = vertex.parent;
//                 }
//                 path.push(vertex);
//                 return path;
//             }
//
//             for(let w of getNeighbours(vertex)) {
//                 if(!w.visited) {
//                     w.parent = vertex;
//
//                     stack.push(w)
//                 }
//             }
//         }
//     }
//     return
// }










