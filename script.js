document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.querySelector('.name');

  setTimeout(function() {
    const newName = document.createElement('span');
    newName.textContent = 'Greg';
    newName.classList.add('new-name');
    newName.style.opacity = '0';

    nameElement.parentNode.insertBefore(newName, nameElement);

    setTimeout(function() {
      newName.style.opacity = '1';
      newName.style.transform = 'translateY(-20px)';
      newName.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
    }, 100);
  }, 3000);
});
