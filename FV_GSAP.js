gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.c-img');
const container = document.querySelector('.container');

// GSAP timeline to handle the opacity transitions
const tl = gsap.timeline({
  scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => "+=" + container.offsetWidth
  }
});

sections.forEach((section, index) => {
  tl.fromTo(section.querySelector('img'), 
      { opacity: 1 }, // Start with full opacity
      { opacity: 0 }, // End with no opacity
      index * 1 // Change this to adjust timing
  );
});

function checkOpacity() {
  document.querySelectorAll('img').forEach(img => {
    const opacity = window.getComputedStyle(img).getPropertyValue('opacity');
    if (opacity == 0) {
      img.style.display = 'none';
      console.log('Image with opacity 0 has been hidden:', img.className);
    } else {
      img.style.display = ''; // Ensure the image is visible if opacity is not 0
    }
  });
  requestAnimationFrame(checkOpacity);
}

checkOpacity();
