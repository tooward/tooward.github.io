// Small JS helpers for the single-page author site

// Inject current year
document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;

  // Collapse navbar on link click (useful for mobile)
  var navLinks = document.querySelectorAll('#navMenu .nav-link');
  var navCollapse = document.getElementById('navMenu');
  if(navCollapse){
    navLinks.forEach(function(link){
      link.addEventListener('click', function(){
        var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if(bsCollapse && window.getComputedStyle(navCollapse).display !== 'none'){
          bsCollapse.hide();
        }
      });
    });
  }
});

// Toggle navbar brand visibility depending on whether the hero section is visible.
// Hide brand while #home (hero) is in view; show it when any other section is scrolled into view.
// Uses IntersectionObserver for efficient observation.
(function(){
  var brand = document.querySelector('.navbar-brand');
  var hero = document.getElementById('home');
  if (!brand || !hero) return;

  // Ensure brand starts visible (CSS handles the rest)
  brand.classList.add('visible');

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        // Hero visible -> hide brand
        brand.classList.add('hidden-in-hero');
        brand.classList.remove('visible');
      } else {
        // Hero not visible -> show brand
        brand.classList.remove('hidden-in-hero');
        brand.classList.add('visible');
      }
    });
  }, { root: null, threshold: [0, 0.1, 0.5] });

  observer.observe(hero);

  // Accessibility: show brand on keyboard focus into navbar
  var nav = document.getElementById('mainNav');
  if(nav){
    nav.addEventListener('focusin', function(){
      brand.classList.remove('hidden-in-hero');
      brand.classList.add('visible');
    });
  }
})();
