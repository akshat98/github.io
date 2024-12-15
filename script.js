// Toggle mobile menu visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when an item is clicked
const menuItems = document.querySelectorAll('#mobile-menu .block');
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden'); // Hide menu after selection
  });
});