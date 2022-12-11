

function updateCount() {
    fetch('/api/click', {method: 'POST'});
}

async function updateClick() {
    let response = await fetch('/api/click', {method: 'GET'});
    clicks = await response.json();
    document.getElementById("clickStatus").textContent = "The button has been clicked " + clicks.clickCount + " times!";
}

window.setInterval(updateClick, 1000);