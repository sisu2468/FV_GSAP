gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.c-img');
const container = document.querySelector('.container');

// GSAP timeline to handle the opacity transitions
const tl = gsap.timeline({
  scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => "+=" + (container.offsetWidth * 4) // Increase the scroll range by multiplying the container width
  }
});

sections.forEach((section, index) => {
  tl.fromTo(section.querySelector('img'), 
      { opacity: 1 }, // Start with full opacity
      { opacity: 0, duration: 100}, // End with no opacity
      index * 100 // Change this to adjust timing
  );
});
sections.forEach((section, index) => {
  tl.fromTo(section.querySelector('p'), 
      { opacity: 1 }, // Start with full opacity
      { opacity: 0, duration: 100}, // End with no opacity
      index * 100 // Change this to adjust timing
  );
});
// sections.forEach((section, index) => {
//   tl.fromTo(section.querySelector('p'), 
//       { opacity: 1 }, // Start with full opacity
//       { opacity: 0}, // End with no opacity
//       index * 100000 // Change this to adjust timing
//   );
// });
const black_text = document.querySelector('.c-text.f0');
const text1 = document.querySelector('.c-text.f1');
const text2 = document.querySelector('.c-text.f2');
const text3 = document.querySelector('.c-text.f3');
const text4 = document.querySelector('.c-text.f4');
const text5 = document.querySelector('.c-text.f5');

function checkOpacity() {
  document.querySelectorAll('img').forEach(img => {
    const opacity = window.getComputedStyle(img).getPropertyValue('opacity');
    if (opacity == 0) {
      // img.style.display = 'none';
      console.log('Image with opacity 0 has been hidden:', img.className);
      if (img.className == 'black-image'){
        black_text.style.display = 'none';
      }
      if (img.className == 'img1'){
        text1.style.display = 'none';
      }
      if (img.className == 'img2'){
        text2.style.display = 'none';
      }
      if (img.className == 'img3'){
        text3.style.display = 'none';
      }
      if (img.className == 'img4'){
        text4.style.display = 'none';
      }
      if (img.className == 'img5'){
        text5.style.display = 'none';
      }
    } else {
      img.style.display = ''; // Ensure the image is visible if opacity is not 0
    }
    if (opacity == 1) {
      if (img.className == 'black-image'){
        black_text.style.display = 'block';
      }
      if (img.className == 'img1'){
        text1.style.display = 'block';
      }
      if (img.className == 'img2'){
        text2.style.display = 'block';
      }
      if (img.className == 'img3'){
        text3.style.display = 'block';
      }
      if (img.className == 'img4'){
        text4.style.display = 'block';
      }
      if (img.className == 'img5'){
        text5.style.display = 'block';
      }
    }
  });
  requestAnimationFrame(checkOpacity);
}

checkOpacity();
