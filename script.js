let min = 0;
let sec = 0;
let mili = 0;
let time;

let callback = () => {
    sec++;

    if(sec == 60){
        min++;
        sec = 0;
    }

    let time = `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}.${mili < 10 ? '0'+mili : mili}`;
    document.querySelector('#tempo span').innerHTML = time;
}

function start(){
   time = setInterval(callback,1000);
}

function reset(){
    sec = 0;
    min = 0;
    mili = 0;
    let formatTime = `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
    document.querySelector('#tempo span').innerHTML = formatTime;
    clearInterval(time);
}


