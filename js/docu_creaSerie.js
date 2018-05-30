//ONLY WORKS ON MICROSOFT EDGE!!

function viderChamps(){
	var champs = document.getElementsByTagName('input');
	for (let i=0; i<champs.length;  i++){
		champs[i].value = "";
		champs[i].blur();
	}
	//Retrait du focus

	//Champs préremplis
	var champISBN13A = document.getElementById('isbn13a');
	champISBN13A.value= "978";
	var champNbExemplaire = document.getElementById('nbExemplaire');
	champNbExemplaire.value = "30";
	document.getElementById('edition').hidden=true;
	document.getElementById('serie').hidden=true;
	document.getElementById('enregistrement').hidden=true;
}


function verif(evt) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    var accept = '0123456789';
    if (accept.indexOf(String.fromCharCode(keyCode)) >= 0) {
        return true;
    } else {
        return false;
    }
}

function verifierISBN() {
	var isbn13a = document.getElementById('isbn13a').value;
	var isbn13b = document.getElementById('isbn13b').value;
	var isbn13="";

	verifLongueur();

	function verifLongueur(){
	//Check the number of characters
	var longueura = isbn13a.length;
	var longueurb = isbn13b.length;

		if (longueura!==3 || longueurb!==10){
			if (longueura!==3 && longueurb!==10){
				alert("Pas le bon nombre de caractères pour les deux champs")
			} else if (longueurb!==10){
				alert("Le nombre de caractèresB n'est pas égal à 10")
			} else if (longueura!==3){
				alert("Le nombre de caractèresA n'est pas égal à 3")
			}
		} else {
			//alert("Le nombre de caractères est correct")
			verifType();
		}
	}

	//Check if the characters are numbers
	function verifType(){
		if (isNaN(isbn13a) == true && isNaN(isbn13b) == true){
		alert ("A et B ne sont pas des nombres!")
		} else if(isNaN(isbn13a) == true){
			alert("A n'est pas un nombre, veuillez entrer une valeur numérique");
		} else if (isNaN(isbn13b)==true){
			alert("B n'est pas un nombre, veuillez entrer une valeur numérique");
		} else {
			//alert("A et B sont bien des nombres");
			concatISBN();
		}
	}

	//Compare the entered ISBN13 with the data base
	function concatISBN(){
		isbn13 = isbn13a + isbn13b;
		$.getJSON("../json/series.json", function(series) {
            for (let i=0; i<series.length; i++){
            	if (isbn13 == series[i].ISBN13){ 
					//Ici l'ISBN13 existe déjà, il faudra donc récupérer les autres données de l'édition (titre, auteur...)
					document.getElementById('imageCouv').src=series[i].cover;
					document.getElementById('titreSerie').value=series[i].title;
					document.getElementById('auteurSerie').value=series[i].author;
					var numEditeur = series[i].publisher;
					$.getJSON( "../json/editeurs.json", function(editeurs) {
						document.getElementById('editeurSerie').value=editeurs[numEditeur].name;
						document.getElementById('collectionSerie').value=editeurs[numEditeur].collection;
					});
					document.getElementById('codeISBN10').value=series[i].ISBN10;
					document.getElementById('langueSerie').value=series[i].language;
					document.getElementById('nbPages').value=series[i].pages;
					var datepubli = series[i].publishedDate;
					var datee = datepubli.slice(0, 10);
					document.getElementById('datePublication').value=datee;
					document.getElementById('edition').hidden=false;
				} //Dans l'autre cas, il faudra conserver l'ISBN13 pour pouvoir l'enregistrer avec les autres champs
				else{
					var champs = document.getElementsByTagName('input');
					for (let j=2; j<champs.length; j++){
						champs[j].blur();
						document.getElementById('edition').hidden=false;
					}
				}
        	}
        });
	} 
}//End of verifISBN

function verifierEdition(){
	var divEdition = document.getElementById('edition');
	var inputs = divEdition.getElementsByTagName('input');
	var inputCouv = document.getElementById('imageCouv');
	var nbChampsVides=0;
	for (let i=1; i<inputs.length; i++){
		if (inputs[i].value=="" || inputCouv.src==""){
			console.log("Champ vide : "+i);
			nbChampsVides++;
		}
	}
	if (nbChampsVides==0){
		document.getElementById('serie').hidden=false;
		document.getElementById('enregistrement').hidden=false;
	}
	else if (nbChampsVides==1) {
		alert(nbChampsVides+ " champ vide");
	}
	else{
		alert(nbChampsVides+ " champs vides");
	}
}

//-------------------------------------------------------------Autocomplete ISBN13 a et b--------------------------
//Tableaux pour les saisies semi-auto -> ISBN13A

