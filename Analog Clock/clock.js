'use strict';

const secDiv = document.getElementByID('sec');
const minDiv = document.getElementByID('min');
const hourDiv = document.getElementByID('hour');

setInterval (updateClock, 1000);
function updateClock(){
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() +min) / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
}

updateClock;