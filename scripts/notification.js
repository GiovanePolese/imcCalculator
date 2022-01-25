const notificationBox = document.querySelector(".notification");
const titulo = document.querySelector(".titulo-notification");
const texto = document.querySelector(".texto-notification");

function notificationSuccess(tituloInput, textoInput) {
  titulo.textContent = tituloInput;
  texto.textContent = textoInput;

  notificationBox.classList.add("success");
  notificationBox.style.display = "block";

  notificationBox.style.transform = "translate(10px)";

  setTimeout(() => {
    notificationBox.style.display = "none";
    notificationBox.classList.remove("success");
  }, 4000);
}

function notificationError(tituloInput, textoInput) {
  titulo.textContent = tituloInput;
  texto.textContent = textoInput;

  notificationBox.classList.add("error");
  notificationBox.style.display = "block";

  notificationBox.style.transform = "translate(10px)";  

  setTimeout(() => {
    notificationBox.style.display = "none";
    notificationBox.classList.remove("error");
  }, 4000);
}