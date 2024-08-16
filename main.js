//Event listener - desktop Menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
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
const shoppingCartMenu = document.querySelector('#shoppingCartContainer');

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

//Creating Products
const cardsContainer = document.querySelector('.cards-container')

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Monitor',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: 700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


/*  Basic HTML structure:
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts(arr){

    for (product of arr){
        //---Creating container product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //----product = {name, price, image}
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        //---Creating container product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //---Creating container product-info (div)
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        //---Creating figure
        const productInfoFigure = document.createElement('figure');
        const productInfoImgCart = document.createElement('img');
        productInfoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoImgCart);
    
        //Containing elements
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);