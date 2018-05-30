//------------ Verification des champs pour la connection ------

function verifMail(champ) {

    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}

function verifMdP(champ) {
    if (champ.value.length <
        2 || champ.value.length > 25) {
        surligne(champ, true)
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}

function surligne(champ, erreur) {
    if (erreur) {
        champ.style.backgroundColor = "#fba";
        champ.style.border = "0";
    } else {
        champ.style.backgroundColor = "";
        champ.style.border = "1px solid green";
    }
}

function verifDonnees(f)
{
   var mailOk = verifMail(f.mailConnexion);
   var mdpOk = verifMdP(f.mdpConnexion);

   if(mailOk && mdpOk)
      return true;
   else
   {
      return false;
   }
}

function verifDonneesOnBlur(f) {
    console.log(f);

    var verifOk = (f.name === "mailConnexion")?verifMail(f):verifMdP(f);
    if (verifOk) return true;
}


//------------------ Vérification du Login et MDP de l'utilisateur-------------------

// your form
var form = document.getElementById("login");

// attach event listener
form.addEventListener("submit", functionLog, true);

function functionLog(event) {
    event.preventDefault();

    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    console.log(user);
        prof1.push("mail : "+ user); //envoi le champ dans l'obj "prof1"
    console.log(pass);
        prof1.push("pass : "+ pass); //envoi le champ dans l'obj "prof1"

    console.log(prof1); // affiche obj prof1 dans la console
    const prof = JSON.stringify(prof1);
    // console.log(JSON.parse(prof));
    console.log(prof);

    if (user === 'documentaliste@gmail.com' && pass === '123456789') {

        document.location.href = "user/documentaliste/recherche.html";
        return;
    }

    if (user === 'professeur@gmail.com' && pass === '123456789') {

        document.location.href = "user/prof/recherche.html";
        return;
    }

    if (user === 'admin@gmail.com' && pass === '123456789') {

        document.location.href = "user/admin/accueil.html";

        return;

    }
    else {
         document.getElementById('password').style.backgroundColor = "#fba";
        document.getElementById('password').style.border = "0";

        alert("Mail ou mot de passe incorrect");
        document.getElementById('password').value = "";
    }
};






//------MODAAAAAAAAAAAAAAAAAAAAAAALLLEEE---------









//---------------------ouverture modal ----------------------

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("btnInscription");

// Get the button that closes the modal
var inscrire = document.getElementById("btnInscrire");

// When the user clicks the button, open the modal
btn.onclick = function() {
   event.preventDefault();  //annule l'alerte mdp incorrect
   modal.style.display = "block"; //ouvre la fenêtre modale
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    console.log("click sur modal")
}


//---------------------INSCRIPTION - SOUMETTRE CHAMPS ET VERIF BDD----------------------


//----------- vérif champs inscription modal


function verifPrenom(champ) {
    if (champ.value.length <
        2 || champ.value.length > 25) {
        surligne(champ, true)
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
function verifNom(champ) {
    if (champ.value.length <
        2 || champ.value.length > 25) {
        surligne(champ, true)
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
function verifCollege(champ) {
    if (champ.value.length <
        2 || champ.value.length > 25) {
        surligne(champ, true)
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
function verifMail(champ) {

    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
function verifPseudo(champ) {
    if (champ.value.length <
        2 || champ.value.length > 25) {
        surligne(champ, true)
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
function verifMdPInscrip(champ) {
    if (champ.value.length <
        2 || champ.value.length > 25) {
        surligne(champ, true)
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}

function surligne(champ, erreur) {
    if (erreur) {
        champ.style.backgroundColor = "#fba";
        champ.style.border = "0";
    } else {
        champ.style.backgroundColor = "";
        champ.style.border = "1px solid green";
    }
}

//------------------ Vérification INSCRIP des infos de l'utilisateur-------------------
function verifDonnees(f){

   var prenomOk = verifPrenom(f.prenom);
   var nomOk = verifNom(f.nom);
   var collegeOk = verifCollege(f.college);
   var mailOk = verifMail(f.mail);
   var pseudoOk = verifPseudo(f.pseudo);
   var passOk = verifPass(f.pass);

   if(pseudoOk && mdpOk)
      return true;
   else
   {
      return false;
   }
}

function verifDonneesOnBlur(f) {
    console.log(f);

    var verifOk = (f.name === "mailConnexion")?verifMail(f):verifMdP(f);
    if (verifOk) return true;
}


// your form
var form = document.getElementById("login");

// attach event listener
form.addEventListener("submit", functionLog, true);


//--------------------- ENVOI DES INFOS de l'Utilisateur ---------------------


// When the user clicks on btnInscrire , close the modal
close.onclick = function() {
      //event.preventDefault();

      // envoyer champs d'inscription...
      function functionInscrip(event) {
          // event.preventDefault();

          var prenom = document.getElementById('prenom').value;
          var nom = document.getElementById('nom').value;
          var college = document.getElementById('college').value;
          var mail = document.getElementById('mail').value;
          var pseudo = document.getElementById('pseudo').value;
          var pass = document.getElementById('password').value;

          console.log(prenom);
              prof1.push("prenom "+ prenom); //envoi le champ dans l'obj "prof1"
          console.log(nom);
              prof1.push("nom "+ nom); //envoi le champ dans l'obj "prof1"
          console.log(college);
              prof1.push("college "+ college); //envoi le champ dans l'obj "prof1"
          console.log(mail);
              prof1.push("mail "+ mail); //envoi le champ dans l'obj "prof1"
          console.log(pseudo);
              prof1.push("pseudo "+ pseudo); //envoi le champ dans l'obj "prof1"
          console.log(pass);
              prof1.push("password "+ pass); //envoi le champ dans l'obj "prof1"


          console.log(prof1); // affiche obj prof1 dans la console
          const prof = JSON.stringify(prof1);
          // console.log(JSON.parse(prof));
          console.log(prof);

      };
};

//----------- Message Confirmation inscrip + CLOSE MODAL -----------

inscrire.onclick = function(){
   console.log("inscrire")
/*    // crée un nouvel élément div
    var confirm = document.createElement("div");

    // ajoute le noeud texte au nouveau div créé
    var message = document.createTextNode("Votre demande d'inscritption a bien été soumise.");

    confirm.appendChild(message);
    modal.appendChild(confirm);

    modal.innerHTML(confirm);*/

    //document.getElementById("login").innerHTML = "Votre demande d'inscritption a bien été soumise."
    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //    if (event.target == modal) {
    //        modal.style.display = "none";
    //    }
    //    console.log("click sur modal")
    // }

    alert("Votre demande d'inscritption a bien été soumise.")
modal.style.display = "none";

};
