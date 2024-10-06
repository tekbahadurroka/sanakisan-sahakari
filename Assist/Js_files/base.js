function loadHeaderFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Call the function to load the header and footer on page load
window.onload = loadHeaderFooter;

// function showDateTime() {
//     const dateTime = new Date();
//     document.getElementById("date").innerHTML = dateTime.toLocaleString();
// }

// // Display the date and time when the page loads
// window.onload = function() {
//     showDateTime();
// };