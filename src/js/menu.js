(() => {
  const refs = {
    openBtn: document.querySelector('[menu-button-open]'),
    closeBtn: document.querySelector('[menu-button-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.getElementsByClassName('site-nav-link'),
  };

  refs.openBtn.addEventListener('click', toggleModal);
  refs.closeBtn.addEventListener('click', toggleModal);
  [...refs.navLinks].forEach(elem =>
    elem.addEventListener('click', toggleModal),
  );

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();

// (() => {
//   const menuBtnOpen = document.querySelector('[menu-button-open]');
//   const menuBtnClose = document.querySelector('[menu-button-close]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const references = document.getElementsByClassName('site-nav-link');

//   menuBtnOpen.addEventListener('click', () => {
//     const expanded =
//       menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
//     const expanded2 =
//       menuBtnClose.getAttribute('aria-expanded') === 'false' || true;

//     menuBtnClose.classList.toggle('is-open');
//     menuBtnOpen.classList.toggle('is-open');

//     mobileMenuRef.classList.toggle('is-open');
//   });

//   menuBtnClose.addEventListener('click', () => {
//     const expanded =
//       menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
//     const expanded2 =
//       menuBtnClose.getAttribute('aria-expanded') === 'false' || true;

//     menuBtnClose.classList.toggle('is-open');
//     menuBtnOpen.classList.toggle('is-open');

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();
