var base = document.getElementById("base");

var btnDocu = document.getElementById("btnDocu");
    btnDocu.addEventListener("click", verifCreaDocu);

var btnProf = document.getElementById("btnProf");
    btnProf.addEventListener("click", verifCreaProf);
    
var btnAdmin = document.getElementById("btnAdmin");
    btnAdmin.addEventListener("click", verifCreaAdmin);

    
/* documentaliste =========================================================== */

function verifCreaDocu() {
    if (!document.getElementById('tabDocu')) {
        if (document.getElementById('tabProf')) {
            base.removeChild(document.querySelector('.tableau'));
            btnProf.className  = "btnType";
        }
        if (document.getElementById('tabAdmin')) {
            base.removeChild(document.querySelector('.tableau'));
            btnAdmin.className = "btnType";
        }
        return creaTabDocu();
    } else {
        base.removeChild(document.querySelector('.tableau'));
        btnDocu.className = "btnType";
    }
}

function creaTabDocu() {
    console.log("Creation tab Prof");
    btnDocu.className = "btnType btnTypeSelected";

    let $section3 = $('<section/>', {class: "tableau"});
    
        let $tableIntitule = $('<div/>', {class: "ligneTab headTab", id: "tabDocu"});
            $('<p/>', {class: "nomUser",     text: "Nom"}).appendTo($tableIntitule);
            $('<p/>', {class: "prenomUser",  text: "Prénom"}).appendTo($tableIntitule);
            $('<p/>', {class: "emailUser",   text: "Courriel"}).appendTo($tableIntitule);
            $('<p/>', {class: "collegeUser", text: "Collège de référence"}).appendTo($tableIntitule);
            $('<p/>', {class: "actionUser",  text: "Action"}).appendTo($tableIntitule);
            $tableIntitule.appendTo($section3);
            
        let $divContener = $('<div/>', {id: "contenerResultat"});
            $divContener.append(afficherLigneDocu('1', 'Dufault', 'Jean-Pierre', 'jpp-dufault@education-national.fr', 'Simin Palay - Lescar', '5132695', '0559350036', 'jpp-dufault@education-national.fr'));
            $divContener.append(afficherLigneDocu('2', 'Marin', 'Paul', 'paul-marin@education-national.fr', 'Calandreta - Pau', '5589436', '0559354456', 'paul-marin@education-national.fr'));
            $divContener.append(afficherLigneDocu('3', 'Pontier', 'Marcel', 'marcel-pontier@education-national.fr', "Jeanne d'Albret - Pau", '5278436', '0559357836', 'marcel-pontier@education-national.fr'));
            $divContener.append(afficherLigneDocu('4', 'Kaboli', 'Chantal', 'kaboli-chantal@education-national.fr', "Bois d'amour - Billère", '5879236', '0559359921', 'kaboli-chantal@education-national.fr'));
            $divContener.appendTo($section3);
            
        $section3.appendTo('#base');
}

