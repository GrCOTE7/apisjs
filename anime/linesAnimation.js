import anime from 'animejs/lib/anime.es.js'

let updates=0;

anime({
  targets: "#line1",
  width: '200px',
  easing: 'linear'
})
anime({
  targets: "#line2",
  width: '120px',
  easing: 'linear'
})

console.log('Ready.')
