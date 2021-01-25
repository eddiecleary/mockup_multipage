const nav = document.getElementById('nav');
const header = document.getElementById('header');
const navBtn = document.getElementById('navBtn');
const subMenu = document.getElementById('dropdown-trigger');
const subMenu2 = document.getElementById('dropdown-trigger-2');
const modalTrigger = document.querySelectorAll('.modalTrigger');
const modal = document.getElementById('modal');
const year = document.getElementById('year');
const back = document.getElementById('back');

// set year in copyright
year.textContent = new Date().getFullYear();

// Open Nav from Hamburger
navBtn.addEventListener('click', function(){

  if (!nav.classList.contains('expanded')) {
    nav.classList.add('expanded');
    navBtn.classList.add('is-active');

    subMenu.addEventListener('mouseover', openSubMenu, {
      once: true
    });

    subMenu2.addEventListener('click', openSubMenu, {
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

// Open modal for all elements with .modalTrigger class
modalTrigger.forEach(el => el.addEventListener('click', toggleModal));

// Close modal
modal.addEventListener('click', function(e) {
  if (!e.target.closest('.modal-inner')) {
    modal.classList.remove('shown');
    modalTrigger.forEach(el => el.classList.remove('highlight'));
  }
});

// Close modal on escape keypress
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('shown')) {
    modal.classList.remove('shown');
    modalTrigger.forEach(el => el.classList.remove('highlight'));
  }
});

// Close menu + reset hamburger to original state
function closeMenu() {

  if(nav.classList.contains('expanded')) {
    nav.style.opacity = "0";
    nav.style.pointerEvents = 'none';
    navBtn.classList.remove('is-active');
    subMenu.classList.remove('expanded');

    setTimeout(function() {
      nav.classList.remove('expanded');
      nav.style.opacity = "";
      nav.style.pointerEvents = '';
    }, 650);
  }
}

function toggleModal() {
  closeMenu();
  modal.classList.toggle('shown');
  modalTrigger.forEach(el => el.classList.toggle('highlight'));
}

const mdBreakpoint = window.matchMedia("(min-width: 768px)");

// if (mdBreakpoint.matches) {
//   back.textContent = 'Back To eddiecleary.com';
// } else {
//   back.textContent = 'Back';
// }

// window.addEventListener('resize', () => {
//   if (mdBreakpoint.matches) {
//     back.textContent = 'Back To eddiecleary.com';
//   } else {
//     back.textContent = 'Back';
//   }
// });
