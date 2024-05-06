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
