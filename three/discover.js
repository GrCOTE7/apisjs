import anime from 'animejs/lib/anime.min.js';

let path = anime.path('#chemin path');

anime({
  targets : '#airplane',
  translateX : path('x'),
  translateY : path('y'),
  rotate : path('angle'),
  easing : 'linear',
  duration : 10000,
  loop : true,
})