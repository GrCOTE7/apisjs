import anime from 'animejs/lib/anime.min.js';
import './main.css';
// import './balance.js';
// import './update.js';

// let updates = 0;
// let ball = document.getElementById('progres');
// let updateLogEl = document.getElementById('update');
// anime({
//     targets: '.update',
//     translateX: 270,
//     delay: 0,
//     duration : 5000,
//     easing: 'linear',
//   update: function(anim) {
//     updates++;
//     ball.innerHTML = 'progress : '+Math.round(anim.progress)+'%';
//     updateLogEl.innerHTML = 'updates : '+updates;

//   }
// });

// let bouncingBall = anime({
//     targets: '.update',
//     translateY: '300px',
//     duration: 3000,
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInCubic',
//     scaleX: {
//         value: 1.25,
//         duration: 300,
//         delay: 2868
//     }
// });

let path = anime.path('#demo-svg path');

anime({
  targets : '#emoji',
  translateX : path('x'),
  translateY : path('y'),
  rotate : path('angle'),
  easing : 'linear',
  duration : 5000,
  loop : true,
})

anime({
    targets : '.polygon_motion polygon',
    points : [
        { value: [
            '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
            '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']   // Gia tri ban dau de 2 gia tri cho no ko bi dung lai ban dau
          },
          { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
          { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
          { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    ],
    easing : 'easeOutQuad',
    direction : 'alternate',
    duration : 2000,
    loop : true,

})