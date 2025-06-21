let btnPrevious = window.document.getElementById("previousBtn");
let Leonardo = window.document.getElementById("leonardo");
let Samantha = window.document.getElementById("samantha");
let Bruna = window.document.getElementById("bruna");
let btnNext = window.document.getElementById("nextBtn");

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

let btnSalvar = document.querySelector("#btnSalvar");

btnSalvar.addEventListener("click", function (event) {
  event.preventDefault();

  let dataCapture = document.querySelector("#dataCapture");
  console.log(dataCapture.Name.value);
  console.log(dataCapture.Email.value);
  console.log(dataCapture.Phone.value);
});
