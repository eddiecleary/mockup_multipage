const nav = document.getElementById('nav');
const navBtn = document.getElementById('navBtn');

navBtn.addEventListener('click', function(){
  nav.classList.toggle('expanded');
  navBtn.classList.toggle('is-active');
});