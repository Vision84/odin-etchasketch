const canvas = document.createElement('div');
let screenResolution = 16;

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(e) {
    res = prompt("What would you like to the new screen resolution to be?");
    if (typeof Number(res) === "number" && Number(res) > 0 && Number(res) <= 100) {
        screenResolution = Number(res);
    } else {
        alert("You inputted an invalid screen resolution. Defaulting to 16...");
        screenResolution = 16;
    }
    canvas.innerHTML = ""; 
    createCanvas();
});

// create a container to be filled with pixels
function createCanvas() {
    canvas.classList.add('canvas');
    canvas.style.gridTemplateColumns = `repeat(${screenResolution}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${screenResolution}, 1fr)`;
    
    
    for (let i = 0; i < screenResolution**2; i++) {
        const pixel = document.createElement('div');
        pixel.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        })
        canvas.appendChild(pixel);
    }
    
    document.body.appendChild(canvas);
}

createCanvas();