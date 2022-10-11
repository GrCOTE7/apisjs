import anime from 'animejs/lib/anime.min.js';
// import { defineConfig } from 'vite';

var updates = 0;

let progressLogEl = document.getElementById('ball')
let fillElt = document.getElementById('fill')
let ballElt = document.getElementById('ball')

console.log(ballElt.style.backgroundColor)
// console.log(ball.innerHTML)

anime({
  targets: '#ball',
  translateX: 260,
  duration: 1000,
  direction: 'alternate',
  loop: 7,
  easing: 'linear',
  update: function (anim) {
    updates++;
    let prog = Math.round(anim.progress)
    progressLogEl.innerHTML = prog + '%';
    // console.log(typeOf(prog));
    fillElt.style.width = prog + 9 + '%'
    fillElt.style.backgroundColor = 'red'
    fillElt.style.zIndex = 7;
    if (prog < 1) fillElt.style.backgroundColor = 'rgba(255,0,0,0)'
  }
});
console.log(progressLogEl)
