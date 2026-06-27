const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.classList.toggle("is-active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const testimonials = Array.from(document.querySelectorAll(".testimonial"));
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");
let activeTestimonial = 0;

function showTestimonial(index) {
  testimonials[activeTestimonial].classList.remove("active");
  activeTestimonial = (index + testimonials.length) % testimonials.length;
  testimonials[activeTestimonial].classList.add("active");
}

prevButton.addEventListener("click", () => showTestimonial(activeTestimonial - 1));
nextButton.addEventListener("click", () => showTestimonial(activeTestimonial + 1));

setInterval(() => {
  showTestimonial(activeTestimonial + 1);
}, 5200);

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name").toString().trim();

  formStatus.textContent = `Terima kasih, ${name || "teman sehat"}! Pesan kamu siap dikirim melalui WhatsApp.`;
  contactForm.reset();
});
