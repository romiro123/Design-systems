window.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('#burger');
  const burger__menu = document.querySelector('#menu');

  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger-active');
    if (burgerBtn.classList.contains('burger-active')) {
      burger__menu.classList.add('burger__menu-active');
    } else {
      burger__menu.classList.remove('burger__menu-active');
    };
  });
});
