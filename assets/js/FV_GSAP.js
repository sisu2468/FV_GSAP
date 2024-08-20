gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.c-img');

const section_img1 = document.querySelectorAll('.c-img.img1');
const section_img2 = document.querySelectorAll('.c-img.img2');
const section_img3 = document.querySelectorAll('.c-img.img3');
const section_img4 = document.querySelectorAll('.c-img.img4');
const section_img5 = document.querySelectorAll('.c-img.img5');
const section_img6 = document.querySelectorAll('.c-img.img6');
const section_img7 = document.querySelectorAll('.c-img.img7');

const container = document.querySelector('.container');
const screenWidth = window.screen.width;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 0.5, // Scrub sensitivity
    end: () => "+=" + (container.offsetWidth * 15), // Adjust scroll range
  }
});
// ScrollTrigger.addEventListener("refresh", checkOpacity);
// ScrollTrigger.addEventListener("scrollEnd", checkOpacity);

const textElement1 = document.querySelector('.c-text.f1');
const textElement2 = document.querySelector('.c-text.f2');
const textElement3 = document.querySelector('.c-text.f3');
const textElement4 = document.querySelector('.c-text.f4');
const textElement5 = document.querySelector('.c-text.f5');

const img1 = document.querySelector('img.img1');
const img2 = document.querySelector('img.img2');
const img3 = document.querySelector('img.img3');
const img4 = document.querySelector('img.img4');
const img5 = document.querySelector('img.img5');
const img6 = document.querySelector('img.img6');

// Get the computed style of img2 and retrieve the opacity value
let img1Opacity = 1.0;
let img2Opacity = 1.0
let img3Opacity = 1.0
let img4Opacity = 1.0
let img5Opacity = 1.0
let img6Opacity = 1.0

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY || window.pageYOffset;
  console.log("Current scroll position:", scrollPosition);
  img2Opacity = window.getComputedStyle(img2).getPropertyValue('opacity');
  img3Opacity = window.getComputedStyle(img3).getPropertyValue('opacity');
  img4Opacity = window.getComputedStyle(img4).getPropertyValue('opacity');
  img5Opacity = window.getComputedStyle(img5).getPropertyValue('opacity');
  img6Opacity = window.getComputedStyle(img6).getPropertyValue('opacity');
  img1Opacity = window.getComputedStyle(img1).getPropertyValue('opacity');
  console.log("Opacity of img1:", img1Opacity);
  
  // Log the opacity value to the console
  console.log("Opacity of img2:", img2Opacity);
  console.log("Opacity of img3:", img3Opacity);
  console.log("Opacity of img4:", img4Opacity);
  console.log("Opacity of img5:", img5Opacity);
  console.log("Opacity of img6:", img6Opacity);
});

sections.forEach((section, index) => {
  const img = section.querySelector('img');
  const p = section.querySelector('p');
  if (! img.classList.contains('img7')){
    tl.fromTo(img, 
      { opacity: 1 },
      { opacity: 0, duration: 1 }, // Adjust duration
      index * 0.5 // Adjust timing
    );
    
    tl.fromTo(p, 
      { opacity: 1 },
      { opacity: 0, duration: 1 }, // Adjust duration
      index * 0.5 // Adjust timing
    );

  }
});
// if (img1Opacity == 0) {
//   section_img2.forEach((section, index) => {
//     const img = section.querySelector('img');
//     const p = section.querySelector('p');
//     tl.fromTo(img, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
    
//     tl.fromTo(p, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
//   });
// }
// if (img3Opacity == 0) {
//   section_img3.forEach((section, index) => {
//     const img = section.querySelector('img');
//     const p = section.querySelector('p');
//     tl.fromTo(img, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
    
//     tl.fromTo(p, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
//   });
// }
// if (img4Opacity == 0) {
//   section_img4.forEach((section, index) => {
//     const img = section.querySelector('img');
//     const p = section.querySelector('p');
//     tl.fromTo(img, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
    
//     tl.fromTo(p, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
//   });
// }
// if (img5Opacity == 0) {
//   section_img5.forEach((section, index) => {
//     const img = section.querySelector('img');
//     const p = section.querySelector('p');
//     tl.fromTo(img, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
    
//     tl.fromTo(p, 
//       { opacity: 1 },
//       { opacity: 0, duration: 1 }, // Adjust duration
//       index * 0.5 // Adjust timing
//     );
//   });
// }

function checkSP() {
  if (window.innerWidth <= 990) { // or 425 depending on your breakpoint
    textElement1.innerHTML = `関西初*、<br>
				積水化学工業とNIPPOがおくる<br>
				安心・安全・快適な<br>
				「まちづくりプロジェクト」<br><span class="highlight">始動</span>`;
    textElement2.innerHTML = `自然と景観を満喫、<br>
    京都の歴史を感じる<br>ロケーション。`;
    textElement3.innerHTML = `自然と景観を満喫、<br>
    京都の歴史を感じる<br>ロケーション。`;
    textElement4.innerHTML = `3線・3駅利用可能で<br>
				主要エリアへ<br>スムーズアクセス。`;
    textElement5.innerHTML = `3線・3駅利用可能で<br>
				主要エリアへ<br>スムーズアクセス。`;
  }
}
checkSP();