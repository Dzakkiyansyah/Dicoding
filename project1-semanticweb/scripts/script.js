// Dropdown Menu untuk Navbar 
const nav = document.querySelector('nav ul');
const dropdownBtn = document.createElement('button');
dropdownBtn.textContent = 'Menu';
dropdownBtn.style.display = 'none';
document.querySelector('header').appendChild(dropdownBtn);

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    dropdownBtn.style.display = 'block';
    nav.style.display = 'none';
  } else {
    dropdownBtn.style.display = 'none';
    nav.style.display = 'flex';
  }
});

dropdownBtn.addEventListener('click', () => {
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
});