document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');

  window.addEventListener('load', () => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.remove();
    }, 1000);
  });

  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.parallax-content').forEach(section => {
    observer.observe(section);
  });
});
