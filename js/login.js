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
    if (champ.value.length < 2 || champ.value.length > 25) {
        surligne(champ, true);
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

function verifDonnees(f) {
   var mailOk = verifMail(f.mailConnexion);
   var mdpOk = verifMdP(f.mdpConnexion);

   if (mailOk && mdpOk) return true;
   else return false;
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
    console.log(pass);


    if (user === 'documentaliste@gmail.com' && pass === '123') {
        //Création  de la variable session  //A modifier quand on aura vu le coté serveur
        sessionStorage.setItem('user', 'documentaliste');
        document.location.href = "html/recherche.html";
        return;
    }

    if (user === 'professeur@gmail.com' && pass === '123') {
        //Création  de la variable session  //A modifier quand on aura vu le coté serveur
        sessionStorage.setItem('user', 'professeur');
        document.location.href = "html/recherche.html";
        return;
    }

    if (user === 'admin@gmail.com' && pass === '123') {
        //Création  de la variable session  //A modifier quand on aura vu le coté serveur
        sessionStorage.setItem('user', 'admin');
        document.location.href = "html/admin_stats.html";
    } 
    else {
        document.getElementById('password').style.backgroundColor = "#fba";
        document.getElementById('password').style.border = "0";
        
        alert("Mail ou mot de passe incorrect");
        document.getElementById('password').value = "";
    }
};
