const nav = document.getElementById('nav');
const header = document.getElementById('header');
const navBtn = document.getElementById('navBtn');
const subMenu = document.getElementById('dropdown-trigger');
const modalTrigger = document.getElementById('modalTrigger');
const modal = document.getElementById('modal');

// Open Nav from Hamburger
navBtn.addEventListener('click', function(){

  if (!nav.classList.contains('expanded')) {
    nav.classList.toggle('expanded');
    navBtn.classList.toggle('is-active');

    subMenu.addEventListener('mouseover', openSubMenu, {
      once: true
    });

    // Close entire menu when hover out
    header.addEventListener('mouseleave', closeMenu, {
      once: true
    });
  } else {
    closeMenu();
  }
});

function openSubMenu() {
  subMenu.classList.add('expanded');
}

// Open modal
modalTrigger.addEventListener('click', toggleModal);

// Close modal
modal.addEventListener('click', function(e) {
  if (!e.target.closest('.modal-inner')) {
    modal.classList.remove('shown');
  }
});

// Close modal on escape keypress
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('shown')) {
    modal.classList.remove('shown');
  }
});

// Close menu + reset hamburger to original state
function closeMenu() {
  subMenu.classList.remove('expanded');
  nav.classList.remove('expanded');
  navBtn.classList.remove('is-active');
}

function toggleModal() {
  console.log('clicked');
  modal.classList.toggle('shown');
}