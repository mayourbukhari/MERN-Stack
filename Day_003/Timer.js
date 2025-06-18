// Logic for timer functionality
let sec = 0;
let min = 0;
let hour = 0;
function timer() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hour++;
    }
    console.log("Timer:", hour, "hours", min, "minutes", sec, "seconds");  
}


setInterval(timer, 1000); // Call the timer function every 1000 milliseconds (1 second)