function afficherLigneDocu(id, nom, prenom, email, college) {

    function stopEvent(evt) { evt.stopPropagation(); }

    let $divContenerUser = $('<div/>', {id: "divContenerUser", class: "divFermee"});

        let $divContenu = $('<div/>', {id: "divContenu" + id, class: "ligneTab avec-border"});
            $divContenu.append($('<p/>', {class: "nomUser",    text: nom}));       // Nom
            $divContenu.append($('<p/>', {class: "prenomUser", text: prenom}));    // Prénom
            $divContenu.append($('<p/>', {class: "emailUser",  text: email}));     // Courriel
            $divContenu.append($('<p/>', {class: "collegeUser",text: college}));   // Collège

            let $pLien = $('<p/>', {class: "actionUser"});
                let $liste = $('<ul/>');
                    // Modifier
                    $liste.append($('<li/>').append($('<i/>', {
                        id: "btnModif" + id,
                        class: "fas fa-edit",
                        title: "Modifier"
                        })));
                    // Supprimer
                    $liste.append($('<li/>').append($('<i/>', {
                        id: "btnSuppr" + id,
                        class: "fas fa-minus-square",
                        title: "Supprimer"
                        })));
                    // Dérouler
                    $liste.append($('<li/>').append($('<i/>', {
                        id: "fleche" + id,
                        class: "fas fa-angle-down",
                        title: "Dérouler"
                        })));
                $pLien.append($liste);

                $pLien.appendTo($divContenu);
            $divContenu.appendTo($divContenerUser);
   
    $('.actionUser li' ).click(updateDocumentaliste);
    $('i[title="Supprimer"]').click(deleteDocumentaliste);
    $('i[title="Dérouler"]' ).click(updateDocumentaliste);

    function boutonDocumentaliste() {
//        console.log("boutonDocu");
//        var divContenuDynamique = document.getElementById('divContenerUser' + id);
//        var borderDiv = document.getElementById('divContenu' + id);
//        var flecheBas = document.createElement('i');
//            flecheBas.id = "fleche" + id;
//
//
//        var nombreAngleUp = document.getElementsByClassName("fa-angle-up").length;
//
//        if (nombreAngleUp === 0) {
//
//            borderDiv.className = "ligneTab sans-border";
//            flecheBas.className = "fas fa-angle-down";
//            divContenuDynamique.className = "divOuverte";
//
//            var divDerouler = document.createElement("div");
//            divDerouler.addEventListener("click", stopEvent);
//            divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
//            divDerouler.id = "deroulerBoutonAction" + id;
//            divContenuDynamique.appendChild(divDerouler);
//
//            var divBtnModifSupp = document.createElement("div");
//            divBtnModifSupp.className = "boutonModifSupp";
//            divBtnModifSupp.id = 'boutonModifSupp' + id;
//            divDerouler.appendChild(divBtnModifSupp);
//
//            var boutonModifier = document.createElement("a");
//            boutonModifier.className = "btn-updatedelete";
//            divBtnModifSupp.appendChild(boutonModifier);
//            boutonModifier.href = "#";
//            boutonModifier.addEventListener("click", updateDocumentaliste);
//            var TexteBoutonModifier = document.createTextNode("Modifier");
//            boutonModifier.appendChild(TexteBoutonModifier);
//            divBtnModifSupp.appendChild(boutonModifier);
//
//            var boutonSupprimer = document.createElement("a");
//            boutonSupprimer.className = "btn-updatedelete btn-delete";
//            divBtnModifSupp.appendChild(boutonSupprimer);
//            boutonSupprimer.href = "#";
//            boutonSupprimer.addEventListener("click", deleteDocumentaliste);
//            var TexteBoutonSupprimer = document.createTextNode("Supprimer");
//            boutonSupprimer.appendChild(TexteBoutonSupprimer);
//            divBtnModifSupp.appendChild(boutonSupprimer);
//
//            return divContenuDynamique;
//
//        } else {
//
//            var divOuverte = document.querySelector(".divOuverte");
//            var flecheBasDivOuverte = document.querySelector(".fa-angle-up");
//            var borderDivOuverte = document.querySelector(".sans-border");
//
//            if (document.getElementById('deroulerBoutonAction' + id)) {
//                divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
//                flecheBas.className = "fas fa-angle-down";
//                borderDiv.className = "ligneTab avec-border";
//                divOuverte.className = "divFermee";
//                return divContenuDynamique;
//
//            } else if (document.getElementById('divUpdateUser' + id)) {
//                divContenuDynamique.removeChild(document.querySelector('.divFormUpdate'));
//                flecheBas.className = "fas fa-angle-down";
//                borderDiv.className = "ligneTab avec-border";
//                divOuverte.className = "divFermee";
//                return divContenuDynamique;
//            }
//
//            if (document.querySelector(".divOuverte")) {
//
//                if (document.querySelector('.divFormUpdate')) {
//                    divOuverte.removeChild(document.querySelector('.divFormUpdate'));
//                    flecheBas.className = "fas fa-angle-down";
//                    borderDivOuverte.className = "ligneTab avec-border";
//                    divContenuDynamique.className = "divOuverte";
//                    divOuverte.className = "divFermee";
//
//                    borderDiv.className = "ligneTab sans-border";
//                    flecheBas.className = "fas fa-angle-up";
//
//                    var divDerouler = document.createElement("div");
//                        divDerouler.addEventListener("click", stopEvent);
//                        divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
//                        divDerouler.id = "deroulerBoutonAction" + id;
//                    divContenuDynamique.appendChild(divDerouler);
//
//                    var divBtnModifSupp = document.createElement("div");
//                    divBtnModifSupp.className = "boutonModifSupp";
//                    divBtnModifSupp.id = 'boutonModifSupp' + id;
//                    divDerouler.appendChild(divBtnModifSupp);
//
//                    var boutonModifier = document.createElement("a");
//                    boutonModifier.className = "btn-updatedelete";
//                    divBtnModifSupp.appendChild(boutonModifier);
//                    boutonModifier.href = "#";
//                    boutonModifier.addEventListener("click", updateDocumentaliste);
//                    var TexteBoutonModifier = document.createTextNode("Modifier");
//                    boutonModifier.appendChild(TexteBoutonModifier);
//                    divBtnModifSupp.appendChild(boutonModifier);
//
//                    var boutonSupprimer = document.createElement("a");
//                    boutonSupprimer.className = "btn-updatedelete btn-delete";
//                    divBtnModifSupp.appendChild(boutonSupprimer);
//                    boutonSupprimer.href = "#";
//                    boutonSupprimer.addEventListener("click", deleteDocumentaliste);
//                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
//                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
//                    divBtnModifSupp.appendChild(boutonSupprimer);
//
//                    return divContenuDynamique;
//
//                } else {
//                    flecheBas.className = "fas fa-angle-down";
//                    borderDivOuverte.className = "ligneTab avec-border";
//                    divOuverte.removeChild(document.querySelector(".divAngle-up"));
//                    divContenuDynamique.className = "divOuverte";
//                    divOuverte.className = "divFermee";
//
//                    borderDiv.className = "ligneTab sans-border";
//                    flecheBas.className = "fas fa-angle-up";
//
//                    var divDerouler = document.createElement("div");
//                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
//                    divDerouler.addEventListener("click", stopEvent);
//                    divDerouler.id = "deroulerBoutonAction" + id;
//                    divContenuDynamique.appendChild(divDerouler);
//
//                    var divBtnModifSupp = document.createElement("div");
//                    divBtnModifSupp.className = "boutonModifSupp";
//                    divBtnModifSupp.id = 'boutonModifSupp' + id;
//                    divDerouler.appendChild(divBtnModifSupp);
//
//                    var boutonModifier = document.createElement("a");
//                    boutonModifier.className = "btn-updatedelete";
//                    divBtnModifSupp.appendChild(boutonModifier);
//                    boutonModifier.href = "#";
//                    boutonModifier.addEventListener("click", updateDocumentaliste);
//                    var TexteBoutonModifier = document.createTextNode("Modifier");
//                    boutonModifier.appendChild(TexteBoutonModifier);
//                    divBtnModifSupp.appendChild(boutonModifier);
//
//                    var boutonSupprimer = document.createElement("a");
//                    boutonSupprimer.className = "btn-updatedelete btn-delete";
//                    divBtnModifSupp.appendChild(boutonSupprimer);
//                    boutonSupprimer.href = "#";
//                    boutonSupprimer.addEventListener("click", deleteDocumentaliste);
//                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
//                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
//                    divBtnModifSupp.appendChild(boutonSupprimer);
//
//                    return divContenuDynamique;
//
//                }
//            }
//        }
    }// Fin boutonDocu

    function updateDocumentaliste() {
        console.log("Modif docu");

        var divContenuDynamique = document.getElementById('divContenerUser' + id);
        var borderDiv = document.getElementById('divContenu' + id);

//        divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
//        borderDiv.className = "ligneTab sans-border";
//
//        var divPrincipaleForm = document.createElement("div");
//        divPrincipaleForm.id = "divUpdateUser" + id;
//        divPrincipaleForm.className = "divFormUpdate avec-border";
//        divContenuDynamique.appendChild(divPrincipaleForm);
//
//        var formUpdate = document.createElement("form");
//        formUpdate.addEventListener("click", stopEvent);
//        formUpdate.className = "formUpdate";
//        divPrincipaleForm.appendChild(formUpdate);
//
//        var divInfo = document.createElement('div');
//        divInfo.className = "divInfo"
//        formUpdate.appendChild(divInfo);
//
//        var titre1Form = document.createElement("h3");
//        var textTitre1Form = document.createTextNode("Information générale :");
//        titre1Form.appendChild(textTitre1Form);
//        divInfo.appendChild(titre1Form);
//
//        var divContenu1 = document.createElement("div");
//        divContenu1.className = "divFormContenu";
//        divInfo.appendChild(divContenu1);
//
//        var inputNom = document.createElement("input");
//        inputNom.className = "policeForm taille1Form";
//        inputNom.type = "text";
//        inputNom.name = "nomUser";
//        inputNom.placeholder = "Nom utilistateur";
//        inputNom.value = nom;
//        divContenu1.appendChild(inputNom);
//
//        var inputPrenom = document.createElement("input");
//        inputPrenom.className = "policeForm taille1Form";
//        inputPrenom.type = "text";
//        inputPrenom.name = "prenomUser";
//        inputPrenom.placeholder = "Prenom utilistateur";
//        inputPrenom.value = prenom;
//        divContenu1.appendChild(inputPrenom);
//
//        var inputEmail = document.createElement("input");
//        inputEmail.className = "policeForm taille2Form";
//        inputEmail.type = "email";
//        inputEmail.name = "emailUser";
//        inputEmail.placeholder = "Email de contact";
//        inputEmail.value = email;
//        divContenu1.appendChild(inputEmail);
//
//        var divContenu2 = document.createElement("div");
//        divContenu2.className = "divFormContenu";
//        divInfo.appendChild(divContenu2);
//
//        var inputCodeEtab = document.createElement("input");
//        inputCodeEtab.className = "policeForm taille1Form";
//        inputCodeEtab.type = "text";
//        inputCodeEtab.name = "codeEtablissement";
//        inputCodeEtab.placeholder = "Code etablissement";
//        inputCodeEtab.value = codeEtab;
//        divContenu2.appendChild(inputCodeEtab);
//
//        var inputTel = document.createElement("input");
//        inputTel.className = "policeForm taille1Form";
//        inputTel.type = "tel";
//        inputTel.name = "telUser";
//        inputTel.placeholder = "Telephone de contact";
//        inputTel.value = tel;
//        divContenu2.appendChild(inputTel);
//
//        var selectCollege = document.createElement("select");
//        selectCollege.className = "policeForm taille3form";
//        selectCollege.name = "selectCollege";
//        divContenu2.appendChild(selectCollege);
//        var option1 = document.createElement("option");
//        selectCollege.appendChild(option1);
//        var textOption1 = document.createTextNode("- Choisissez un collège -")
//        option1.appendChild(textOption1);
//        var option2 = document.createElement("option");
//        selectCollege.appendChild(option2);
//        var textOption2 = document.createTextNode("Calandreta - Pau")
//        option2.appendChild(textOption2);
//        var option3 = document.createElement("option");
//        selectCollege.appendChild(option3);
//        var textOption3 = document.createTextNode("Jeanne d'Albret - Pau")
//        option3.appendChild(textOption3);
//        var option4 = document.createElement("option");
//        selectCollege.appendChild(option4);
//        var textOption4 = document.createTextNode("Bois d'amour - Billère")
//        option4.appendChild(textOption4);
//        var option5 = document.createElement("option");
//        selectCollege.appendChild(option5);
//        var textOption5 = document.createTextNode("Simin Palay - Lescar")
//        option5.appendChild(textOption5);
//
//        var titre2Form = document.createElement("h3");
//        var textTitre2Form = document.createTextNode("Information de connexion :");
//        titre2Form.appendChild(textTitre2Form);
//        formUpdate.appendChild(titre2Form);
//
//        var divContenu3 = document.createElement("div");
//        divContenu3.className = "divFormContenu";
//        formUpdate.appendChild(divContenu3);
//
//        var inputIdentifiant = document.createElement("input");
//        inputIdentifiant.className = "policeForm taille2Form";
//        inputIdentifiant.type = "text";
//        inputIdentifiant.name = "identifiant";
//        inputIdentifiant.placeholder = "Identifiant";
//        inputIdentifiant.value = identifiant;
//        divContenu3.appendChild(inputIdentifiant);
//
//        var inputMdp = document.createElement("input");
//        inputMdp.className = "policeForm taille1Form";
//        inputMdp.type = "password";
//        inputMdp.name = "motDePasse";
//        inputMdp.placeholder = "Mot de passe";
//        divContenu3.appendChild(inputMdp);
//
//        var inputMdp2 = document.createElement("input");
//        inputMdp2.className = "policeForm taille1Form";
//        inputMdp2.type = "password";
//        inputMdp2.name = "verifMotDePasse";
//        inputMdp2.placeholder = "Confirmation mot de passe";
//        divContenu3.appendChild(inputMdp2);
//
//        var divContenu4 = document.createElement("div");
//        divContenu4.className = "divFormBtn";
//        formUpdate.appendChild(divContenu4);
//
//        var boutonEnregistrer = document.createElement("button");
//        boutonEnregistrer.className = "btn-modifier";
//        boutonEnregistrer.type = "submit";
//        boutonEnregistrer.name = "modifier";
//        boutonEnregistrer.value = "modifier";
//        var textBouton = document.createTextNode("Enregistrer");
//        boutonEnregistrer.appendChild(textBouton);
//        divContenu4.appendChild(boutonEnregistrer);
    }// Fin updateDocu

    function deleteDocumentaliste() {
                console.log("Supprim docu");


        var articleouvert = document.getElementById("base");

        var divBackgroundPop = document.createElement("div");
        divBackgroundPop.addEventListener("click", fermerContenu);
        divBackgroundPop.className = "backgroundPop-up";
        articleouvert.appendChild(divBackgroundPop);

        var divPop = document.createElement("div");
        divPop.addEventListener("click", stopEvent);
        divPop.className = "pop-up";
        divBackgroundPop.appendChild(divPop);

        var pDivPop = document.createElement("p");
        divPop.appendChild(pDivPop);
        var textPop = document.createTextNode("Êtes-vous sûr de vouloir supprimer " + nom + (" ") + prenom + " de la liste des documentalistes?");
        pDivPop.appendChild(textPop);

        var divBoutonPop = document.createElement("div");
        divBoutonPop.addEventListener("click", stopEvent);
        divBoutonPop.className = "boutonPop-up";
        divPop.appendChild(divBoutonPop);

        var btnConfirmer = document.createElement("a");
        var textBtnConfirmer = document.createTextNode("Confirmer");
        btnConfirmer.addEventListener("click", evtBoutonConfirmer);
        btnConfirmer.href = "#";
        btnConfirmer.appendChild(textBtnConfirmer);
        btnConfirmer.className = "boutonConfirmerAnnuler backBlue";
        divBoutonPop.appendChild(btnConfirmer);

        var btnAnnuler = document.createElement("a");
        var textBtnAnnuler = document.createTextNode("Annuler");
        btnAnnuler.addEventListener("click", evtBoutonAnnuler);
        btnAnnuler.href = "#";
        btnAnnuler.appendChild(textBtnAnnuler);
        btnAnnuler.className = "boutonConfirmerAnnuler";
        divBoutonPop.appendChild(btnAnnuler);

        function evtBoutonConfirmer() {
            var divResultat = document.getElementById("contenerResultat");

            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
            divResultat.removeChild(document.querySelector(".divOuverte"));
            /* ajouter fonction pour supprimer de la base de données */
        }

        function evtBoutonAnnuler() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function fermerContenu() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function stopEvent(evt) {
            evt.stopPropagation();
        }

    }// Fin deleteDocu----------------
    
        return $divContenerUser;

}


