// Academic Personal Website - Main Script

document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-inner a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var navHeight = document.querySelector('.site-nav').offsetHeight;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Active nav highlighting on scroll
  var sections = document.querySelectorAll('.content-section');
  var navLinks = document.querySelectorAll('.nav-inner a');

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.style.background = '';
            link.style.color = '';
          });
          var id = entry.target.getAttribute('id');
          var activeLink = document.querySelector('.nav-inner a[href="#' + id + '"]');
          if (activeLink) {
            activeLink.style.background = 'rgba(255,255,255,0.18)';
            activeLink.style.color = '#fff';
          }
        }
      });
    }, { rootMargin: '-60px 0px -60% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

});
