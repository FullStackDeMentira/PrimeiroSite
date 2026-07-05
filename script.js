document.addEventListener("DOMContentLoaded", () => {
   const titulo = document.querySelector("h1");
    if (!titulo) {
        console.log("H1 não encontrado");
        return;
    }
 alert("Seja bem-vindo ao meu site! 😄");

    console.log("Site criado por Samuel.");
     titulo.addEventListener("mouseover", () => {
        titulo.style.color = "#FFD700";
    });
     titulo.addEventListener("mouseout", () => {
        titulo.style.color = "#0056b3";
    });
     titulo.addEventListener("click", () => {
        alert("Você clicou no título! 😎");
    });
});