/* enseignant =============================================================== */

function verifCreaProf() {
    if (!document.getElementById('tabProf')) {
        if (document.getElementById('tabDocu')) {
            var baseArticle = document.getElementById("base");
                baseArticle.removeChild(document.querySelector('.tableau'));
                btnDocu.className = "btnType";
        }
        if (document.getElementById('tabAdmin')) {
            var baseArticle = document.getElementById("base");
                baseArticle.removeChild(document.querySelector('.tableau'));
                btnAdmin.className = "btnType";
        }
        return createTableEnseignant();
    } else {
        var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.tableau'));
            btnProf.className = "btnType";
    }
}

function createTableEnseignant() {
    btnProf.className = "btnType btnTypeSelected";

    var base = document.getElementById("base");

    var section3 = document.createElement('section');
    section3.className = "tableau";
    base.appendChild(section3);

    var tableIntitule = document.createElement('div');
    tableIntitule.className = "ligneTab headTab";
    tableIntitule.id = "tabProf";
    section3.appendChild(tableIntitule);

    var divContener = document.createElement('div');
    divContener.id = "contenerResultat";
    section3.appendChild(divContener);

    var pNom = document.createElement('p');
    pNom.className = "nomUser";
    var textPNom = document.createTextNode("Nom utilisateur");
    pNom.appendChild(textPNom);
    tableIntitule.appendChild(pNom);

    var pPrenom = document.createElement('p');
    pPrenom.className = "prenomUser";
    var textPPrenom = document.createTextNode("Prénom utilisateur");
    pPrenom.appendChild(textPPrenom);
    tableIntitule.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    pEmail.className = "emailUser";
    var textPEmail = document.createTextNode("Email de contact");
    pEmail.appendChild(textPEmail);
    tableIntitule.appendChild(pEmail);

    var pCollege = document.createElement('p');
    pCollege.className = "collegeUser";
    var textPCollege = document.createTextNode("Collège de référence");
    pCollege.appendChild(textPCollege);
    tableIntitule.appendChild(pCollege);

    var pAction = document.createElement('p');
    pAction.className = "actionUser";
    var textPAction = document.createTextNode("Action");
    pAction.appendChild(textPAction);
    tableIntitule.appendChild(pAction);

    var perso1 = newFicheEnseignant('1', 'Bilow', 'Jacques', 'jacques-bilow@education-national.fr', "Jeanne d'Albret - Pau", '0559350036', 'jacques-bilow@education-national.fr');
    divContener.appendChild(perso1);

    var perso2 = newFicheEnseignant('2', 'Pitch', 'Marion', 'marion-pitch@education-national.fr', "Bois d'amour - Billère", '0559350489', 'marion-pitch@education-national.fr');
    divContener.appendChild(perso2);

    var perso3 = newFicheEnseignant('3', 'Mouchou', 'Claire', 'claire-mouchou@education-national.fr', "Simin Palay - Lescar", '0559357833', 'claire-mouchou@education-national.fr');
    divContener.appendChild(perso3);

    var perso4 = newFicheEnseignant('4', 'Georgio', 'Yann', 'georgio-yann@education-national.fr', "Calandreta - Pau", '0559461897', 'georgio-yann@education-national.fr');
    divContener.appendChild(perso4);

    var perso5 = newFicheEnseignant('5', 'Albertini', 'Hayden', 'hayden-albertini@education-national.fr', "Nationalisé - Arzacq-Arraziguet", '0559327456', 'hayden-albertini@education-national.fr');
    divContener.appendChild(perso5);

    var perso6 = newFicheEnseignant('6', 'Hermolino', 'Emma', 'hermolino-emma@education-national.fr', "Joseph Peyré - Garlin", '0559049429', 'hermolino-emma@education-national.fr');
    divContener.appendChild(perso6);
}

