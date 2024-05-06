// Example JavaScript code for form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform form submission logic (e.g., send data to server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form after submission
    document.getElementById('contactForm').reset();
});