function listerISBN13A(){
	var tab =[];
	$.getJSON( "../json/series.json", function(series) {
		$.each(series, function(key, series) {
			tab.push(series.ISBN13);		
		});
	var tabUniques = [];
	var tri = [];
		for(let i=0; i<tab.length; i++){
			var provisoire= "";
			provisoire += tab[i];
			var pro = provisoire.slice(0, 3);
			tri.push(pro);
			if(tabUniques.indexOf(tri[i]) === -1){
				tabUniques.push(tri[i]);			
			}	
		};
	autocomplete(document.getElementById("isbn13a"), tabUniques);
	});
}

//Tableaux pour les saisies semi-auto -> ISBN13B
function listerISBN13B(){
	var tab =[];
	$.getJSON( "../json/series.json", function(series) {
		$.each(series, function(key, series) {
			tab.push(series.ISBN13);		
		});
	var tabUniques = [];
	var tri = [];
		for(let i=0; i<tab.length; i++){
			var provisoire= "";
			provisoire += tab[i];
			var pro = provisoire.slice(3, 13);
			tri.push(pro);
			if(tabUniques.indexOf(tri[i]) === -1){
				tabUniques.push(tri[i]);			
			}		
		};
	autocomplete(document.getElementById("isbn13b"), tabUniques);
	});
}
//-------------------------------------------------------------------------------------------------------------------

//Tableaux pour les saisies semi-auto -> TITRES
function listerTitres(){
	var tab =[];
	$.getJSON( "../json/series.json", function(series) {
		$.each(series, function(key, series) {
			tab.push(series.title);		});
	var tabUniques = [];
		for(let i=0; i<tab.length; i++){
			if(tabUniques.indexOf(tab[i]) === -1){
				tabUniques.push(tab[i]);			}		};
	autocomplete(document.getElementById("titreSerie"), tabUniques);
	});
}

//Tableaux pour les saisies semi-auto -> AUTEURS
function listerAuteurs(){
	var tab =[];
	$.getJSON( "../json/series.json", function(series) {
		$.each(series, function(key, series) {
			tab.push(series.author);		});
	var tabUniques = [];
		for(let i=0; i<tab.length; i++){
			if(tabUniques.indexOf(tab[i]) === -1){
				tabUniques.push(tab[i]);			}		};
	autocomplete(document.getElementById("auteurSerie"), tabUniques);
	});
}

//Tableaux pour les saisies semi-auto -> EDITEURS
function listerEditeurs(){
	var tab =[];
	$.getJSON( "../json/editeurs.json", function(editeurs) {
		$.each(editeurs, function(key, editeur) {
			tab.push(editeur.name);		});
	var tabUniques = [];
		for(let i=0; i<tab.length; i++){
			if(tabUniques.indexOf(tab[i]) === -1){
				tabUniques.push(tab[i]);			}		};
	autocomplete(document.getElementById("editeurSerie"), tabUniques);
	});
}

//Select -> LANGUES
function listerLangues(){
	var tab =[];
	$.getJSON( "../json/series.json", function( series ) {
	
		$.each( series, function( key, series ) {
			tab.push(series.language);
		});
		var tabUniques = [];
		for(let i=0; i<tab.length; i++){
			if(tabUniques.indexOf(tab[i]) === -1){
				tabUniques.push(tab[i]);			
			}	
		};	
		for(let i=0; i<tabUniques.length; i++){
			$('<option/>',{
				html: tabUniques[i]
			}).appendTo("#langueSerie");
		};
	});
}

//Tableaux pour les saisies semi-auto -> COLLECTIONS
function listerCollections(){
	var tab =[];
	$.getJSON( "../json/editeurs.json", function(editeurs) {
		$.each(editeurs, function(key, editeur) {
			tab.push(editeur.collection[0]);		});
	var tabUniques = [];
		for(let i=0; i<tab.length; i++){
			if(tabUniques.indexOf(tab[i]) === -1){
				tabUniques.push(tab[i]);			}		};
	autocomplete(document.getElementById("collectionSerie"), tabUniques);
	});
}

//Tableaux pour les saisies semi-auto -> DATES PUBLICATION
function listerPublications(){
	var tab =[];
	$.getJSON( "../json/series.json", function(series) {
		$.each(series, function(key, series) {
			tab.push(series.published_date);		});
	var tabUniques = [];
		for(let i=0; i<tab.length; i++){
			if(tabUniques.indexOf(tab[i]) === -1){
				tabUniques.push(tab[i]);			}		};
	autocomplete(document.getElementById("datePublication"), tabUniques);
	});
}

//Tableaux pour les saisies semi-auto -> ISBN10
function listerISBN10(){
	var tab =[];
	$.getJSON( "../json/series.json", function(series) {
		$.each(series, function(key, series) {
			tab.push(series.ISBN10);		});
	var tabUniques = [];
		for(let i=0; i<tab.length; i++){
			if(tabUniques.indexOf(tab[i]) === -1){
				tabUniques.push(tab[i]);			}		};
	autocomplete(document.getElementById("codeISBN10"), tabUniques);
	});
}

