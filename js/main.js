'use strict';

{
  /* -------------------------
      hamburger-menuの開閉
  ------------------------- */

  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const dots1 = document.querySelector('.hamburger-icon-dots1');
  const dots2 = document.querySelector('.hamburger-icon-dots2');
  const nav = document.querySelector('.header-nav');

  hamburgerIcon.addEventListener('click', function () {
    dots1.classList.toggle('active');
    dots2.classList.toggle('active');
    nav.classList.toggle('open');
  });

  /* -------------------------
          h1 矢印の動き
  ------------------------- */

  // 伸びる動き
  const arrow = document.querySelector('.main-arrow');

  window.addEventListener('load', function () {
    setTimeout(function () {
      arrow.classList.toggle('load');
    }, 3200);
  });

  // WORKSと重なったら黒に色を変える


  /* -------------------------
          名前divの表示
  ------------------------- */

  const nameContainer = document.querySelector('.container_name');
  const nameAlphabet = document.querySelector('.name_alphabet');
  const nameKanji = document.querySelector('.name_kanji');

  window.addEventListener('load', function () {
    nameContainer.classList.toggle('load');
    setTimeout(function () {
      nameAlphabet.classList.toggle('load');
      nameKanji.classList.toggle('load');
    }, 600);
  });

  /* -------------------------
        自己紹介divの表示
  ------------------------- */

  const selfIntroductionContainer = document.querySelector('.container_self-introduction');
  const selfIntroductionText1 = document.querySelector('.self-introduction-text1');
  const selfIntroductionText2 = document.querySelector('.self-introduction-text2');

  window.addEventListener('load', function () {
    setTimeout(function () {
      selfIntroductionContainer.classList.toggle('load');
      selfIntroductionText1.classList.toggle('load');
      selfIntroductionText2.classList.toggle('load');
    }, 1100);
  });

  /* -------------------------
    works contents表示
  ------------------------- */
  document.addEventListener('scroll', () => {
    const containerWorksContents = document.querySelector('.container_works-contents');
    const worksContents = document.querySelectorAll('.works-content');
    const margin = 100;
    let delay = 0;

    if (window.innerHeight > containerWorksContents.getBoundingClientRect().top + margin) {
      for (let i = 0; i < worksContents.length; i++) {
        setTimeout(() => {
          worksContents[i].classList.add('on');
        }, delay);

        delay += 500;
      }
    }
  });
}


