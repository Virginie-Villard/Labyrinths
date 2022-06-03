
document.getElementById("maze").textContent = JSON.stringify(labyrinths["3"]["ex-0"], undefined, 2);



const outline = document.getElementById('outline');

for(let i in labyrinths["3"]["ex-0"]) {

    let div = document.createElement('div');

    div.classList.add('cell');

    outline.append(div);
}

