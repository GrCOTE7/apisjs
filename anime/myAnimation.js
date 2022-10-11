import anime from 'animejs/lib/anime.min.js'
// import { defineConfig } from 'vite';

let updates = 0
let updates2 = 0

let progressLogEl = document.getElementById('ball')
let fillElt = document.getElementById('fill')
let ballElt = document.getElementById('ball')

// console.log(ballElt.style.backgroundColor)
// console.log(ball.innerHTML)

let path = anime.path('#logo2-gc-svg path')
let myLogo = document.getElementById('logo-gc-svg')

console.log(myLogo)


anime({
  targets: '#logo-online-svg path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 5000,
  delay: 10,
  direction: 'alternate',
  loop: true
})





anime({
  targets: "#emoji",
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'easeOutQuad',
  delay: 1000,
  duration: 7000,
  direction: "alternate",
  loop: true,
  update: function (anim) {
    updates++

  }
})

anime({
  targets: '#ball',
  translateX: 260,
  duration: 1000,
  direction: 'alternate',
  loop: 7,
  easing: 'easeOutCirc',
  update: function (anim) {
    updates2++;
    let prog = Math.round(anim.progress)
    progressLogEl.innerHTML = prog + '%'
    console.log(typeof prog)
    myLogo.style.opacity = prog / 100
    fillElt.style.width = prog + 9 + '%'
    fillElt.style.backgroundColor = 'rgba(255,0,0,0.2)'
    fillElt.style.zIndex = 7;
    if (prog < 1) fillElt.style.backgroundColor = 'rgba(255,0,0,0)'
  }
});
// console.log(progressLogEl)
