let timer = document.querySelector('.timer');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let milliSecond = 00;
let second = 00;
let minute = 00; 

let timerId = null;


start.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
    
});

stop.addEventListener('click', function() {
    clearInterval(timerId)
    
})

reset.addEventListener('click', function() {
    clearInterval(timerId)
    milliSecond = second = minute = 0
    timer.innerHTML = '00 : 00 : 00'
    
})

function startTimer(){
    milliSecond++;
    if (milliSecond == 100) {
        milliSecond = 0;
        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
    }
    let millStr = milliSecond < 10 ? `0${milliSecond}` : milliSecond;
    let secStr = second < 10 ? `0${second}` : second;
    let minStr = minute < 10 ? `0${minute}` : minute;

    timer.innerHTML = `${minStr} : ${secStr} : ${millStr}`;
}
