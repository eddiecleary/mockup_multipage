(function(a){"function"==typeof define&&define.amd?define("main",a):a()})(function(){'use strict';function a(){g.classList.add("expanded")}function b(){d.classList.contains("expanded")&&(d.style.opacity="0",d.style.pointerEvents="none",f.classList.remove("is-active"),g.classList.remove("expanded"),setTimeout(function(){d.classList.remove("expanded"),d.style.opacity="",d.style.pointerEvents=""},650))}function c(){b(),j.classList.toggle("shown")}const d=document.getElementById("nav"),e=document.getElementById("header"),f=document.getElementById("navBtn"),g=document.getElementById("dropdown-trigger"),h=document.getElementById("dropdown-trigger-2"),i=document.querySelectorAll(".modalTrigger"),j=document.getElementById("modal"),k=document.getElementById("year"),l=document.getElementById("back");k.textContent=new Date().getFullYear(),f.addEventListener("click",function(){d.classList.contains("expanded")?b():(d.classList.add("expanded"),f.classList.add("is-active"),g.addEventListener("mouseover",a,{once:!0}),h.addEventListener("click",a,{once:!0}),e.addEventListener("mouseleave",b,{once:!0}))}),i.forEach(a=>a.addEventListener("click",c)),j.addEventListener("click",function(a){a.target.closest(".modal-inner")||j.classList.remove("shown")}),document.addEventListener("keydown",function(a){"Escape"===a.key&&j.classList.contains("shown")&&j.classList.remove("shown")});const m=window.matchMedia("(min-width: 768px)");l.textContent=m.matches?"Back To eddiecleary.com":"Back",window.addEventListener("resize",()=>{l.textContent=m.matches?"Back To eddiecleary.com":"Back"})});
//# sourceMappingURL=main.js.map
