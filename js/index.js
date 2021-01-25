// GSAP
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {

        let sections = gsap.utils.toArray(".card");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".cards",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + (document.querySelector(".cards").offsetWidth)
            }
        });
    }
});

document.getElementById('scrolltobooks').addEventListener('click', function(){
    gsap.to(window, {duration: 1, scrollTo: "#books"});
});
