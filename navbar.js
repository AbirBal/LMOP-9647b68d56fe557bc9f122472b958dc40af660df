  const toggleButton = document.querySelector('.menu-toggle-sub');
  const navbarLinks = document.querySelector('.navbar-links');

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
    document.body.classList.toggle('menu-open');
  });
