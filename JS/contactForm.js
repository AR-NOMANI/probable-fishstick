document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name && email && message) {
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('contactResponse').innerText = "Please enter a valid email address.";
            document.getElementById('contactResponse').classList.add('error');
            return;
        }

        // Here you can add functionality to send the data to a server or email
        document.getElementById('contactResponse').innerText = "Thank you for your message!";
        document.getElementById('contactResponse').classList.remove('error');
        document.getElementById('contactResponse').classList.add('success');
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('contactResponse').innerText = "Please fill in all fields.";
        document.getElementById('contactResponse').classList.add('error');
    }
});