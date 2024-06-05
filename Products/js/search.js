/*-- Search bar for Prdoucts --*/
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
    window.location.href = array[i].toLowerCase() + ".html";
  } else {
    alert("Non abbiamo trovato nessun prodotto");
  }
}


