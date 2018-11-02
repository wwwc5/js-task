let row = document.getElementsByClassName('row');
let changeColor = null;

function startChange() {
    changeColor = self.setInterval(change,1000);
}

function stopChange() {
    changeColor = window.clearInterval(changeColor);
    for(let i = 0; i < 9; i++){
        row[i].style.backgroundColor = 'rgb(255,166,0)';
    }
}

function change() {
    for(let i = 0; i < 9; i++){
       row[i].style.backgroundColor = 'rgb(255,166,0)';
    }
    let rowNum = 8;
    let x = Math.round(Math.random()*rowNum);
    let y = Math.round(Math.random()*rowNum);
    while(y === x){
       y = Math.round(Math.random()*rowNum);
    }
    let z = Math.round(Math.random()*rowNum);
    while(z === x || z === y){
        z = Math.round(Math.random()*rowNum);
    }

    row[x].style.backgroundColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
    row[y].style.backgroundColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
    row[z].style.backgroundColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
}

