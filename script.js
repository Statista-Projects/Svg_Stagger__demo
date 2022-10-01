gsap.set(".bolt polygon", { transformOrigin: "center center" });

let svgStagger = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
svgStagger.from(".boxes rect", {
  opacity: 0.3,
  duration: 0.1,
  stagger: { amount: 0.3, from: "random" },
});
svgStagger.from(".bolt polygon", {
  scale: 0.1,
  stagger: 0.02,
  ease: "power3.in",
});
svgStagger.from(
  ".bolt polygon",
  {
    opacity: 0,
    duration: 0.3,
    stagger: 0.02,
    ease: "power3.in",
  },
  "<"
);
