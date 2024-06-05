/*-- Function to change the theme --*/ 
function changeColor() {
  // Change the body theme (light/dark) and adjust border color
  const border = document.getElementsByClassName("Border");
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
  /*-- Change border color --*/
  if (element.dataset.bsTheme == "light") {
    for (let i = 0; i < border.length; i++) {
      border[i].classList.add("border-dark");
    }
  } else {
    for (let i = 0; i < border.length; i++) {
      border[i].classList.remove("border-dark");
    }
  }
}

/*-- Global variables --*/ 
let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');
let products = null;
let listCart = [];

// Event listener for page load
window.addEventListener("load", function(){
    // Fetch product data from JSON file
    fetch('js/product.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
        });
    addCartToHTML();
});

// Event listener to toggle cart visibility
iconCart.addEventListener('click', function(){
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(0)'; // Move the container
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
});

// Event listener to close the cart
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
});

// Add product data to HTML
function addDataToHTML(){
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    if(products != null){
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2 id="${product.type}">${product.name}</h2>
            <div class="price">${product.price} €</div>
            <button onclick="addCart(${product.id})">Aggiungi</button>`;

            listProductHTML.appendChild(newProduct);
        });
    }
}

// Add a product to the cart
function addCart(idProduct){
    let productToAdd = products.find(product => product.id === idProduct);
    if(!listCart[idProduct]){
        listCart[idProduct] = {...productToAdd, quantity: 1};
    }else{
        listCart[idProduct].quantity++;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart);
    addCartToHTML();
}

// Update the cart in HTML
function addCartToHTML(){
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    for(let idProduct in listCart){
        let product = listCart[idProduct];
        let newCart = document.createElement('div');
        newCart.classList.add('item');
        newCart.innerHTML = 
            `<img src="${product.image}">
            <div class="content">
                <div class="name ms-5">${product.name}</div>
                <div class="price ms-5">${product.price} € / 1 prodotto</div>
            </div>
            <div class="quantity">
                <button onclick="changeQuantity(${product.id}, '-')">-</button>
                <span class="value">${product.quantity}</span>
                <button onclick="changeQuantity(${product.id}, '+')">+</button>
            </div>`;
        listCartHTML.appendChild(newCart);
        totalQuantity += product.quantity;
    }
    totalHTML.innerText = totalQuantity;
}

// Change the quantity of a product in the cart
function changeQuantity(idProduct, type){
    if(type === '+'){
        listCart[idProduct].quantity++;
    }else if(type === '-'){
        listCart[idProduct].quantity--;
        if(listCart[idProduct].quantity <= 0){
            delete listCart[idProduct];
        }
    }
    document.cookie = "listCart=" + JSON.stringify(listCart);
    addCartToHTML();
}
