const toggleButton = document.querySelector('.menu-toggle-sub');
const navbarLinks = document.querySelector('.navbar-links');

// Ouverture/fermeture du menu hamburger
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
  document.body.classList.toggle('menu-open');
});

// Gestion des sous-menus (niveau 1 : Équipes, Publications, etc.)
document.querySelectorAll('.navbar-links > li').forEach(li => {
  const submenu = li.querySelector(':scope > ul');
  if (!submenu) return;

  const link = li.querySelector(':scope > a');

  link.addEventListener('click', function (e) {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    e.preventDefault();
    const isOpen = li.classList.contains('open');

    // Fermer tous les autres sous-menus niveau 1
    document.querySelectorAll('.navbar-links > li.open').forEach(other => {
      if (other !== li) {
        other.classList.remove('open');
        other.querySelectorAll('.open').forEach(child => child.classList.remove('open'));
      }
    });

    li.classList.toggle('open', !isOpen);
  });
});

// Gestion des sous-sous-menus (niveau 2 : Chercheurs → Assistants, P.E.S, Post-Doc)
document.querySelectorAll('.navbar-links > li > ul > li').forEach(li => {
  const submenu = li.querySelector(':scope > ul');
  if (!submenu) return;

  const link = li.querySelector(':scope > a');

  link.addEventListener('click', function (e) {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    e.preventDefault();
    const isOpen = li.classList.contains('open');

    // Fermer les autres sous-sous-menus
    li.closest('ul').querySelectorAll('li.open').forEach(other => {
      if (other !== li) other.classList.remove('open');
    });

    li.classList.toggle('open', !isOpen);
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) return;

  if (!navbarLinks.contains(e.target) && !toggleButton.contains(e.target)) {
    navbarLinks.classList.remove('show');
    document.body.classList.remove('menu-open');
    document.querySelectorAll('.navbar-links .open').forEach(el => el.classList.remove('open'));
  }
});
