console.log(111);

function abrir() {
  if (itens.style.display == "flex") {
    itens.style.display = "none";
  } else {
    itens.style.display = "flex";
  }
}
function mudarTamanho() {
  if (window.innerWidth >= 378 ) {
    itens.style.display = "flex";
  }
}
