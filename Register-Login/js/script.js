/*-- Login-Register --*/
function sendMail() {
  if (document.getElementById("form2Example11").value != "") {
    alert("Ti abbiamo inviato una mail con la password (non è vero)");
  }
}
function noServer() {
  var email = document.getElementById("form2Example11").value;
  if (email != "" && document.getElementById("form2Example22").value != "" && /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(email)) {
    alert("Il nostro livello di ricchezza è tanto quanto i nostri server (0) e hai perso tempo a registrarti :D");
  }
}
/*-- Search Login  --*/
function SearchForLogin() {
  const inputText = document.getElementById("search-input").value.toLowerCase();
  let array = ["Notebooks", "Desktop", "Mouse", "Keyboard"];
  let i = 0;
  while (i < array.length && !array[i].toLowerCase().includes(inputText)) {
    i++;
  }
  if (i < array.length) {
    window.location.href = "../Products/" + array[i].toLowerCase() + ".html";
  } else {
    alert("Non abbiamo trovato nessun prodotto");
  }
}