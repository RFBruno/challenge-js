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

    if(mili == 99){
        sec++;
        mili = 00
    }
    let timeMille = `.${mili < 10 ? '0'+mili : mili}`;
    document.querySelector('.mili').innerHTML = timeMille;
}

function start(){
    clearInterval(time);
    time = setInterval(callback,10);
   }

function reset(){
    sec = 0;
    min = 0;
    mili = 0;
    let formatTime = `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
    document.querySelector('#tempo span').innerHTML = formatTime;
    clearInterval(time);
}


