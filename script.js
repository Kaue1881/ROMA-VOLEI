const subirAoTopo = document.querySelector('.subir');

subirAoTopo.addEventListener('click', function(){
  window.scrollTo({top: 0, behavio: "smooth"});
})

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

// retrai a barra de nav quando clicado em algum dos links
window.addEventListener('resize', function(){
  const navlink = document.querySelectorAll('.navLink');
  const burguer = document.querySelector("#burguer-mobile");
  const ul = document.querySelector("#lista");
  navlink.forEach(function(link){
    link.addEventListener('click', function(){
      ul.style.display = "none";
      burguer.style.backgroundImage = "url(./Img/row.png)";
      burguer.setAttribute("class", "burguer-mobile closed");
    })
  })
  if (window.innerWidth > 886) {
    ul.style.display = "flex";
    burguer.setAttribute("class", "burguer-mobile closed");
  } 
})

const levantador = document.querySelector(".levantador");
const ponteiros = document.querySelector(".ponteiros");
const central = document.querySelector(".central");
const oposto = document.querySelector(".oposto");
const libero = document.querySelector(".libero");

let jogadoresSelect = document.querySelector("#jogadores");

jogadoresSelect.addEventListener('change', function(){
  const posicaoSelecionada = this.value;
  const secoes = document.querySelectorAll('.player-box');

  secoes.forEach(secao => {
    if(posicaoSelecionada === "todos" || secao.dataset.posicao === posicaoSelecionada){
      secao.style.display = "flex";
    } else {
      secao.style.display = "none";
    }
  });
});