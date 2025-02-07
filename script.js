document.addEventListener("DOMContentLoaded", (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form submission
    const form = document.getElementById("contact-form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      const formData = new FormData(form)
      console.log("Form submitted with data:", Object.fromEntries(formData))
  
      // Clear the form
      form.reset()
  
      // Show a success message
      alert("Thank you for your message! I'll get back to you soon.")
    })
  
    // Add a simple animation to project cards
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)"
        card.style.transition = "transform 0.3s ease"
      })
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)"
      })
    })
  })

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".certificate-card img");
  
    images.forEach(img => {
      img.addEventListener("click", function () {
        // Crear fondo oscuro
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
  
        // Crear imagen ampliada
        const enlargedImg = document.createElement("img");
        enlargedImg.src = this.src;
        enlargedImg.classList.add("enlarged-img");
  
        // Agregar imagen al overlay
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);
  
        // Cerrar imagen al hacer clic en el fondo oscuro
        overlay.addEventListener("click", function () {
          document.body.removeChild(overlay);
        });
      });
    });
  });
  
  