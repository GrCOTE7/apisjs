import anime from 'animejs/lib/anime.min.js';
import './main.css';
import './discover.js';
import './discover.css';

anime({
    targets: '#trait1',
    width: '250px',
    easing: 'easeInOutSine',
    direction: 'normal',
    duration : 2000,
    delay : 0,
    loop: false,
});

anime({
    targets: '#trait2',
    width: '140px',
    easing: 'easeInOutSine',
    direction: 'normal',
    duration : 2000,
    delay : 0,
    loop: false,
});

anime({
    targets: '#logo',
    // width: {
    //   value: '+=79px',
    //   duration: 1800,
    //   easing: 'easeInOutSine',
    // },
    scaleX: { value: 80, duration: 2000, delay: 0, easing: 'easeInOutSine' },
    scaleY: { value: 80, duration: 2000, delay: 0, easing: 'easeInOutSine' },
})


anime({
    targets: 'span',
    opacity: 
        {
        value : ['0', '1'],
        duration : 1000,
        easing: 'easeInOutSine',
        delay: anime.stagger(500, {start:500})
        },
    translateY :
        {
        value : ['-30%', '0'],
        duration : 1000,
        delay: anime.stagger(500),
        easing: 'easeInOutSine'
        }
})

anime({
    targets: '.option',
    opacity: 
        {
        value : ['0', '1'],
        duration : 1000,
        easing: 'easeInOutSine',
        delay: anime.stagger(400, {start:2000})
        },
})

anime({
    targets: '.icon',
    translateX: 
        {
        value : ['220%', '0%'],
        duration : 1000,
        easing: 'easeInOutSine',
        delay: anime.stagger(500, {start:2800})
        }
  })