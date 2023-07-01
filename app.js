// DOM elements
const navItems = document.querySelectorAll('nav ul li');
const heroButton = document.querySelector('#hero .btn');
const productImages = document.querySelectorAll('.product img');
const contactForm = document.querySelector('#contact form');


// Add event listeners
navItems.forEach(item => {
  item.addEventListener('click', handleNavItemClick);
});

heroButton.addEventListener('click', handleHeroButtonClick);

productImages.forEach(image => {
  image.addEventListener('mouseover', handleProductImageMouseOver);
  image.addEventListener('mouseout', handleProductImageMouseOut);
});

contactForm.addEventListener('submit', handleContactFormSubmit);

// Event handlers
function handleNavItemClick(event) {
  event.preventDefault();
  const targetSectionId = event.target.getAttribute('href').slice(1);
  const targetSection = document.getElementById(targetSectionId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

function handleHeroButtonClick(event) {
  event.preventDefault();
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}

function handleProductImageMouseOver(event) {
  event.target.style.transform = 'scale(1.2)';
}

function handleProductImageMouseOut(event) {
  event.target.style.transform = 'scale(1)';
}

function handleContactFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageTextarea = document.querySelector('textarea');

  // Perform form validation here...

  // Clear form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageTextarea.value = '';

  // Show a success message (you can customize this part)
  alert('Thank you for your message! We will get back to you soon.');
}
