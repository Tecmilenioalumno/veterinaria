// MENÚ
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("active");
    });
});

// VENTANAS VETERINARIO 
// Datos de los veterinarios
const veterinarians = [
    {
        name: "Dr. Juan Perez",
        profession: "Veterinario",
        image: "Imagenes/juan_perez.png",
        skills: "Cirugia, Diagnostico, Emergencias",
        stars: 4
    },
    {
        name: "Dra. Ana Lopez",
        profession: "Veterinaria",
        image: "Imagenes/Ana.png",
        skills: "Vacunacion, Nutricion, Cuidado Preventivo",
        stars: 5
    },
    {
        name: "Dr. Luis Martinez",
        profession: "Veterinario",
        image: "Imagenes/Luis.png",
        skills: "Dermatologia, Oncologico, Emergencias",
        stars: 3
    },
    {
        name: "Dra. Carmen Rodriguez",
        profession: "Veterinaria",
        image: "Imagenes/Carmen.png",
        skills: "Cirugia General, Geriatria",
        stars: 4
    },
    {
        name: "Dr. Mario Gomez",
        profession: "Veterinario",
        image: "Imagenes/Mario.png",
        skills: "Ortopedia, Urgencias",
        stars: 5
    }
];

function showDetails(index) {
    const vet = veterinarians[index];
    const modal = document.getElementById("vet-modal");
    const modalDetails = document.getElementById("vet-modal-details");

    let stars = "";
    for (let i = 0; i < vet.stars; i++) {
        stars += "🐶";
    }

    modalDetails.innerHTML = `
        <img src="${vet.image}" alt="${vet.name}">
        <h3>${vet.name}</h3>
        <p style="text-align:center;">${stars}</p>
        <hr>
        <p><strong>Profesion:</strong> ${vet.profession}</p>
        <p><strong>Habilidades:</strong> ${vet.skills}</p>
    `;
    
    modal.classList.add("active");
}

function closeModal() {
    document.getElementById("vet-modal").classList.remove("active");
}

// Función para cerrar la ventana emergente
function closeModal() {
    const modal = document.getElementById("vet-modal");
    modal.classList.remove("active");
}

let currentIndex = 0;

function moveSlide(step) {
    const maxIndex = veterinarians.length - 1;
    
    if ((currentIndex === 0 && step < 0) || (currentIndex === maxIndex && step > 0)) {
        return;
    }
    
    currentIndex += step;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function showDetails(index) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    
    const vet = veterinarians[index];
    const starFaces = '?'.repeat(vet.stars);
    
    modalDetails.innerHTML = `
        <img src="${vet.image}" alt="${vet.name}" class="medico-img">
        <div>
            <h3>${vet.name}</h3>
            <p>${starFaces}</p>
            <hr>
            <p><strong>Profesión:</strong> ${vet.profession}</p>
            <p><strong>Habilidades:</strong> ${vet.skills}</p>
        </div>
    `;
    
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Servicios
document.addEventListener("DOMContentLoaded", () => {
    const vetCards = document.querySelectorAll(".vet-card");

    vetCards.forEach(card => {
        card.addEventListener("click", () => {
            const url = card.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });
});

// Ubicación
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sección de ubicación cargada correctamente.");
});

// Contacto
function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let comentario = document.getElementById("comentario").value;

    if (nombre && correo && telefono && comentario) {
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Teléfono:", telefono);
        console.log("Comentario:", comentario);
        alert("Formulario enviado correctamente.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
}