function newFicheEnseignant(id, nom, prenom, email, college, tel, identifiant) {

    function stopEvent(evt) {
        evt.stopPropagation();
    }

    var divContenerUser = document.createElement('div');
    divContenerUser.id = "divContenerUser" + id;
    divContenerUser.addEventListener("click", btnProf)
    divContenerUser.className = "divFermee";

    var divContenu = document.createElement('div');
    divContenu.className = "ligneTab avec-border";
    divContenu.id = "divContenu" + id;
    divContenerUser.appendChild(divContenu);

    var pNom = document.createElement('p');
    var textNom = document.createTextNode(nom);
    pNom.appendChild(textNom);
    pNom.className = "nomUser";
    divContenu.appendChild(pNom);

    var pPrenom = document.createElement('p');
    var textPrenom = document.createTextNode(prenom);
    pPrenom.appendChild(textPrenom);
    pPrenom.className = "prenomUser";
    divContenu.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    var textEmail = document.createTextNode(email);
    pEmail.appendChild(textEmail);
    pEmail.className = "emailUser";
    divContenu.appendChild(pEmail);

    var pCollege = document.createElement('p');
    var textCollege = document.createTextNode(college);
    pCollege.appendChild(textCollege);
    pCollege.className = "collegeUser";
    divContenu.appendChild(pCollege);

    var pLien = document.createElement('p');
    pLien.className = "actionUser";
    divContenu.appendChild(pLien);
    var aFleche = document.createElement('a');
        aFleche.id = "lienFleche" + id;
        aFleche.className = "lienBlock";
    pLien.appendChild(aFleche);
        var imgFleche = document.createElement('img');
            imgFleche.id = "fleche" + id;
            imgFleche.className = "fas fa-angle-down";
        aFleche.appendChild(imgFleche);

    return divContenerUser;

    function btnProf() {

        var divContenuDynamique = document.getElementById('divContenerUser' + id);
        var borderDiv = document.getElementById('divContenu' + id);
        var flecheBas = document.getElementById('fleche' + id);

        var nombreAngleUp = document.getElementsByClassName("fa-angle-up").length;

        if (nombreAngleUp === 0) {

            borderDiv.className = "ligneTab sans-border";
            flecheBas.className = "fa-angle-up";
            divContenuDynamique.className = "divOuverte";

            var divDerouler = document.createElement("div");
            divDerouler.addEventListener("click", stopEvent);
            divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
            divDerouler.id = "deroulerBoutonAction" + id;
            divContenuDynamique.appendChild(divDerouler);

            var divBtnModifSupp = document.createElement("div");
            divBtnModifSupp.className = "boutonModifSupp";
            divBtnModifSupp.id = 'boutonModifSupp' + id;
            divDerouler.appendChild(divBtnModifSupp);

            var boutonModifier = document.createElement("a");
            boutonModifier.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonModifier);
            boutonModifier.href = "#";
            boutonModifier.addEventListener("click", updateEnseignant);
            var TexteBoutonModifier = document.createTextNode("Modifier");
            boutonModifier.appendChild(TexteBoutonModifier);
            divBtnModifSupp.appendChild(boutonModifier);

            var boutonSupprimer = document.createElement("a");
            boutonSupprimer.className = "btn-updatedelete btn-delete";
            divBtnModifSupp.appendChild(boutonSupprimer);
            boutonSupprimer.href = "#";
            boutonSupprimer.addEventListener("click", deleteEnseignant);
            var TexteBoutonSupprimer = document.createTextNode("Supprimer");
            boutonSupprimer.appendChild(TexteBoutonSupprimer);
            divBtnModifSupp.appendChild(boutonSupprimer);

            return divContenuDynamique;

        } else {

            var divOuverte = document.querySelector(".divOuverte");
            var flecheBasDivOuverte = document.querySelector(".fa-angle-up");
            var borderDivOuverte = document.querySelector(".sans-border");

            if (document.getElementById('deroulerBoutonAction' + id)) {
                divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
                flecheBas.className = "fas fa-angle-down";
                borderDiv.className = "ligneTab avec-border";
                divOuverte.className = "divFermee";
                return divContenuDynamique;

            } else if (document.getElementById('divUpdateUser' + id)) {
                divContenuDynamique.removeChild(document.querySelector('.divFormUpdate'));
                flecheBas.className = "fas fa-angle-down";
                borderDiv.className = "ligneTab avec-border";
                divOuverte.className = "divFermee";
                return divContenuDynamique;
            }

            if (document.querySelector(".divOuverte")) {

                if (document.querySelector('.divFormUpdate')) {
                    divOuverte.removeChild(document.querySelector('.divFormUpdate'));
                    flecheBasDivOuverte.className = "fas fa-angle-down";
                    borderDivOuverte.className = "ligneTab avec-border";
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermee";

                    borderDiv.className = "ligneTab sans-border";
                    flecheBas.className = "fas fa-angle-up";

                    var divDerouler = document.createElement("div");
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateEnseignant);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete btn-delete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteEnseignant);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                } else {

                    flecheBasDivOuverte.className = "fas fa-angle-down";
                    borderDivOuverte.className = "ligneTab avec-border";
                    divOuverte.removeChild(document.querySelector(".divAngle-up"));
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermee";

                    borderDiv.className = "ligneTab sans-border";
                    flecheBas.className = "fas fa-angle-up";


                    var divDerouler = document.createElement("div");
                    divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                    divDerouler.addEventListener("click", stopEvent);
                    divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateEnseignant);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete btn-delete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteEnseignant);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                }
            }
        }
    }
    function deleteEnseignant() {

        var articleouvert = document.getElementById("base");

        var divBackgroundPop = document.createElement("div");
        divBackgroundPop.addEventListener("click", fermerContenu);
        divBackgroundPop.className = "backgroundPop-up";
        articleouvert.appendChild(divBackgroundPop);

        var divPop = document.createElement("div");
        divPop.addEventListener("click", stopEvent);
        divPop.className = "pop-up";
        divBackgroundPop.appendChild(divPop);

        var pDivPop = document.createElement("p");
        divPop.appendChild(pDivPop);
        var textPop = document.createTextNode("Êtes-vous sûr de vouloir supprimer " + nom + (" ") + prenom + " de la liste des documentalistes?");
        pDivPop.appendChild(textPop);

        var divBoutonPop = document.createElement("div");
        divBoutonPop.addEventListener("click", stopEvent);
        divBoutonPop.className = "boutonPop-up";
        divPop.appendChild(divBoutonPop);

        var btnConfirmer = document.createElement("a");
        var textBtnConfirmer = document.createTextNode("Confirmer");
        btnConfirmer.addEventListener("click", evtBoutonConfirmer);
        btnConfirmer.href = "#";
        btnConfirmer.appendChild(textBtnConfirmer);
        btnConfirmer.className = "boutonConfirmerAnnuler backBlue";
        divBoutonPop.appendChild(btnConfirmer);

        var btnAnnuler = document.createElement("a");
        var textBtnAnnuler = document.createTextNode("Annuler");
        btnAnnuler.addEventListener("click", evtBoutonAnnuler);
        btnAnnuler.href = "#";
        btnAnnuler.appendChild(textBtnAnnuler);
        btnAnnuler.className = "boutonConfirmerAnnuler";
        divBoutonPop.appendChild(btnAnnuler);

        function evtBoutonConfirmer() {
            var divResultat = document.getElementById("contenerResultat");

            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
            divResultat.removeChild(document.querySelector(".divOuverte"));
            /* ajouter fonction pour supprimer de la base de données */
        }

        function evtBoutonAnnuler() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function fermerContenu() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function stopEvent(evt) {
            evt.stopPropagation();
        }

    }

    function updateEnseignant() {
        var divContenuDynamique = document.getElementById('divContenerUser' + id)
        var borderDiv = document.getElementById('divContenu' + id);

        divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
        borderDiv.className = "ligneTab sans-border";

        var divPrincipaleForm = document.createElement("div");
        divPrincipaleForm.id = "divUpdateUser" + id;
        divPrincipaleForm.className = "divFormUpdate avec-border";
        divContenuDynamique.appendChild(divPrincipaleForm);

        var formUpdate = document.createElement("form");
        formUpdate.addEventListener("click", stopEvent);
        formUpdate.className = "formUpdate";
        divPrincipaleForm.appendChild(formUpdate);

        var divInfo = document.createElement('div');
        divInfo.className = "divInfo"
        formUpdate.appendChild(divInfo);

        var titre1Form = document.createElement("h3");
        var textTitre1Form = document.createTextNode("Information générale :");
        titre1Form.appendChild(textTitre1Form);
        divInfo.appendChild(titre1Form);

        var divContenu1 = document.createElement("div");
        divContenu1.className = "divFormContenu";
        divInfo.appendChild(divContenu1);

        var inputNom = document.createElement("input");
        inputNom.className = "policeForm taille1Form";
        inputNom.type = "text";
        inputNom.name = "nomUser";
        inputNom.placeholder = "Nom utilistateur";
        inputNom.value = nom;
        divContenu1.appendChild(inputNom);

        var inputPrenom = document.createElement("input");
        inputPrenom.className = "policeForm taille1Form";
        inputPrenom.type = "text";
        inputPrenom.name = "prenomUser";
        inputPrenom.placeholder = "Prenom utilistateur";
        inputPrenom.value = prenom;
        divContenu1.appendChild(inputPrenom);

        var inputEmail = document.createElement("input");
        inputEmail.className = "policeForm taille2Form";
        inputEmail.type = "email";
        inputEmail.name = "emailUser";
        inputEmail.placeholder = "Email de contact";
        inputEmail.value = email;
        divContenu1.appendChild(inputEmail);

        var divContenu2 = document.createElement("div");
        divContenu2.className = "divFormContenu";
        divInfo.appendChild(divContenu2);

        var selectMatiere = document.createElement("select");
        selectMatiere.className = "policeForm taille4form";
        selectMatiere.name = "selectMatiere";
        divContenu2.appendChild(selectMatiere);
        var option1 = document.createElement("option");
        selectMatiere.appendChild(option1);
        var textOption1 = document.createTextNode("- Choisissez une matière -")
        option1.appendChild(textOption1);
        var option2 = document.createElement("option");
        selectMatiere.appendChild(option2);
        var textOption2 = document.createTextNode("Français")
        option2.appendChild(textOption2);
        var option3 = document.createElement("option");
        selectMatiere.appendChild(option3);
        var textOption3 = document.createTextNode("Anglais")
        option3.appendChild(textOption3);
        var option4 = document.createElement("option");
        selectMatiere.appendChild(option4);
        var textOption4 = document.createTextNode("Histoire")
        option4.appendChild(textOption4);
        var option5 = document.createElement("option");
        selectMatiere.appendChild(option5);
        var textOption5 = document.createTextNode("Géographie")
        option5.appendChild(textOption5);

        var inputTel = document.createElement("input");
        inputTel.className = "policeForm taille1Form";
        inputTel.type = "tel";
        inputTel.name = "telUser";
        inputTel.placeholder = "Telephone de contact";
        inputTel.value = tel;
        divContenu2.appendChild(inputTel);

        var selectCollege = document.createElement("select");
        selectCollege.className = "policeForm taille3form";
        selectCollege.name = "selectCollege";
        divContenu2.appendChild(selectCollege);
        var option1 = document.createElement("option");
        selectCollege.appendChild(option1);
        var textOption1 = document.createTextNode("- Choisissez un collège -")
        option1.appendChild(textOption1);
        var option2 = document.createElement("option");
        selectCollege.appendChild(option2);
        var textOption2 = document.createTextNode("Calandreta - Pau")
        option2.appendChild(textOption2);
        var option3 = document.createElement("option");
        selectCollege.appendChild(option3);
        var textOption3 = document.createTextNode("Jeanne d'Albret - Pau")
        option3.appendChild(textOption3);
        var option4 = document.createElement("option");
        selectCollege.appendChild(option4);
        var textOption4 = document.createTextNode("Bois d'amour - Billère")
        option4.appendChild(textOption4);
        var option5 = document.createElement("option");
        selectCollege.appendChild(option5);
        var textOption5 = document.createTextNode("Simin Palay - Lescar")
        option5.appendChild(textOption5);

        var titre2Form = document.createElement("h3");
        var textTitre2Form = document.createTextNode("Information de connexion :");
        titre2Form.appendChild(textTitre2Form);
        formUpdate.appendChild(titre2Form);

        var divContenu3 = document.createElement("div");
        divContenu3.className = "divFormContenu";
        formUpdate.appendChild(divContenu3);

        var inputIdentifiant = document.createElement("input");
        inputIdentifiant.className = "policeForm taille2Form";
        inputIdentifiant.type = "text";
        inputIdentifiant.name = "identifiant";
        inputIdentifiant.placeholder = "Identifiant";
        inputIdentifiant.value = identifiant;
        divContenu3.appendChild(inputIdentifiant);

        var inputMdp = document.createElement("input");
        inputMdp.className = "policeForm taille1Form";
        inputMdp.type = "password";
        inputMdp.name = "motDePasse";
        inputMdp.placeholder = "Mot de passe";
        divContenu3.appendChild(inputMdp);

        var inputMdp2 = document.createElement("input");
        inputMdp2.className = "policeForm taille1Form";
        inputMdp2.type = "password";
        inputMdp2.name = "verifMotDePasse";
        inputMdp2.placeholder = "Confirmation mot de passe";
        divContenu3.appendChild(inputMdp2);

        var divContenu4 = document.createElement("div");
        divContenu4.className = "divFormBtn";
        formUpdate.appendChild(divContenu4);

        var boutonEnregistrer = document.createElement("button");
        boutonEnregistrer.className = "btn-modifier";
        boutonEnregistrer.type = "submit";
        boutonEnregistrer.name = "modifier";
        boutonEnregistrer.value = "modifier";
        var textBouton = document.createTextNode("Enregistrer");
        boutonEnregistrer.appendChild(textBouton);
        divContenu4.appendChild(boutonEnregistrer);
    }
}


