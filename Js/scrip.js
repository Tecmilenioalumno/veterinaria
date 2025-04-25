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
const veterinarians = [
    {
        name: "Dr. Juan Pérez",
        profession: "Veterinario",
        image: "Imagenes/juan_perez.png",
        skills: "Cirugía, Diagnóstico, Emergencias",
        stars: 4
    },
    {
        name: "Dra. Ana López",
        profession: "Veterinaria",
        image: "Imagenes/Ana.png",
        skills: "Vacunación, Nutrición, Cuidado Preventivo",
        stars: 5
    },
    {
        name: "Dr. Luis Martínez",
        profession: "Veterinario",
        image: "Imagenes/Luis.png",
        skills: "Dermatología, Oncológico, Emergencias",
        stars: 3
    },
    {
        name: "Dra. Carmen Rodríguez",
        profession: "Veterinaria",
        image: "Imagenes/Carmen.png",
        skills: "Cirugía General, Geriatría",
        stars: 4
    },
    {
        name: "Dr. Mario Gómez",
        profession: "Veterinario",
        image: "Imagenes/Mario.png",
        skills: "Ortopedia, Urgencias",
        stars: 5
    }
];

function moveSlide(step) {
    const maxIndex = veterinarians.length - 1;
    
    if ((currentIndex === 0 && step < 0) || (currentIndex === maxIndex && step > 0)) {
        return; // Detiene el movimiento cuando llega al inicio o al final
    }
    
    currentIndex += step;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showDetails(index) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    
      const vet = veterinarians[index];
    const starFaces = '🐶'.repeat(vet.stars);
    
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
 //Servicios
document.addEventListener("DOMContentLoaded", () => {
    const vetCards = document.querySelectorAll(".vet-card");

    vetCards.forEach(card => {
        card.addEventListener("click", () => {
            const url = card.getAttribute("data-url");
            window.location.href = url;
        });
    });
});

//Ubicacion

document.addEventListener("DOMContentLoaded", function () {
    console.log("Secci�n de ubicaci�n cargada correctamente.");
});

//Contacto
function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let comentario = document.getElementById("comentario").value;

    if (nombre && correo && telefono && comentario) {
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Tel�fono:", telefono);
        console.log("Comentario:", comentario);
        alert("Formulario enviado correctamente.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
}