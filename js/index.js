// GSAP
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".card");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (document.querySelector(".cards").offsetWidth / 2)
    }
});