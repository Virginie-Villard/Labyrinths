const size = 10;
let myMaze = createMaze(size);


function createMaze(size)
{
    let cells = [];

    for (let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            cells.push(
                {
                    posX : i,
                    posY : j,
                    walls : [true, true, true, true],
                    zone: i * size + j,
                    index:  i * size + j
                }
            )
        }
    }
    return cells;
}





 const SIDES = {
    TOP:    0,
    RIGHT:  1,
    BOTTOM: 2,
    LEFT:   3
}

 const REVERSE_SIDES = {
    [SIDES.TOP]: SIDES.BOTTOM,
    [SIDES.BOTTOM]: SIDES.TOP,
    [SIDES.LEFT]: SIDES.RIGHT,
    [SIDES.RIGHT]: SIDES.LEFT
}
let count = size*size;
function digMaze() {
    let cell = chooseCell();

    let w;
    let side;
    do {
        side = Math.floor(Math.random()*4);
        w = getNeighbour(cell, side)
    } while(!w);

    if(cell.zone !== w.zone) {
        breakWall(cell, side);
        for(const it of myMaze) {
            if(it.zone == cell.zone) {
                it.zone = w.zone;

                // if(it.zone == cell.zone) {
                //     //document.getElementById(''+it.zone).innerText = w.zone;
                //     it.zone = w.zone;
            }
        }
        count--;
    }
}

while(count>0) {

 digMaze()
}



function breakWall(cell, side ) {
    const w = getNeighbour( cell, side);
    if(!w) {
        return;
    }
    cell.walls[side] = false;
    w.walls[REVERSE_SIDES[side]] = false;
}

function getNeighbour(cell, side) {
    if(cell.posY === 0 && side === SIDES.LEFT) return;
    if(cell.posY === size-1 && side === SIDES.RIGHT) return;
    if(cell.posX === 0 && side === SIDES.TOP) return;
    if(cell.posX === size-1 && side === SIDES.BOTTOM) return;
    switch (side) {
        case (SIDES.TOP) :
            return myMaze[cell.index-size];
        case (SIDES.BOTTOM) :
            return myMaze[cell.index+size];
        case SIDES.RIGHT :
            return myMaze[cell.index+1];
        case SIDES.LEFT :
            return myMaze[cell.index-1];
        default:
            throw new Error("Unknown side"+side);
    }
}

function chooseCell() {
    let randomCell = Math.floor(Math.random() * Math.pow(size, 2));
    // console.log(randomCell);
    return myMaze[randomCell];
}


















