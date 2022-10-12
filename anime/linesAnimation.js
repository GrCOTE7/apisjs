import anime from 'animejs/lib/anime.es.js'

myAnimation('linear');
// showAllEffects()

function myAnimation(effect) {

  let lignes = [...document.getElementsByClassName('line')]
  // Reset Lines width
  lignes.forEach(line => line.style.width = 0)

  anime({
    targets: ".l1",
    width: '250px',
    duration: 2000,
    easing: effect
  })
  anime({
    targets: ".l2",
    duration: 2000,
    width: '140px',
    easing: effect
  })

}

function showAllEffects() {

  let numEffect = document.getElementById('numEffect')
  let showEffect = document.getElementById('effect')

  let easingNames = [
    'easeInQuad',
    'easeInCubic',
    'easeInQuart',
    'easeInQuint',
    'easeInSine',
    'easeInExpo',
    'easeInCirc',
    'easeInBack',
    'easeOutQuad',
    'easeOutCubic',
    'easeOutQuart',
    'easeOutQuint',
    'easeOutSine',
    'easeOutExpo',
    'easeOutCirc',
    'easeOutBack',
    'easeInBounce',
    'easeInOutQuad',
    'easeInOutCubic',
    'easeInOutQuart',
    'easeInOutQuint',
    'easeInOutSine',
    'easeInOutExpo',
    'easeInOutCirc',
    'easeInOutBack',
    'easeInOutBounce',
    'easeOutBounce',
    'easeOutInQuad',
    'easeOutInCubic',
    'easeOutInQuart',
    'easeOutInQuint',
    'easeOutInSine',
    'easeOutInExpo',
    'easeOutInCirc',
    'easeOutInBack',
    'easeOutInBounce',
  ]
  let i = 0
  let end = easingNames.length - 1

  let myInterval = setInterval(function () {
    showEffect.innerHTML = easingNames[i]
    numEffect.innerHTML = (i + 1) + ' / ' + (end + 1)
    myAnimation(easingNames[i]);
    if (i > end) {
      clearInterval(myInterval)
      showEffect.innerHTML = ''
      numEffect.innerHTML = 'Fini !'
    }
    myAnimation(easingNames[i++]);
  }, 3000);
}

anime({
  targets: '#canadaLogo path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 20000,
  delay: 100,
  direction: 'alternate',
  loop: true,
  update: function (anim) {
    // updates2++;
    let prog = Math.round(anim.progress)
    // progressLogEl.innerHTML = prog + '%'
    // console.log(typeof prog)
    // myLogo.style.opacity = prog / 100
    if (prog >50) fillElt.style.backgroundColor = 'rgba(255,0,0,0)'
  }
  
})
