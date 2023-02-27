const button = document.getElementById("button-nav");

/* Função para adicionar o evento de click no button e a função para ativar e desativar o Active do UL */
const menuToggle = () => button.nextElementSibling.classList.toggle("active");

button.addEventListener("click", menuToggle);
