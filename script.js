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
document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.querySelector('.name');

  setTimeout(function() {
    const newName = document.createElement('span');
    newName.textContent = 'Greg';
    newName.style.position = 'absolute';
    newName.style.top = '-20px';
    newName.style.left = '0';
    newName.style.opacity = '0';
    newName.style.animation = 'fade-in 1s 3s ease-in-out forwards';

    nameElement.parentNode.insertBefore(newName, nameElement);
  }, 3000);
});
