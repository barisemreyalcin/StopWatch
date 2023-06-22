"use strict";

// Variables for Buttons
const playStopBtn = document.querySelector("#play-stop");
const resetBtn = document.querySelector(".reset");

// Variables for Time Values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for Leading Zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for Timer Interval and Timer Status
let timerInterval = null;
let timerStatus = "stopped";

// Stopwatch Function
function stopWatch() {

    seconds++;

    if(seconds == 60) {
        seconds = 0;
        minutes++;

        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.querySelector(".display-screen").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

playStopBtn.addEventListener("click", function() {
    if(timerStatus == "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        playStopBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        playStopBtn.classList.add("stop");
        playStopBtn.classList.remove("play");

        timerStatus = "started";
    } else {
        timerInterval = window.clearInterval(timerInterval);
        playStopBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        playStopBtn.classList.add("play");
        playStopBtn.classList.remove("stop");
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener("click", function() {
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector(".display-screen").innerText = "00:00:00";
})