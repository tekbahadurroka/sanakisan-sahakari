
function showDateTime() {
    const dateTime = new Date();
    document.getElementById("date").innerHTML = dateTime.toLocaleString();
}

// Display the date and time when the page loads
window.onload = function() {
    showDateTime();
};