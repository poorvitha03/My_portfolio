const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
  navToggle.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('open');
  });
});

const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.site-nav a');

const setActiveLink = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 3;
  sections.forEach((section) => {
    const offsetTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.site-nav a[href='#${id}']`);
    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
      navItems.forEach((item) => item.classList.remove('active'));
      navLink?.classList.add('active');
    }
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