//Choix du collège : récuperer le champ dans le compte de la docu, pour l'instant seulement le "colleges[0]"

function ajoutCollege(){
	var nomCollege = [];
	var col = [];
	// Récupération du numéro du collège dans l'utilisateur
	$.getJSON( "../json/utilisateurs.json", function(utilisateurs) {
		let u = [0];// importer le numero utilisateur pour l'affectation du collège------------------------------------------------------------------------ [!]
		col.push(utilisateurs[u].profil[0].college);
		return col;
	});
	// Récupération du nom collège en fonction du numéro récupéré au dessus
	$.getJSON( "../json/colleges.json", function(colleges) {
		let i = col[0];
		nomCollege.push(colleges[i].name);
		var option = document.createElement("option");
		document.getElementById("college").appendChild(option).innerHTML= nomCollege;
	});
	
}

//Status : menu déroulant. (prévoir enregistrement des données).
function status(){

	var choix=document.formulaire.status.selectedIndex;

	switch (choix){
		default : "Exportable";
		break;

		case 0	: "Interne";
		break;
	}
} 

//Create autofill for EDITION fields
function autocomplete(inp, arr) {
		  //two arguments:the text field element and an array of possible autocompleted values:
		  var currentFocus;
		  //execute a function when someone writes in the text field:
		  inp.addEventListener("input", function(e) {
		      var a, b, i, val = this.value;
		      //close any already open lists of autocompleted values
		      closeAllLists();
		      if (!val) { return false;}
		      currentFocus = -1;
		      //create a DIV element that will contain the items (values):
		      a = document.createElement("DIV");
		      a.setAttribute("id", this.id + "autocomplete-list");
		      a.setAttribute("class", "autocomplete-items");
		      //append the DIV element as a child of the autocomplete container:
		      this.parentNode.appendChild(a);
		      //for each item in the array...
		      for (i = 0; i < arr.length; i++) {
		        //check if the item starts with the same letters as the text field value:
		        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
		          //create a DIV element for each matching element:
		          b = document.createElement("DIV");
		          //make the matching letters bold:
		          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
		          b.innerHTML += arr[i].substr(val.length);
		          //insert a input field that will hold the current array item's value:
		          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		          //execute a function when someone clicks on the item value (DIV element):
		          b.addEventListener("click", function(e) {
		              //insert the value for the autocomplete text field
		              inp.value = this.getElementsByTagName("input")[0].value;
		              //close the list of autocompleted values,or any other open lists of autocompleted values:
		              closeAllLists();
		          });
		          a.appendChild(b);
		        }
		      }
		  });
		  //execute a function presses a key on the keyboard:
		  inp.addEventListener("keydown", function(e) {
		      var x = document.getElementById(this.id + "autocomplete-list");
		      if (x) x = x.getElementsByTagName("div");
		      if (e.keyCode == 40) {
		        /*If the arrow DOWN key is pressed,increase the currentFocus variable:*/
		        currentFocus++;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 38) { //up
		        /*If the arrow UP key is pressed,decrease the currentFocus variable:*/
		        currentFocus--;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 13) {
		        /*If the ENTER key is pressed, prevent the form from being submitted,*/
		        e.preventDefault();
		        if (currentFocus > -1) {
		          /*and simulate a click on the "active" item:*/
		          if (x) x[currentFocus].click();
		        }
		      }
		  });
		  function addActive(x) {
		    /*a function to classify an item as "active":*/
		    if (!x) return false;
		    /*start by removing the "active" class on all items:*/
		    removeActive(x);
		    if (currentFocus >= x.length) currentFocus = 0;
		    if (currentFocus < 0) currentFocus = (x.length - 1);
		    /*add class "autocomplete-active":*/
		    x[currentFocus].classList.add("autocomplete-active");
		  }
		  function removeActive(x) {
		    /*a function to remove the "active" class from all autocomplete items:*/
		    for (let i = 0; i < x.length; i++) {
		      x[i].classList.remove("autocomplete-active");
		    }
		  }
		  function closeAllLists(elmnt) {
		    /*close all autocomplete lists in the document,except the one passed as an argument:*/
		    var x = document.getElementsByClassName("autocomplete-items");
		    for (let i = 0; i < x.length; i++) {
		      if (elmnt != x[i] && elmnt != inp) {
		        x[i].parentNode.removeChild(x[i]);
		      }
		    }
		  }
		  /*execute a function when someone clicks in the document:*/
		  document.addEventListener("click", function (e) {
		      closeAllLists(e.target);
		      });
		}