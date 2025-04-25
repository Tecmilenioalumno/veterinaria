// Navegación y Menú Hamburguesa
// =============================
function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
}

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("active");
  });
});



// preguntas
   function toggleFAQ(element) {
    const estaActiva = element.classList.contains('activa');

    // Cierra todas
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('activa');
    });

    // Abre solo si no estaba abierta
    if (!estaActiva) {
      element.classList.add('activa');
    }
  }

// =============================
// Modal: Agendar Cita
// =============================
function mostrarCita() {
  document.getElementById('modal-cita').style.display = 'block';
}

function cerrarCita() {
  document.getElementById('modal-cita').style.display = 'none';
}

// Cierra el modal si se hace clic fuera de él
window.addEventListener("click", function (event) {
  const modal = document.getElementById('modal-cita');
  if (event.target === modal) {
    cerrarCita();
  }
});

// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cita");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Cita agendada con éxito");
      cerrarCita();
      form.reset();
    });
  }
});