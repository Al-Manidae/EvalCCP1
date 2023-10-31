// création et remplisage de la nouvelle ligne du tableau
function newElement() {
    var tr = document.createElement("tr");
    var sujet = document.createElement("td");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue); // n'accepte pas les retour à la ligne dans le textarea et j'arrive pas à changer ça.
    sujet.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("subjectList").appendChild(tr);
      var autor = document.createElement("td");
      tr.appendChild(autor);
      let dateMsg = new Date(),
      dateMsgDay = dateMsg.getDate(),
      dateMsgMonth = dateMsg.getMonth()+1,
      dateMsgYear = dateMsg.getFullYear(),
      dateMsgHour = dateMsg.getHours(),
      dateMsgMin = dateMsg.getMinutes();
      var txt = document.createTextNode(firstname+" "+surname+" le "+dateMsgDay+"/"+dateMsgMonth+"/"+dateMsgYear+" ("+dateMsgHour+":"+dateMsgMin+")");
      autor.className = "infoAutor";
      autor.appendChild(txt);
      
      var autor = document.createElement("td");
      var txt = document.createTextNode(inputValue);
      autor.appendChild(txt);
      tr.appendChild(autor);
    }
    document.getElementById("myInput").value = "";
    
  }