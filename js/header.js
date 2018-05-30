/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 //--------Récupération de la variable session-----

 var sessionProfile = sessionStorage.getItem('user');

 
/*-------------------Création du header--------------------*/
var header = document.createElement('header');
    header.id = "header";
document.body.appendChild(header); 

// Menu ========================================================================
var nav= document.createElement('nav');
    nav.className = "main";
    nav.id = "mainMenu";
    // Logo ====================================================================
    var divTitre = document.createElement('div');
    var logo= document.createElement('a');
        logo.id = "lienLogo";
        logo.setAttribute('href', 'recherche.html');
        logo.setAttribute('title', 'Accueil');
        var imgLogo= document.createElement('img');
            imgLogo.setAttribute('src', '../img/coLibris-header.png');
        logo.appendChild(imgLogo);
    divTitre.appendChild(logo);
    // Titre 
    var titre = document.createElement('h1');
        titre.textContent = document.title;
    divTitre.appendChild(titre);
    nav.appendChild(divTitre);

    switch (sessionProfile) {
        case 'documentaliste':
         // Icones ==================================================================
    var ul= document.createElement('ul');
    // Icon n°1
    var li1 = document.createElement('li');
        var a1 = document.createElement('a');
            a1.setAttribute('href', 'recherche.html');
            a1.setAttribute('title', "Chercher une série dans l'application");
            var icon1= document.createElement('i');
                icon1.className= "fas fa-search";
            a1.appendChild(icon1);
        li1.appendChild(a1);
    ul.appendChild(li1);
    // Icon n°2
    var li2 = document.createElement('li');
        var a2 = document.createElement('a');
            a2.setAttribute('href', 'docu_gestDemandes.html');
            a2.setAttribute('title', "Gestion des demandes");
            var icon2= document.createElement('i');
                icon2.className= "fas fa-comments";
            a2.appendChild(icon2);
        li2.appendChild(a2);
    ul.appendChild(li2);
    // Icon n°3
    var li3 = document.createElement('li');
        var a3 = document.createElement('a');
            a3.setAttribute('href', 'docu_creaSerie.html');
            a3.setAttribute('title', "Créer une série");
            var icon3= document.createElement('i');
                icon3.className= "fas fa-plus-square";
            a3.appendChild(icon3);
        li3.appendChild(a3);
    ul.appendChild(li3);
    // Icon n°4
    var li4 = document.createElement('li');
        var a4 = document.createElement('a');
            a4.setAttribute('href', 'docu_tabBordStatut.html');
            a4.setAttribute('title', "Tableau de bord - Statut");
            var icon4= document.createElement('i');
                icon4.className= "fas fa-book";
            a4.appendChild(icon4);
        li4.appendChild(a4);
    ul.appendChild(li4);
    // Icon n°5
    var li5 = document.createElement('li');
        var a5 = document.createElement('a');
            a5.setAttribute('href', 'parametres.html');
            a5.setAttribute('title', "Paramètres");
            var icon5= document.createElement('i');
                icon5.className= "fas fa-cog";
            a5.appendChild(icon5);
        li5.appendChild(a5);
    ul.appendChild(li5);
    // Icon n°6
    var li6 = document.createElement('li');
        var a6 = document.createElement('a');
            a6.setAttribute('href', '../index.html');
            a6.setAttribute('title', "Déconnexion");
            var icon6= document.createElement('i');
                icon6.className= "fas fa-sign-out-alt";
            a6.appendChild(icon6);
        li6.appendChild(a6);
    ul.appendChild(li6);
    
nav.appendChild(ul);

header.appendChild(nav);

          break;
        case 'admin':
        // Icones ==================================================================
    var ul= document.createElement('ul');
    // Icon n°1 admin
    var li1 = document.createElement('li');
        var a1 = document.createElement('a');
            a1.setAttribute('href', 'admin_stats.html');
            a1.setAttribute('title', "Statistiques");
            var icon1= document.createElement('i');
                icon1.className= "fas fa-chart-line";
            a1.appendChild(icon1);
        li1.appendChild(a1);
    ul.appendChild(li1);
    // Icon n°2 admin
    var li2 = document.createElement('li');
        var a2 = document.createElement('a');
            a2.setAttribute('href', 'admin_gestUtilisateurs.html');
            a2.setAttribute('title', "Gestion des utilisateurs");
            var icon2= document.createElement('i');
                icon2.className= "fas fa-users";
            a2.appendChild(icon2);
        li2.appendChild(a2);
    ul.appendChild(li2);
    // Icon n°3 admin
    var li3 = document.createElement('li');
        var a3 = document.createElement('a');
            a3.setAttribute('href', 'admin_creaUtilisateur.html');
            a3.setAttribute('title', "Créer un utilisateur");
            var icon3= document.createElement('i');
                icon3.className= "fas fa-user-plus";
            a3.appendChild(icon3);
        li3.appendChild(a3);
    ul.appendChild(li3);
    // Icon n°4
    var li5 = document.createElement('li');
        var a5 = document.createElement('a');
            a5.setAttribute('href', 'parametres.html');
            a5.setAttribute('title', "Paramètres");
            var icon5= document.createElement('i');
                icon5.className= "fas fa-cog";
            a5.appendChild(icon5);
        li5.appendChild(a5);
    ul.appendChild(li5);
    // Icon n°5
    var li6 = document.createElement('li');
        var a6 = document.createElement('a');
            a6.setAttribute('href', '../index.html');
            a6.setAttribute('title', "Déconnexion");
            var icon6= document.createElement('i');
                icon6.className= "fas fa-sign-out-alt";
            a6.appendChild(icon6);
        li6.appendChild(a6);
    ul.appendChild(li6);
    
nav.appendChild(ul);

header.appendChild(nav);
          break;
      }


   
