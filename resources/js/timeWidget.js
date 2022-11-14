
const endOfSem = new Date('2022-12-22T00:00:00');

function timeUntil(date) {
    let timeMS = Math.abs(endOfSem.getTime() - date.getTime());
    let days = timeMS / (1000*60*60*24);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let seconds = (minutes % 1) * 60;

    return {days: Math.floor(days), hours: Math.floor(hours), minutes: Math.floor(minutes), seconds: Math.floor(seconds)}
}

function updateWindow() {
    let date = new Date();
    let countdown = timeUntil(date);
    delete date;
    document.getElementById("timeUntil").textContent = "Days: " + countdown.days + ", Hours: " + countdown.hours + ", Minutes: " + countdown.minutes + ", Seconds: " + countdown.seconds;
}

window.setInterval(updateWindow, 1000);
