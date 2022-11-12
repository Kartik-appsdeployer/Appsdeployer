const Day = document.getElementById('demo1');
const Hours = document.getElementById('demo2');
const Minutes = document.getElementById('demo3');
const Second = document.getElementById('demo4');

const current = new Date().getFullYear();
const New = new Date(`March 08 ${current + 1} 00:00:00`);
function updateCountDown(){
    const currentTime = new Date();
    const difference = New - currentTime;

    const day = Math.floor(difference / 1000 / 60 / 60/ 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    Day.innerHTML = day;
    Hours.innerHTML = hours < 10 ? '0' + hours : hours;
    Minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    Second.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountDown, 1000);