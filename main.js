//Event listener - desktop Menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

//Event Listener - Mobile Menu
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    console.log('Click');
    mobileMenu.classList.toggle('inactive');
}

//Event Listener - Aside (Shopping Cart)
const menuShopCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

menuShopCarIcon.addEventListener('click', toggleShoppingCartMenu);

function toggleShoppingCartMenu(){
    console.log('Click');
    shoppingCartMenu.classList.toggle('inactive');
}