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
/*-- Search bar --*/
function toggleSearch() {
  var searchContainer = document.getElementById("search-container");
  searchContainer.classList.toggle("d-none");
}
function Search() {
  const inputText = document.getElementById("search-input").value.toLowerCase();
  let array = ["Notebooks", "Desktop", "Mouse", "Keyboard"];
  let i = 0;
  while (i < array.length && !array[i].toLowerCase().includes(inputText)) {
    i++;
  }
  if (i < array.length) {
    window.location.href = "Products/" + array[i].toLowerCase() + ".html";
  } else {
    alert("Non abbiamo trovato nessun prodotto");
  }
}


