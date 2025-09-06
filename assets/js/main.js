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
