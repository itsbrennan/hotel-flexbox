// DOM elements
const sideMenuBtn = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation');

//event listeners

sideMenuBtn.addEventListener('click', () =>
  navigation.classList.toggle('active')
);
