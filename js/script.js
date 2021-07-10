'use strict';

toggleNavigation();

function toggleNavigation() {
  let navbar = document.querySelector('.navbar');
  let navButton = document.querySelector('.navbar__menubtn');
  let options = document.querySelector('.navbar__options');

  navButton.addEventListener('click', function() {
    navbar.classList.toggle('navbar--wrap');
    options.classList.toggle('options--show');
  });
}
