particlesJS('particles-js',{
   particles: {
       color: '#f7ea22',
       shape: 'circle', // "circle" ""edge" or "triangle"
       opacity: 1,
       size: 3,
       size_random: true,
       nb: 150,
       line_linked: {
           enable_auto: true,
           distance: 120,
           color: '#f7ea22',
           opacity: 0.9,
           width: 1,
           condensed_mode: {
               enable: false,
               rotateX: 600,
               rotateY: 600
           }
        },
       anim: {
           enable: true,
           speed: 1.2
       },
   },
   interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true    
});