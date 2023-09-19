'use strict';

{
  /* -------------------------
          共通の内容
  ------------------------- */
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
          index.htmlのみ
  ------------------------- */

  if (document.getElementById('index-page')) {
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
      }, 1100);
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
      }, 1700);
    });
  }


  /* -----------------------------------------
          index.htmlもしくはworks.htmlのみ
  ------------------------------------------ */

  if (document.getElementById('index-page') || document.getElementById('works-page')) {
    /* -------------------------
          works contents表示
    ------------------------- */
    document.addEventListener('scroll', () => {
      const containerWorksContents = document.querySelector('.container_works-contents');
      const worksContents = document.querySelectorAll('.works-content');
      const worksLabels = document.querySelectorAll('.labels');
      const margin = 100;
      let delay = 0;
      const windowWidth = window.innerWidth;

      if (window.innerHeight > containerWorksContents.getBoundingClientRect().top + margin) {
        if (windowWidth >= 768) { // pc版
          for (let i = 0; i < worksContents.length; i++) {
            // 500ミリ秒ごとにworksContentsを表示
            setTimeout(() => {
              worksContents[i].classList.add('on');
              // 最後の要素が表示された600ミリ秒後にworksLabelsを表示
              if (i === worksContents.length - 1) {
                setTimeout(() => {
                  for (let j = 0; j < worksLabels.length; j++) {
                    worksLabels[j].classList.add('on');
                  }
                }, 600);
              }
            }, delay);
            delay += 500;
          }
        } else { // sp版
          // 800ミリ秒ごとにworksContentsとworksLabelsを交互に表示する
          for (let i = 0; i < worksContents.length + worksLabels.length; i++) {
            setTimeout(() => {
              if (i % 2 === 0) {
                // iが偶数（0・2・4・6）の場合、worksContentsを表示
                const worksContentsIndex = i / 2;
                worksContents[worksContentsIndex].classList.add('on');
              } else {
                // iが偶数（1・3・5・7）の場合、worksLabelsを表示
                const worksLabelsIndex = Math.floor(i / 2);
                worksLabels[worksLabelsIndex].classList.add('on');
              }
            }, delay);
            delay += 800;
          }
        }
      }
    });
  }
}