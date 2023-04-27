setInterval(() => {
  // DECLARE THE DATES
  let now = new Date().getTime();
  let endTimer = new Date("2023-04-28T09:30:00").getTime();
  let countdown = endTimer - now;

  // CALCULATION BY TRANSFORMING THE MILLISECONDS
  seconds = Math.floor((countdown % (1000 * 60)) / 1000);
  minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  days = Math.floor(countdown / (1000 * 60 * 60 * 24));

  // ADD IN HTML
  document.querySelector("#days").innerHTML = days + " " + "Days";
  document.querySelector("#hours").innerHTML = hours + " " + "Hours";
  document.querySelector("#minutes").innerHTML = minutes + " " + "Minutes";
  document.querySelector("#seconds").innerHTML = seconds + " " + "Days";

  // ADD END COUNTDOWN
  if (countdown <= 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "Timer Finished!";
  }
}, 1000);