/* administrateur =========================================================== */

function verifCreaAdmin() {
    if (!document.getElementById('tabAdmin')) {
        if (document.getElementById('tabDocu')) {
            var baseArticle = document.getElementById("base");
                baseArticle.removeChild(document.querySelector('.tableau'));
                btnDocu.className = "btnType";
        }
        if (document.getElementById('tabProf')) {
            var baseArticle = document.getElementById("base");
                baseArticle.removeChild(document.querySelector('.tableau'));
                btnProf.className = "btnType";
        }
        return createTableAdministrateur();
    } else {
        var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.tableau'));
            btnAdmin.className = "btnType";
    }
}

function createTableAdministrateur() {
    btnAdmin.className = "btnType btnTypeSelected";

    var base = document.getElementById("base");

    var section3 = document.createElement('section');
    section3.className = "tableau";
    base.appendChild(section3);

    var tableIntitule = document.createElement('div');
    tableIntitule.className = "ligneTab headTab";
    tableIntitule.id = "tabAdmin";
    section3.appendChild(tableIntitule);

    var divContener = document.createElement('div');
    divContener.id = "contenerResultat";
    section3.appendChild(divContener);

    var pNom = document.createElement('p');
    pNom.className = "nomUser";
    var textPNom = document.createTextNode("Nom utilisateur");
    pNom.appendChild(textPNom);
    tableIntitule.appendChild(pNom);

    var pPrenom = document.createElement('p');
    pPrenom.className = "prenomUser";
    var textPPrenom = document.createTextNode("Prénom utilisateur");
    pPrenom.appendChild(textPPrenom);
    tableIntitule.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    pEmail.className = "emailUser";
    var textPEmail = document.createTextNode("Email de contact");
    pEmail.appendChild(textPEmail);
    tableIntitule.appendChild(pEmail);

    var pTel = document.createElement('p');
    pTel.className = "collegeUser";
    var textPTel = document.createTextNode("Téléphone de contact");
    pTel.appendChild(textPTel);
    tableIntitule.appendChild(pTel);

    var pAction = document.createElement('p');
    pAction.className = "actionUser";
    var textPAction = document.createTextNode("Action");
    pAction.appendChild(textPAction);
    tableIntitule.appendChild(pAction);

    var perso1 = newFicheAdministrateur('1', 'Lacherez', 'Benoit', 'benoit-lacherez@conseil-general.fr', '0559340202', 'benoit-lacherez@conseil-general.fr');
    divContener.appendChild(perso1);

    var perso2 = newFicheAdministrateur('2', 'Dufour', 'Paul', 'paul-dufour@education-national.fr', '0559340508', 'paul-dufour@education-national.fr');
    divContener.appendChild(perso2);
}

