// Menu-Hamburguer

const menu = document.querySelector(".menu");
const checkbox = document.querySelector(".menu-botao");

checkbox.addEventListener("change", () => {
  menu.classList.toggle("menu-aberto", checkbox.checked);
});

//Carrossel de imagens

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 16,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: { slidesPerView: 3, spaceBetween: 20 },
    992: { slidesPerView: 4, spaceBetween: 24 },
  },
});

// Fomulário e-mail

const formContato = document.getElementById("formContato");
const formStatus = document.getElementById("formStatus");

if (formContato) {
  formContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (!formContato.checkValidity()) {
      formContato.reportValidity();
      return;
    }

    const nome = formContato.nome.value;
    const email = formContato.email.value;
    const mensagem = formContato.mensagem.value;

    const destinatario = "consultoriauno1espi@gmail.com";
    const assunto = `Contato pelo site — ${nome}`;
    const corpo = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;

    const linkMailto = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    if (formStatus) {
      alert("Abrindo seu aplicativo de e-mail...");
    }

    window.location.href = linkMailto;
  });
}
