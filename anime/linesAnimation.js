import anime from './animejs/lib/anime.min.js'

let updates=0;

anime({
  targets: ".lines",
  easing: 'easeOutQuad',
  duration: 7000,
  loop: 1,
  update: function (a) {
    updates++

  }
})
