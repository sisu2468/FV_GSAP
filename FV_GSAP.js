gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".c-img");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

// sections.forEach((section, index) => {
//   const img = section.querySelector('img');
//   const text = section.querySelector('.c-text');

//   gsap.fromTo(img, { opacity: 0 }, {
//     opacity: 1,
//     scrollTrigger: {
//       trigger: section,
//       start: "center center",
//       end: "center center",
//       scrub: true
//     }
//   });

//   gsap.fromTo(text, { opacity: 0 }, {
//     opacity: 1,
//     scrollTrigger: {
//       trigger: section,
//       start: "center center",
//       end: "center center",
//       scrub: true
//     }
//   });
// });
