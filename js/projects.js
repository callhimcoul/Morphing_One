const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 223);

// Update the countdown every day
const countdownfunction = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = "Event starts in " + days + " days";

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}, 1000);
