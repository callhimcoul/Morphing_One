const countDownDate = new Date('January 1, 2025 00:00:00').getTime();
const countdownfunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = "Event starts in " + days + " days";
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}, 1000);


