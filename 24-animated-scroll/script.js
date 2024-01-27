const navList = document.querySelector('.nav-list');
const scrollBtn = document.querySelector('.top');
const rootEl = document.documentElement;

/* Active Menu Switcher */
navList.addEventListener('click', (e) => {
  const navLink = e.target.parentElement;
  if (navLink.classList.contains('link')) {
    navList.querySelector('.active').classList.remove('active');
    navLink.classList.add('active');
  }
});

/* Sticky Header */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
  showBtn();
});

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add('show-btn');
  } else {
    scrollBtn.classList.remove('show-btn');
  }
}

scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
