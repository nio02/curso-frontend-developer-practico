//Event listener - desktop Menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('Click');
    //Conditional Shopping Cart Overlay Solution
    const isAsideMenuClosed = shoppingCartMenu.classList.contains('inactive');

    if (!isAsideMenuClosed){
        //Si el mobile-menu está abierto, hay que cerrarlo
        shoppingCartMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//Event Listener - Mobile Menu
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    console.log('Click');
    //Conditional Shopping Cart Overlay Solution
    const isAsideMenuClosed = shoppingCartMenu.classList.contains('inactive');

    if (!isAsideMenuClosed){
        //Si el mobile-menu está abierto, hay que cerrarlo
        shoppingCartMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//Event Listener - Aside (Shopping Cart)
const menuShopCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

menuShopCarIcon.addEventListener('click', toggleShoppingCartMenu);

//---Conditional function solution

function toggleShoppingCartMenu(){
    //shoppingCartMenu.classList.toggle('inactive'); (Ya no simplemente incluiremos esto)
    
    //Mobile Menu Overlay
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        //Si el mobile-menu está abierto, hay que cerrarlo
        mobileMenu.classList.add('inactive');
    }

    //Shopping Cart Menu Overlay
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed){
        //Si el Desktop-menu está abierto, hay que cerrarlo
        desktopMenu.classList.add('inactive');
    }

    shoppingCartMenu.classList.toggle('inactive');
}