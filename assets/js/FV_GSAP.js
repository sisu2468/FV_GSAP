gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.c-img.img1');
const container = document.querySelector('.container');
const screenWidth = window.screen.width;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 0.5, // Scrub sensitivity
    end: () => "+=" + (container.offsetWidth * 4), // Adjust scroll range
  }
});

sections.forEach((section, index) => {
  const img = section.querySelector('img');
  const p = section.querySelector('p');

  tl.fromTo(img, 
    { opacity: 1 },
    { opacity: 0, duration: 1 }, // Adjust duration
    index * 0.5 // Adjust timing
  );
});

ScrollTrigger.addEventListener("refresh", checkOpacity);
ScrollTrigger.addEventListener("scrollEnd", checkOpacity);

const text1 = document.querySelector('.c-text.f1');
const text2 = document.querySelector('.c-text.f2');
const text3 = document.querySelector('.c-text.f3');
const text4 = document.querySelector('.c-text.f4');
const text5 = document.querySelector('.c-text.f5');
const text6 = document.querySelector('.c-text.f6');
const text7 = document.querySelector('.c-text.f7');

const img1 = document.querySelector('img.img1');
const img2 = document.querySelector('img.img2');
const img3 = document.querySelector('img.img3');
const img4 = document.querySelector('img.img4');
const img5 = document.querySelector('img.img5');
const img6 = document.querySelector('img.img6');
const img7 = document.querySelector('img.img7');

function checkOpacity() {
  document.querySelectorAll('img').forEach(img => {
    if (img.classList.contains('img1')) {
      const opacity = window.getComputedStyle(img).getPropertyValue('opacity');
      if(opacity <= 0.9){
        text1.style.display = 'none';
        img2.style.display = 'block';
        text2.style.display = 'block';
      }
      if(opacity <= 0.7){
        img2.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'block';
        img3.style.display = 'block';
      }
      if(opacity <= 0.5){
        img3.style.display = 'none';
        text3.style.display = 'none';
        img4.style.display = 'block';
        text4.style.display = 'block';
      }
      if(opacity <= 0.2){
        img4.style.display = 'none';
        text4.style.display = 'none';
        img5.style.display = 'block';
        text5.style.display = 'block';
      }
      if(opacity <= 0.1){
        img5.style.display = 'none';
        text5.style.display = 'none';
        img6.style.display = 'block';
        text6.style.display = 'block';
      }
      if(opacity <= 0.06){
        img6.style.display = 'none';
        text6.style.display = 'none';
        img7.style.display = 'block';
        text7.style.display = 'block';
      }
    }
  });
}

checkOpacity();
console.log(window.innerWidth);

function checkSP() {
  if (window.innerWidth <= 990) { // or 425 depending on your breakpoint
    const textElement1 = document.querySelector('.c-text.f1');
    const textElement2 = document.querySelector('.c-text.f2');
    const textElement3 = document.querySelector('.c-text.f3');
    const textElement4 = document.querySelector('.c-text.f4');
    const textElement5 = document.querySelector('.c-text.f5');

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