// Declaration for the Timer section (Minutes, Seconds, and Milliseconds)
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById('milliseconds');

//  Declaration for the clickable Buttons
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('laplist')

// Stopwatch Variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;


startButton.addEventListener('click', startTimer); // Declaration of the functions
stoptButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


function startTimer () {

}

function stopTimer(){

}

function pauseTimer(){

}

function resetTimer(){

}

function updateTimer(){
    milliseconds++;
    if(milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }

    }

    displayTimer();
}

function displayTimer(){
    millisecondsLabel.textContent = milliseconds;
    secondsLabel.textContent = seconds;
    millisecondsLabel.textContent = minutes;
}