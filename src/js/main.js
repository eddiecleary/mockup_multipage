const nav = document.getElementById('nav');
const header = document.getElementById('header');
const navBtn = document.getElementById('navBtn');
const subMenu = document.getElementById('dropdown-trigger');
const modalTrigger = document.querySelectorAll('.modalTrigger');
const modal = document.getElementById('modal');
const scrollWrap = document.querySelector('.scroll-wrap');
const scrollStage = document.querySelector('.scroll-stage');

// Horizontal scroll on books section
scrollWrap.style.height = `${calcDynamicHeight(scrollStage)}px`;

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  scrollStage.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  scrollWrap.style.height = `${calcDynamicHeight(scrollStage)}px`;
});

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 550;
}

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

// Open modal for all elements with .modalTrigger class
modalTrigger.forEach(el => el.addEventListener('click', toggleModal));

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
