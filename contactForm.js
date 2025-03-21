document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // Here you can add functionality to send the data to a server or email
        document.getElementById('contactResponse').innerText = "Thank you for your message!";
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('contactResponse').innerText = "Please fill in all fields.";
    }
});
