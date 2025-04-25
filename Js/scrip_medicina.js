// ======= MENÚ =======
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("active");
    });
});

// Cambia color del menú al hacer scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
   
});


// ======= ACORDEÓN =======
function togglePanel(button) {
    const allPanels = document.querySelectorAll('.panel');
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
const buyButton = document.getElementsByClassName('btn-buy')[0];

cartIcon.addEventListener('click', () => cart.classList.add('active'));
closeCart.addEventListener('click', () => cart.classList.remove('active'));

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

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
    const shopProducts = button.parentElement;
    const title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    const price = shopProducts.getElementsByClassName('price')[0].innerText;
    const productImg = shopProducts.getElementsByClassName('product-img')[0].src;

    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    const cartContent = document.querySelector(".cart-content") || createCartContent();
    const cartItemsNames = cartContent.querySelectorAll(".cart-product-title");

    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText.trim() === title.trim()) {
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

    updateTotal();
}

function createCartContent() {
    const content = document.createElement("div");
    content.classList.add("cart-content");
    document.getElementById("cart").insertBefore(content, document.querySelector(".total"));
    return content;
}

function updateTotal() {
    const cartBoxes = document.getElementsByClassName('cart-box');
    let total = 0;

    Array.from(cartBoxes).forEach(cartBox => {
        const price = parseFloat(cartBox.querySelector('.cart-price').innerText.replace('$', '').trim());
        const quantity = parseInt(cartBox.querySelector('.cart-quantity').value);
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

    buyButton.removeEventListener('click', buyButtonClicked);
    buyButton.addEventListener('click', buyButtonClicked);
}

function buyButtonClicked() {
    alert('Tu orden está lista');
    const cartContent = document.querySelector('.cart-content');
    if (cartContent) cartContent.innerHTML = '';
    updateTotal();
}

// ======= PRODUCTOS PERRO DINÁMICOS =======
function mostrarProductos(categoria) {
    if (categoria === 'perro') {
        const contenedor = document.getElementById('productos-perro');
        contenedor.innerHTML = '';
        contenedor.style.display = 'block';

        const productosPerro = [
            {
                img: 'Imagenes/Medicina/producto2.jpg',
                titulo: 'HILL´S PRESCRIPTION DIET H/D, CUIDADO DEL CORAZÓN, ALIMENTO PARA PERRO 7.9 KG',
                precio: '$2100'
            },
            {
                img: 'Imagenes/Medicina/producto3.jpg',
                titulo: 'ROYAL CANIN PRESCRIPCIÓN ALIMENTO SECO GASTROINTESTINAL BAJO EN GRASA PARA PERRO ADULTO, 13 KG',
                precio: '$2500'
            },
            {
                img: 'Imagenes/medicina/producto4.jpg',
                titulo: 'SIMPARICA MASTICABLE DESPARASITANTE EXTERNO PARA PERRO 5-10 KG, 3 TABLETAS',
                precio: '$750'
            },
        ];

        productosPerro.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('product-box');
            div.innerHTML = `
                <img src="${producto.img}" alt="Producto" class="product-img">
                <h2 class="product-title">${producto.titulo}</h2>
                <span class="price">${producto.precio}</span>
                <i class='bx bx-shopping-bag add-cart'></i>
            `;
            contenedor.appendChild(div);
        });

        updateEventListeners();
    }

    if (categoria === 'gato') {
        const contenedor = document.getElementById('productos-gato');
        contenedor.innerHTML = '';
        contenedor.style.display = 'block';

        const productosGato = [
            {
                img: 'Imagenes/medicina/producto5.jpg',
                titulo: 'Advantage Multi Pipeta Antiparasitaria Interna y Externa para Gato, 4 a 8 kg',
                precio: '$410'
            }
        ];

        productosGato.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('product-box');
            div.innerHTML = `
                <img src="${producto.img}" alt="Producto" class="product-img">
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
    const contenedorPerro = document.getElementById('productos-perro');
    const contenedorGato = document.getElementById('productos-gato');
    if (contenedorPerro) {
        contenedorPerro.innerHTML = '';
        contenedorPerro.style.display = 'none';
    }
    if (contenedorGato) {
        contenedorGato.innerHTML = '';
        contenedorGato.style.display = 'none';
    }
}