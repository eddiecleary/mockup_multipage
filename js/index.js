const scrollWrap = document.querySelector('.scroll-wrap');
const scrollStage = document.querySelector('.scroll-stage');

const lgBreakpoint = window.matchMedia("(min-width: 992px)");
const xlBreakpoint = window.matchMedia("(min-width: 1300px)");

// Horizontal scroll on books section
if (lgBreakpoint.matches) {
  scrollWrap.style.height = `${calcDynamicHeight(scrollStage)}px`;
} else {
  scrollWrap.style.height = 'auto';
}

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
    return objectWidth - vw + vh + (vw/4);
  } else if (lgBreakpoint.matches) {
    return objectWidth - vw + vh + (vw/4);
  }
}