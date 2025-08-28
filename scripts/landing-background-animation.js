(function () {
  const landing = document.getElementById('landing');
  if (!landing) return;

  // Gradient color stops for light and dark themes
  const gradients = {
    light: [
      { x: 20, y: 80, color: 'rgba(120,119,198,0.3)' },
      { x: 80, y: 20, color: 'rgba(255,119,198,0.15)' },
      { x: 40, y: 40, color: 'rgba(120,198,198,0.2)' }
    ],
    dark: [
      { x: 20, y: 80, color: 'rgba(60,60,120,0.3)' },
      { x: 80, y: 20, color: 'rgba(120,60,120,0.15)' },
      { x: 40, y: 40, color: 'rgba(60,120,120,0.2)' }
    ]
  };

  // Animation parameters
  const duration = 24000; // ms
  let start = null;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function getTheme() {
    const html = document.documentElement;
    return html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function animateGradient(ts) {
    if (!start) start = ts;
    const theme = getTheme();
    const progress = ((ts - start) % duration) / duration;
    // Animate forward and backward for alternate effect
    const t = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

    // Define key positions for each gradient
    const keyframes = [
      [
        { x: 20, y: 80 },
        { x: 60, y: 30 },
        { x: 70, y: 90 },
        { x: 20, y: 80 }
      ],
      [
        { x: 80, y: 20 },
        { x: 30, y: 70 },
        { x: 10, y: 40 },
        { x: 80, y: 20 }
      ],
      [
        { x: 40, y: 40 },
        { x: 80, y: 60 },
        { x: 90, y: 10 },
        { x: 40, y: 40 }
      ]
    ];

    // Interpolate positions for each gradient stop
    const stops = gradients[theme].map((stop, i) => {
      // Find which segment we're in
      const seg = Math.floor(t * (keyframes[i].length - 1));
      const segT = (t * (keyframes[i].length - 1)) - seg;
      const from = keyframes[i][seg];
      const to = keyframes[i][seg + 1];
      return {
        x: lerp(from.x, to.x, segT),
        y: lerp(from.y, to.y, segT),
        color: stop.color
      };
    });

    // Compose the gradient string
    const gradient =
      `radial-gradient(circle at ${stops[0].x}% ${stops[0].y}%, ${stops[0].color} 0%, transparent 50%),` +
      `radial-gradient(circle at ${stops[1].x}% ${stops[1].y}%, ${stops[1].color} 0%, transparent 50%),` +
      `radial-gradient(circle at ${stops[2].x}% ${stops[2].y}%, ${stops[2].color} 0%, transparent 50%),` +
      (theme === 'dark'
        ? 'linear-gradient(135deg, rgba(40,40,40,0.8) 0%, rgba(40,40,40,0.6) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)');

    landing.style.background = gradient;
    landing.style.backgroundAttachment = 'fixed';

    requestAnimationFrame(animateGradient);
  }

  requestAnimationFrame(animateGradient);

  // Optional: Listen for theme changes
  const observer = new MutationObserver(() => {
    start = null; // restart animation for new theme
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
})();