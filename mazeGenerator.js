const size = 25;
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
                    walls : [true, true, true, true]
                }
            )
        }
    }
    return cells;
}

// function identifier()
// {
//     let classIdentifier = 0;
//
//     for(let i in myMaze)
//     {
//         let cell = document.getElementById(classIdentifier.toString()).classList.add(classIdentifier.toString());
//         cell.innerText(classIdentifier.toString());
//     }
// }
//
// identifier();

















