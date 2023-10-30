// Create a "close" button and append it to each list item
var myNodelist = document.getElementById("subjectList").getElementsByTagName("tr");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var autor = document.createElement("td");
    let dateMsg = new Date(),
    dateMsgDay = dateMsg.getDate(),
    dateMsgMonth = dateMsg.getMonth()+1,
    dateMsgYear = dateMsg.getFullYear();
    let surname = localStorage.getItem('surname'),
        firstname = localStorage.getItem('firstname');
    var txt = document.createTextNode("Créé le "+dateMsgDay+"/"+dateMsgMonth+"/"+dateMsgYear+" par "+firstname+" "+surname);
    autor.className = "infoAutor";
    autor.appendChild(txt);
    myNodelist[i].appendChild(autor);
}

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
    var txt = document.createTextNode(inputValue);
    autor.appendChild(txt);
    myNodelist[i].appendChild(autor);
    
    var autor = document.createElement("td");
    let dateMsg = new Date(),
    dateMsgDay = dateMsg.getDate(),
    dateMsgMonth = dateMsg.getMonth()+1,
    dateMsgYear = dateMsg.getFullYear();
    var txt = document.createTextNode("Créé le "+dateMsgDay+"/"+dateMsgMonth+"/"+dateMsgYear+" par "+firstname+" "+surname);
    autor.className = "infoAutor";
    autor.appendChild(txt);
    myNodelist[i].appendChild(autor);
  }
  document.getElementById("myInput").value = "";
  
}