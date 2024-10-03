// JavaScript to toggle the navigation menu when the hamburger menu is clicked
document.getElementById('hamburger-menu').addEventListener('click', function () {
    const navMenu = document.querySelector('#navigation-bar ul');
    navMenu.classList.toggle('active');
});
