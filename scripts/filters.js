const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
const filterPanels = Array.from(document.querySelectorAll('.filter-panel'));

const allFilterValues = filterButtons
  .map(btn => btn.getAttribute('data-filter'))
  .filter(Boolean);

const toClass = v => String(v).trim().toLowerCase().replace(/\s+/g, '-');
const allFilterClasses = allFilterValues.filter(v => v !== 'all').map(toClass);

// ensure panels are positioned to allow getBoundingClientRect changes
filterPanels.forEach(p => p.style.position = p.style.position || 'relative');

function flipAnimate(panel, applyChange) {
  const items = Array.from(panel.querySelectorAll('.case-study'));
  if (!items.length) {
    applyChange();
    return;
  }

  // record current positions (before any change)
  const currentRects = items.map(el => el.getBoundingClientRect());

  // measure baseline (ALL) positions by temporarily removing any id
  const prevId = panel.id || null;
  if (prevId) panel.removeAttribute('id');
  void panel.offsetHeight;
  const baselineRects = items.map(el => el.getBoundingClientRect());
  // restore previous id
  if (prevId) panel.id = prevId;
  void panel.offsetHeight;

  // apply target change (sets new id)
  applyChange();
  void panel.offsetHeight;
  const finalRects = items.map(el => el.getBoundingClientRect());

  items.forEach((el, i) => {
    const cur = currentRects[i];
    const base = baselineRects[i];
    const fin = finalRects[i];

    const curHidden = !cur || (cur.width === 0 && cur.height === 0);
    const finHidden = !fin || (fin.width === 0 && fin.height === 0);

    // If element will be hidden in final state, fade it out and skip transform
    if (finHidden) {
      el.style.transition = 'opacity .28s ease';
      el.style.opacity = '0';
      setTimeout(() => {
        // cleanup inline styles so CSS controls final state
        el.style.transition = '';
        el.style.opacity = '';
      }, 350);
      return;
    }

    // Choose origin: if currently visible, animate from current -> final; 
    // if currently hidden, animate from baseline (ALL) -> final
    const origin = curHidden ? base : cur;

    // If origin or final missing, skip
    if (!origin || !fin) return;

    const dx = origin.left - fin.left;
    const dy = origin.top - fin.top;

    if (dx === 0 && dy === 0) return;

    // invert
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    el.style.transition = 'transform 0s';

    // play
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'transform .45s cubic-bezier(0.2,0.8,0.2,1), opacity .25s ease';
        el.style.transform = '';
        setTimeout(() => {
          el.style.transition = '';
          el.style.transform = '';
        }, 500);
      });
    });
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const rawFilterValue = button.getAttribute('data-filter') || 'all';
    const filterValue = rawFilterValue === 'all' ? 'all' : toClass(rawFilterValue);

    filterPanels.forEach(panel => {
      flipAnimate(panel, () => {
        // remove any previous filter id
        panel.removeAttribute('id');
        if (filterValue && filterValue !== 'all') {
          panel.id = filterValue; // your CSS uses #work / #side selectors
        }
      });
    });
  });
});