// GSAP
// gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".card");

console.log(sections);

gsap.to(sections, {
    xPercent: (-100 * (sections.length - 1)) - 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".cards").offsetWidth
    }
});