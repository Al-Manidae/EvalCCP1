// Create a new list item when clicking on the "Add" button
function newElement() {
  var tr = document.createElement("tr");
  var sujet = document.createElement("td");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  sujet.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("subjectList").appendChild(tr);
    var autor = document.createElement("td");
    tr.appendChild(autor);
    var txt = document.createTextNode(inputValue);
    autor.appendChild(txt);
    
    var autor = document.createElement("td");
    let dateMsg = new Date(),
    dateMsgDay = dateMsg.getDate(),
    dateMsgMonth = dateMsg.getMonth()+1,
    dateMsgYear = dateMsg.getFullYear();
    var txt = document.createTextNode("Créé le "+dateMsgDay+"/"+dateMsgMonth+"/"+dateMsgYear+" par "+firstname+" "+surname);
    autor.className = "infoAutor";
    autor.appendChild(txt);
    tr.appendChild(autor);
  }
  document.getElementById("myInput").value = "";  
}

// lien vers sujets
var list = document.querySelector('tr');
list.addEventListener('click', function(ev) {
  window.location.href = "discution.html";
}, false);