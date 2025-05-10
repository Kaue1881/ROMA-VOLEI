// scroll da paginaY
const VerMais = document.querySelector(".VerMais");
const btnSobre = document.querySelector(".sobreLink");

btnSobre.addEventListener("click", function () {
  window.scrollTo({ top: 650, behavior: "smooth" });
});

VerMais.addEventListener("click", function () {
  window.scrollTo({ top: 650, behavior: "smooth" });
});

// navegação
const burguer = document.querySelector("#burguer-mobile");
const ul = document.querySelector("#lista");

burguer.addEventListener("click", function () {
  if (burguer.classList.contains("open")) {
    ul.style.display = "none";
    burguer.style.backgroundImage = "url(./Img/row.png)";
    burguer.setAttribute("class", "burguer-mobile closed");
  } else {
    ul.style.display = "flex";
    burguer.style.backgroundImage = "url(./Img/close.png)";
    burguer.setAttribute("class", "burguer-mobile open");
  }
});