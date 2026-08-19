const menu = document.querySelector(".menu");
const checkbox = document.querySelector(".menu-botao");

checkbox.addEventListener("change", () => {
  menu.classList.toggle("menu-aberto", checkbox.checked);
});
