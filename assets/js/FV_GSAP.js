gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.c-img');
const container = document.querySelector('.container');
const screenWidth = window.screen.width;
console.log('Screen width:', screenWidth);
let delay_time = 5;

if(screenWidth <= 768){
  delay_time = 10;
} else if(screenWidth <= 425){
  delay_time = 20;
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 0.5, // Scrub sensitivity
    end: () => "+=" + (container.offsetWidth * delay_time), // Adjust scroll range
  }
});

sections.forEach((section, index) => {
  const img = section.querySelector('img');
  const p = section.querySelector('p');

  // Skip opacity animation for img5
  if (!img.classList.contains('img5')) {
    tl.fromTo(img, 
      { opacity: 1 },
      { opacity: 0, duration: 1 }, // Adjust duration
      index * 0.5 // Adjust timing
    );
  }

  tl.fromTo(p, 
    { opacity: 1 },
    { opacity: 0, duration: 1 }, 
    index * 1
  );
});

const black_text = document.querySelector('.c-text.f0');
const texts = [document.querySelector('.c-text.f1'), document.querySelector('.c-text.f2'), document.querySelector('.c-text.f3'), document.querySelector('.c-text.f4'), document.querySelector('.c-text.f5')];

function checkOpacity() {
  document.querySelectorAll('img').forEach((img, idx) => {
    const opacity = window.getComputedStyle(img).getPropertyValue('opacity');
    const correspondingText = texts[idx - 1];
    if (opacity == 0) {
      if (img.className == 'black-image') black_text.style.display = 'none';
      if (correspondingText && correspondingText != 'f5') correspondingText.style.display = 'none';
    } else if (opacity == 1) {
      if (img.className == 'black-image') black_text.style.display = 'block';
      if (correspondingText) correspondingText.style.display = 'block';
    }
  });
}

ScrollTrigger.addEventListener("refresh", checkOpacity);
ScrollTrigger.addEventListener("scrollEnd", checkOpacity);

// sections.forEach((section, index) => {
//   tl.fromTo(section.querySelector('p'), 
//       { opacity: 1 }, // Start with full opacity
//       { opacity: 0}, // End with no opacity
//       index * 100000 // Change this to adjust timing
//   );
// });
// const black_text = document.querySelector('.c-text.f0');
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
