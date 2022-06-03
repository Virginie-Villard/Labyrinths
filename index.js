
const size = 5;

const root = document.documentElement;
root.style.setProperty("--maze-size", size);

document.getElementById("maze").textContent = JSON.stringify(labyrinths[size]["ex-0"], undefined, 2);



const outline = document.getElementById('outline');

for(let i in labyrinths[size]["ex-0"]) {

    let div = document.createElement('div');

    div.classList.add('cell');

    outline.append(div);
}

