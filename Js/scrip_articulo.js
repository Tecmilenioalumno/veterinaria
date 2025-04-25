// ======= MENÚ =======
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("active");
    });
});

// ======= ACORDEÓN =======
function togglePanel(button) {
    const allButtons = document.querySelectorAll('.accordion-btn');
    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('active');
            btn.nextElementSibling.classList.remove('active');
            btn.nextElementSibling.style.display = 'none';
        }
    });

    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    button.classList.toggle('active');
}

// ======= CARRITO =======
const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
const closeCart = document.getElementById('close-cart');
const buyButton = document.querySelector('.btn-buy');

cartIcon?.addEventListener('click', () => cart.classList.add('active'));
closeCart?.addEventListener('click', () => cart.classList.remove('active'));

document.addEventListener('DOMContentLoaded', ready);

function ready() {
    updateEventListeners();
}

function removeCartItem(event) {
    event.target.closest('.cart-box').remove();
    updateTotal();
}

function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) input.value = 1;
    updateTotal();
}

function addCartClicked(event) {
    const button = event.target;
    const shopProducts = button.closest('.product-box');
    const title = shopProducts.querySelector('.product-title').innerText;
    const price = shopProducts.querySelector('.price').innerText;
    const productImg = shopProducts.querySelector('.product-img').src;

    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    const cartContent = document.querySelector(".cart-content") || createCartContent();
    const cartItemsNames = cartContent.querySelectorAll(".cart-product-title");

    for (let name of cartItemsNames) {
        if (name.innerText.trim() === title.trim()) {
            alert("Ya tienes este producto en el carrito.");
            return;
        }
    }

    const cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    cartShopBox.innerHTML = `
        <img src="${productImg}" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;
    cartContent.appendChild(cartShopBox);

    cartShopBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
    cartShopBox.querySelector('.cart-quantity').addEventListener('input', quantityChanged);
}

function createCartContent() {
    const content = document.createElement("div");
    content.classList.add("cart-content");
    document.getElementById("cart").insertBefore(content, document.querySelector(".total"));
    return content;
}

function updateTotal() {
    const cartBoxes = document.querySelectorAll('.cart-box');
    let total = 0;

    cartBoxes.forEach(box => {
        const price = parseFloat(box.querySelector('.cart-price').innerText.replace('$', '').trim());
        const quantity = parseInt(box.querySelector('.cart-quantity').value);
        total += price * quantity;
    });

    document.querySelector('.total-price').innerText = "$" + total.toFixed(2);
}

function updateEventListeners() {
    document.querySelectorAll('.cart-remove').forEach(btn => {
        btn.removeEventListener("click", removeCartItem);
        btn.addEventListener("click", removeCartItem);
    });

    document.querySelectorAll('.cart-quantity').forEach(input => {
        input.removeEventListener("input", quantityChanged);
        input.addEventListener("input", quantityChanged);
    });

    document.querySelectorAll('.add-cart').forEach(btn => {
        btn.removeEventListener("click", addCartClicked);
        btn.addEventListener("click", addCartClicked);
    });

    if (buyButton) {
        buyButton.removeEventListener('click', buyButtonClicked);
        buyButton.addEventListener('click', buyButtonClicked);
    }
}

function buyButtonClicked() {
    alert('Tu orden está lista');
    const cartContent = document.querySelector('.cart-content');
    if (cartContent) cartContent.innerHTML = '';
    updateTotal();
}

// ======= PRODUCTOS PERRO DINÁMICOS =======
function mostrarProductos(categoria) {
    if (categoria === 'limpieza') {
        const contenedor = document.getElementById('productos-limpieza');
        contenedor.innerHTML = '';
        contenedor.style.display = 'block';

        const productoslimpieza = [
            {
                img: 'Imagenes/Articulos/Bañito.jpg',
                titulo: 'Sophresh Tapetes Ultra Absorbentes - 100 Piezas',
                precio: '$750'
            },
            {
                img: 'Imagenes/medicina/producto3.jpg',
                titulo: 'Royal Canin Gastrointestinal Bajo en Grasa - 13 KG',
                precio: '$2500'
            },
            {
                img: 'Imagenes/medicina/producto4.jpg',
                titulo: 'Simparica Masticable Desparasitante - 3 Tabletas',
                precio: '$750'
            },
        ];

        productoslimpieza.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('product-box');
            div.innerHTML = `
                <img src="${producto.img}" class="product-img" alt="Producto">
                <h2 class="product-title">${producto.titulo}</h2>
                <span class="price">${producto.precio}</span>
                <i class='bx bx-shopping-bag add-cart'></i>
            `;
            contenedor.appendChild(div);
        });

        updateEventListeners();
    }

    if (categoria === 'cama') {
        const contenedor = document.getElementById('productos-cama');
        contenedor.innerHTML = '';
        contenedor.style.display = 'block';

        const productosCama = [
            {
                img: 'Imagenes/medicina/producto5.jpg',
                titulo: 'Advantage Multi Pipeta para Gato 4-8 kg',
                precio: '$410'
            }
        ];

        productosCama.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('product-box');
            div.innerHTML = `
                <img src="${producto.img}" class="product-img" alt="Producto">
                <h2 class="product-title">${producto.titulo}</h2>
                <span class="price">${producto.precio}</span>
                <i class='bx bx-shopping-bag add-cart'></i>
            `;
            contenedor.appendChild(div);
        });

        updateEventListeners();
    }
}

function ocultarProductos() {
    const contenedorLimpieza = document.getElementById('productos-limpieza');
    const contenedorCama = document.getElementById('productos-cama');

    if (contenedorLimpieza) {
        contenedorLimpieza.innerHTML = '';
        contenedorLimpieza.style.display = 'none';
    }

    if (contenedorCama) {
        contenedorCama.innerHTML = '';
        contenedorCama.style.display = 'none';
    }
}