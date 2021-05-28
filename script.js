let min = 0;
let sec = 0;
let mili = 0;
let time;

let callback = () => {
    mili++;
    if(sec == 60){
        min++;
        sec = 0;
    }

    let time = `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
    document.querySelector('#tempo span').innerHTML = time;

    if(mili == 100){
        sec++;
        mili = 000
    }
    let timeMile = `.${mili < 10 ? '0'+mili : mili}`;
    document.querySelector('.mili').innerHTML = timeMile;
}

function start(){
    clearInterval(time);
    time = setInterval(callback,10);
   }

function reset(){
    sec = 0;
    min = 0;
    mili = 000;
    let formatTime = `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
    let formatMili = `${mili < 10 ? '0'+mili : mili} `
    document.querySelector('#mili span').innerHTML = formatMili;
    document.querySelector('#tempo span').innerHTML = formatTime;
    clearInterval(time);
}


