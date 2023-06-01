// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelector('.navbar-collapse').classList.remove('show');
    });
  });
  