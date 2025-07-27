// WhatsApp messages for different services
const whatsappMessages = {
  geral: "Olá! Gostaria de agendar um serviço no Lava Jato GB.",
  simples: "Olá! Gostaria de agendar uma *LAVAGEM SIMPLES* no Lava Jato GB. Pode me informar disponibilidade e preço?",
  completa:
    "Olá! Gostaria de agendar uma *LAVAGEM COMPLETA* no Lava Jato GB. Pode me informar disponibilidade e preço?",
  higienizacao:
    "Olá! Gostaria de agendar uma *HIGIENIZAÇÃO* no Lava Jato GB. Pode me informar disponibilidade e preço?",
  galeria: "Olá! Vi a galeria de trabalhos e gostaria de agendar um serviço no Lava Jato GB.",
  contato: "Olá! Entrei em contato através do site e gostaria de agendar um serviço no Lava Jato GB.",
}

// Function to open WhatsApp with specific message
function openWhatsApp(serviceType) {
  const phoneNumber = "5599000000000"
  const message = whatsappMessages[serviceType] || whatsappMessages.geral
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  window.open(whatsappUrl, "_blank")
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all service items and gallery items
  const animatedElements = document.querySelectorAll(".service-item, .gallery-item, .contact-item")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add click tracking for analytics (optional)
function trackButtonClick(buttonType, serviceType) {
  // You can add Google Analytics or other tracking here
  console.log(`Button clicked: ${buttonType} - ${serviceType}`)
}

// Enhanced button click handlers with tracking
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Add click animation
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    })
  })
})

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const nav = document.querySelector(".nav")
  nav.classList.toggle("mobile-open")
}

// Form validation (if contact form is added later)
function validateForm(formData) {
  const errors = []

  if (!formData.name || formData.name.trim().length < 2) {
    errors.push("Nome deve ter pelo menos 2 caracteres")
  }

  if (!formData.phone || formData.phone.trim().length < 10) {
    errors.push("Telefone deve ter pelo menos 10 dígitos")
  }

  return errors
}

// Utility function to format phone number
function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/)

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }

  return phone
}

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
  if (isLoading) {
    button.disabled = true
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...'
  } else {
    button.disabled = false
    // Restore original content based on button type
    if (button.classList.contains("btn-primary")) {
      button.innerHTML = '<i class="fab fa-whatsapp"></i> Agendar pelo WhatsApp'
    }
  }
}
