// DECLARE THE DATES
let now = new Date().getTime();
let endTimer = new Date("2023-04-28T09:30:00").getTime();
let countdown = endTimer - now;
console.log("countdown", countdown);

// CALCULATION BY TRANSFORMING THE MILLISECONDS
seconds = Math.floor((countdown % (1000 * 60)) / 1000);
console.log("seconds", seconds);
minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
console.log("minutes", minutes);
hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log("hours", hours);
days = Math.floor(countdown / (1000 * 60 * 60 * 24));
console.log("days", days);