function newFicheAdministrateur(id, nom, prenom, email, tel, identifiant) {

    function stopEvent(evt) {
        evt.stopPropagation();
    }

    var divContenerUser = document.createElement('div');
    divContenerUser.id = "divContenerUser" + id;
    divContenerUser.addEventListener("click", btnAdmin);
    divContenerUser.className = "divFermee";

    var divContenu = document.createElement('div');
    divContenu.className = "ligneTab avec-border";
    divContenu.id = "divContenu" + id;
    divContenerUser.appendChild(divContenu);

    var pNom = document.createElement('p');
    var textNom = document.createTextNode(nom);
    pNom.appendChild(textNom);
    pNom.className = "nomUser";
    divContenu.appendChild(pNom);

    var pPrenom = document.createElement('p');
    var textPrenom = document.createTextNode(prenom);
    pPrenom.appendChild(textPrenom);
    pPrenom.className = "prenomUser";
    divContenu.appendChild(pPrenom);

    var pEmail = document.createElement('p');
    var textEmail = document.createTextNode(email);
    pEmail.appendChild(textEmail);
    pEmail.className = "emailUser";
    divContenu.appendChild(pEmail);

    var pTel = document.createElement('p');
    var textTel = document.createTextNode(tel);
    pTel.appendChild(textTel);
    pTel.className = "collegeUser";
    divContenu.appendChild(pTel);

    var pLien = document.createElement('p');
    pLien.className = "actionUser";
    divContenu.appendChild(pLien);
    var aFleche = document.createElement('a');
    aFleche.id = "lienFleche" + id;
    aFleche.className = "lienBlock";
    pLien.appendChild(aFleche);
    var imgFleche = document.createElement('i');
        imgFleche.id = "fleche" + id;
        imgFleche.className = "fas fa-angle-down";
    aFleche.appendChild(imgFleche);

    return divContenerUser;

    function btnAdmin() {

        var divContenuDynamique = document.getElementById('divContenerUser' + id);
        var borderDiv = document.getElementById('divContenu' + id);
        var flecheBas = document.getElementById('fleche' + id);

        var nombreAngleUp = document.getElementsByClassName("fa-angle-up").length;

        if (nombreAngleUp === 0) {

            borderDiv.className = "ligneTab sans-border";
            flecheBas.className = "fas fa-angle-down";
            divContenuDynamique.className = "divOuverte";

            var divDerouler = document.createElement("div");
            divDerouler.addEventListener("click", stopEvent);
            divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
            divDerouler.id = "deroulerBoutonAction" + id;
            divContenuDynamique.appendChild(divDerouler);

            var divBtnModifSupp = document.createElement("div");
            divBtnModifSupp.className = "boutonModifSupp";
            divBtnModifSupp.id = 'boutonModifSupp' + id;
            divDerouler.appendChild(divBtnModifSupp);

            var boutonModifier = document.createElement("a");
            boutonModifier.className = "btn-updatedelete";
            divBtnModifSupp.appendChild(boutonModifier);
            boutonModifier.href = "#";
            boutonModifier.addEventListener("click", updateAdministrateur);
            var TexteBoutonModifier = document.createTextNode("Modifier");
            boutonModifier.appendChild(TexteBoutonModifier);
            divBtnModifSupp.appendChild(boutonModifier);

            var boutonSupprimer = document.createElement("a");
            boutonSupprimer.className = "btn-updatedelete btn-delete";
            divBtnModifSupp.appendChild(boutonSupprimer);
            boutonSupprimer.href = "#";
            boutonSupprimer.addEventListener("click", deleteAdministrateur);
            var TexteBoutonSupprimer = document.createTextNode("Supprimer");
            boutonSupprimer.appendChild(TexteBoutonSupprimer);
            divBtnModifSupp.appendChild(boutonSupprimer);

            return divContenuDynamique;

        } else {

            var divOuverte = document.querySelector(".divOuverte");
            var flecheBasDivOuverte = document.querySelector(".fa-angle-up");
            var borderDivOuverte = document.querySelector(".sans-border");

            if (document.getElementById('deroulerBoutonAction' + id)) {
                divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
                flecheBas.className = "fas fa-angle-down";
                borderDiv.className = "ligneTab avec-border";
                divOuverte.className = "divFermee";
                return divContenuDynamique;

            } else if (document.getElementById('divUpdateUser' + id)) {
                divContenuDynamique.removeChild(document.querySelector('.divFormUpdate'));
                flecheBas.className = "fas fa-angle-down";
                borderDiv.className = "ligneTab avec-border";
                divOuverte.className = "divFermee";
                return divContenuDynamique;
            }

            if (document.querySelector(".divOuverte")) {

                if (document.querySelector('.divFormUpdate')) {
                    divOuverte.removeChild(document.querySelector('.divFormUpdate'));
                    flecheBasDivOuverte.className = "fas fa-angle-down";
                    borderDivOuverte.className = "ligneTab avec-border";
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermee";

                    borderDiv.className = "ligneTab sans-border";
                    flecheBas.className = "fas fa-angle-up";


                    var divDerouler = document.createElement("div");
                        divDerouler.addEventListener("click", stopEvent);
                        divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                        divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateAdministrateur);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete btn-delete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteAdministrateur);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                } else {

                    flecheBasDivOuverte.className = "fas fa-angle-down";
                    borderDivOuverte.className = "ligneTab avec-border";
                    divOuverte.removeChild(document.querySelector(".divAngle-up"));
                    divContenuDynamique.className = "divOuverte";
                    divOuverte.className = "divFermee";

                    borderDiv.className = "ligneTab sans-border";
                    flecheBas.className = "fa-angle-up";

                    var divDerouler = document.createElement("div");
                        divDerouler.className = "deroulerBoutonAction avec-border divAngle-up";
                        divDerouler.addEventListener("click", stopEvent);
                        divDerouler.id = "deroulerBoutonAction" + id;
                    divContenuDynamique.appendChild(divDerouler);

                    var divBtnModifSupp = document.createElement("div");
                    divBtnModifSupp.className = "boutonModifSupp";
                    divBtnModifSupp.id = 'boutonModifSupp' + id;
                    divDerouler.appendChild(divBtnModifSupp);

                    var boutonModifier = document.createElement("a");
                    boutonModifier.className = "btn-updatedelete";
                    divBtnModifSupp.appendChild(boutonModifier);
                    boutonModifier.href = "#";
                    boutonModifier.addEventListener("click", updateAdministrateur);
                    var TexteBoutonModifier = document.createTextNode("Modifier");
                    boutonModifier.appendChild(TexteBoutonModifier);
                    divBtnModifSupp.appendChild(boutonModifier);

                    var boutonSupprimer = document.createElement("a");
                    boutonSupprimer.className = "btn-updatedelete btn-delete";
                    divBtnModifSupp.appendChild(boutonSupprimer);
                    boutonSupprimer.href = "#";
                    boutonSupprimer.addEventListener("click", deleteAdministrateur);
                    var TexteBoutonSupprimer = document.createTextNode("Supprimer");
                    boutonSupprimer.appendChild(TexteBoutonSupprimer);
                    divBtnModifSupp.appendChild(boutonSupprimer);

                    return divContenuDynamique;

                }
            }
        }
    }
    function deleteAdministrateur() {

        var articleouvert = document.getElementById("base");

        var divBackgroundPop = document.createElement("div");
        divBackgroundPop.addEventListener("click", fermerContenu);
        divBackgroundPop.className = "backgroundPop-up";
        articleouvert.appendChild(divBackgroundPop);

        var divPop = document.createElement("div");
        divPop.addEventListener("click", stopEvent);
        divPop.className = "pop-up";
        divBackgroundPop.appendChild(divPop);
        
        var pDivPop = document.createElement("p");
        divPop.appendChild(pDivPop);
        var textPop = document.createTextNode("Êtes-vous sûr de vouloir supprimer " + nom + (" ") + prenom + " de la liste des documentalistes?");
        pDivPop.appendChild(textPop);

        var divBoutonPop = document.createElement("div");
        divBoutonPop.addEventListener("click", stopEvent);
        divBoutonPop.className = "boutonPop-up";
        divPop.appendChild(divBoutonPop);

        var btnConfirmer = document.createElement("a");
        var textBtnConfirmer = document.createTextNode("Confirmer");
        btnConfirmer.addEventListener("click", evtBoutonConfirmer);
        btnConfirmer.href = "#";
        btnConfirmer.appendChild(textBtnConfirmer);
        btnConfirmer.className = "boutonConfirmerAnnuler backBlue";
        divBoutonPop.appendChild(btnConfirmer);

        var btnAnnuler = document.createElement("a");
        var textBtnAnnuler = document.createTextNode("Annuler");
        btnAnnuler.addEventListener("click", evtBoutonAnnuler);
        btnAnnuler.href = "#";
        btnAnnuler.appendChild(textBtnAnnuler);
        btnAnnuler.className = "boutonConfirmerAnnuler";
        divBoutonPop.appendChild(btnAnnuler);

        function evtBoutonConfirmer() {
            var divResultat = document.getElementById("contenerResultat");

            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
            divResultat.removeChild(document.querySelector(".divOuverte"));
            /* ajouter fonction pour supprimer de la base de données */
        }

        function evtBoutonAnnuler() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function fermerContenu() {
            articleouvert.removeChild(document.querySelector('.backgroundPop-up'));
        }

        function stopEvent(evt) {
            evt.stopPropagation();
        }

    }

    function updateAdministrateur() {
        var divContenuDynamique = document.getElementById('divContenerUser' + id)
        var borderDiv = document.getElementById('divContenu' + id);

        divContenuDynamique.removeChild(document.getElementById('deroulerBoutonAction' + id));
        borderDiv.className = "ligneTab sans-border";

        var divPrincipaleForm = document.createElement("div");
        divPrincipaleForm.id = "divUpdateUser" + id;
        divPrincipaleForm.className = "divFormUpdate avec-border";
        divContenuDynamique.appendChild(divPrincipaleForm);

        var formUpdate = document.createElement("form");
        formUpdate.addEventListener("click", stopEvent);
        formUpdate.className = "formUpdate";
        divPrincipaleForm.appendChild(formUpdate);

        var divInfo = document.createElement('div');
        divInfo.className = "divInfo"
        formUpdate.appendChild(divInfo);

        var titre1Form = document.createElement("h3");
        var textTitre1Form = document.createTextNode("Information générale :");
        titre1Form.appendChild(textTitre1Form);
        divInfo.appendChild(titre1Form);

        var divContenu1 = document.createElement("div");
        divContenu1.className = "divFormContenu";
        divInfo.appendChild(divContenu1);

        var inputNom = document.createElement("input");
        inputNom.className = "policeForm taille1Form";
        inputNom.type = "text";
        inputNom.name = "nomUser";
        inputNom.placeholder = "Nom utilistateur";
        inputNom.value = nom;
        divContenu1.appendChild(inputNom);

        var inputPrenom = document.createElement("input");
        inputPrenom.className = "policeForm taille1Form";
        inputPrenom.type = "text";
        inputPrenom.name = "prenomUser";
        inputPrenom.placeholder = "Prenom utilistateur";
        inputPrenom.value = prenom;
        divContenu1.appendChild(inputPrenom);

        var inputEmail = document.createElement("input");
        inputEmail.className = "policeForm taille2Form";
        inputEmail.type = "email";
        inputEmail.name = "emailUser";
        inputEmail.placeholder = "Email de contact";
        inputEmail.value = email;
        divContenu1.appendChild(inputEmail);

        var divContenu2 = document.createElement("div");
        divContenu2.className = "divFormContenu2";
        divInfo.appendChild(divContenu2);

        var inputTel = document.createElement("input");
        inputTel.className = "policeForm taille1Form";
        inputTel.type = "tel";
        inputTel.name = "telUser";
        inputTel.placeholder = "Telephone de contact";
        inputTel.value = tel;
        divContenu2.appendChild(inputTel);

        var titre2Form = document.createElement("h3");
        var textTitre2Form = document.createTextNode("Information de connexion :");
        titre2Form.appendChild(textTitre2Form);
        formUpdate.appendChild(titre2Form);

        var divContenu3 = document.createElement("div");
        divContenu3.className = "divFormContenu";
        formUpdate.appendChild(divContenu3);

        var inputIdentifiant = document.createElement("input");
        inputIdentifiant.className = "policeForm taille2Form";
        inputIdentifiant.type = "text";
        inputIdentifiant.name = "identifiant";
        inputIdentifiant.placeholder = "Identifiant";
        inputIdentifiant.value = identifiant;
        divContenu3.appendChild(inputIdentifiant);

        var inputMdp = document.createElement("input");
        inputMdp.className = "policeForm taille1Form";
        inputMdp.type = "password";
        inputMdp.name = "motDePasse";
        inputMdp.placeholder = "Mot de passe";
        divContenu3.appendChild(inputMdp);

        var inputMdp2 = document.createElement("input");
        inputMdp2.className = "policeForm taille1Form";
        inputMdp2.type = "password";
        inputMdp2.name = "verifMotDePasse";
        inputMdp2.placeholder = "Confirmation mot de passe";
        divContenu3.appendChild(inputMdp2);

        var divContenu4 = document.createElement("div");
        divContenu4.className = "divFormBtn";
        formUpdate.appendChild(divContenu4);

        var boutonEnregistrer = document.createElement("button");
        boutonEnregistrer.className = "btn-modifier";
        boutonEnregistrer.type = "submit";
        boutonEnregistrer.name = "modifier";
        boutonEnregistrer.value = "modifier";
        var textBouton = document.createTextNode("Enregistrer");
        boutonEnregistrer.appendChild(textBouton);
        divContenu4.appendChild(boutonEnregistrer);
    }
}

