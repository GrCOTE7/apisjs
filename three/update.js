import anime from 'animejs/lib/anime.min.js';

let updates = 0;

anime({
  targets: '.update',
  translateX: 270,
  delay: 1000,
  direction: 'alternate',
  loop: 3,
  easing: 'easeInOutCirc',
//   update: function(anim) {
//     updates++;
//     progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
//     updateLogEl.value = 'updates : '+updates;
//   }
});