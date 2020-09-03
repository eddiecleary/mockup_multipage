const nav = document.getElementById('nav');
const header = document.getElementById('header');
const navBtn = document.getElementById('navBtn');
const subMenu = document.getElementById('dropdown-trigger');
const modalTrigger = document.querySelectorAll('.modalTrigger');
const modal = document.getElementById('modal');
const scrollWrap = document.querySelector('.scroll-wrap');
const scrollStage = document.querySelector('.scroll-stage');

const lgBreakpoint = window.matchMedia("(min-width: 992px)");
const xlBreakpoint = window.matchMedia("(min-width: 1300px)");

// Horizontal scroll on books section
scrollWrap.style.height = `${calcDynamicHeight(scrollStage)}px`;

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');

  if (lgBreakpoint.matches) {
    // scrollStage.style.transform = `translateX(-${sticky.offsetTop}px)`;
    scrollStage.style.transform = `translateX(-${sticky.offsetTop}px)`;
  } else {
    scrollStage.style.transform = 'initial';
  }
});

window.addEventListener('resize', () => {

  if (lgBreakpoint.matches) {
    scrollWrap.style.height = `${calcDynamicHeight(scrollStage)}px`;
  } else {
    scrollWrap.style.height = 'auto';
  }
});

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;

  if (xlBreakpoint.matches) {
    return objectWidth - vw + vh + 1100;
  } else if (lgBreakpoint.matches) {
    return objectWidth - vw + vh + 100;
  }
}

// Open Nav from Hamburger
navBtn.addEventListener('click', function(){

  if (!nav.classList.contains('expanded')) {
    nav.classList.add('expanded');
    navBtn.classList.add('is-active');

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
  console.log('clicked');
  modal.classList.toggle('shown');
}
