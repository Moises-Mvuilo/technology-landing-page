var btnPrevious = window.document.getElementById("previousBtn");
var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");

var Bruna = window.document.getElementById("bruna");
var btnNext = window.document.getElementById("nextBtn");

function turnOfRight() {
  Leonardo.style = "display: none;";
  Bruna.style = "display: flex;";

  btnPrevious.style = "display: flex;";
  btnNext.style = "display: none;";
}

function turnOfLeft() {
  Bruna.style = "display: none;";
  Leonardo.style = "display: flex;";

  btnPrevious.style = "display: none;";
  btnNext.style = "display: flex;";
}
