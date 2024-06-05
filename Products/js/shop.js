/*-- Change the Main img --*/
function changeImg(newSrc) {
  var mainImg = document.getElementById("mainImg");
  mainImg.src = newSrc;
}

/*-- Other Description --*/
function ShowOther() {
  const button = document.getElementsByClassName("showOther")[0];
  const other = document.getElementsByClassName("hideSpec");
  if (other.length > 0 && other[0].classList.contains("hide")) {
    for (let i = 0; i < other.length; i++) {
      other[i].classList.remove("hide");
    }
    button.innerText = "▲ Mostra di meno ▲";
  } else {
    for (let i = 0; i < other.length; i++) {
      other[i].classList.add("hide");
    }
    button.innerText = "▼ Mostra di più ▼";
  }
}

/*-- Switch on of --*/ 
function changeColor() {
  const border = document.getElementsByClassName("Border");
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
  /*-- Border color --*/
  if(element.dataset.bsTheme == "light"){
    for(let i = 0; i < border.length; i++){
      border[i].classList.add("border-dark");
    }
  }
  else{
    for(let i = 0; i < border.length; i++){
      border[i].classList.remove("border-dark");
    }
  }
}