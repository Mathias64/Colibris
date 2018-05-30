
/* documentaliste */

var documentaliste = document.getElementById("documentaliste");
documentaliste.addEventListener("click", verifCreationDocumentaliste);

function verifCreationDocumentaliste() {
    var boutonDocumentaliste = document.getElementById("documentaliste");

    if (!document.getElementById('divFormDocumentaliste')) {
        if (document.getElementById("divFormAdministrateur")) {
            var boutonAdministrateur = document.getElementById("administrateur");
            var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.Section3'));
            boutonAdministrateur.className = "zoneManagementUserBoutonChoix";
        }
        if (document.getElementById("divFormEnseignant")) {
            var boutonEnseignant = document.getElementById("enseignant");
            var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.Section3'));
            boutonEnseignant.className = "zoneManagementUserBoutonChoix";
        }
        return createDocumentaliste();
    } else {
        var baseArticle = document.getElementById("base");
        baseArticle.removeChild(document.querySelector('.Section3'));
        boutonDocumentaliste.className = "zoneManagementUserBoutonChoix";
    }
}

function createDocumentaliste() {
    var boutonDocumentaliste = document.getElementById("documentaliste");
    boutonDocumentaliste.className = "zoneManagementUserBoutonChoix couleurBtn";

    var base = document.getElementById("base");

    var section3 = document.createElement('section');
    section3.className = "Section3";
    base.appendChild(section3);

    var divForm = document.createElement('div');
    divForm.id = "divFormDocumentaliste";
    divForm.className = "divFormCreate";
    section3.appendChild(divForm);

    var formNewUser = document.createElement('form');
    formNewUser.className = "formCreate";
    divForm.appendChild(formNewUser);

    var divInfo = document.createElement('div');
    divInfo.className = "divInfo";
    formNewUser.appendChild(divInfo);

    var titre1 = document.createElement('h3');
    var textTitre1 = document.createTextNode("Information générale :");
    titre1.appendChild(textTitre1);
    divInfo.appendChild(titre1);

    var divInput1 = document.createElement('div');
    divInput1.className = "divFormContenu";
    divInfo.appendChild(divInput1);

    var inputNom = document.createElement("input");
    inputNom.className = "policeForm taille1Form";
    inputNom.type = "text";
    inputNom.name = "nomUser";
    inputNom.placeholder = "Nom utilistateur";
    divInput1.appendChild(inputNom);

    var inputPrenom = document.createElement("input");
    inputPrenom.className = "policeForm taille1Form";
    inputPrenom.type = "text";
    inputPrenom.name = "prenomUser";
    inputPrenom.placeholder = "Prenom utilistateur";
    divInput1.appendChild(inputPrenom);

    var inputEmail = document.createElement("input");
    inputEmail.className = "policeForm taille2Form";
    inputEmail.type = "email";
    inputEmail.name = "emailUser";
    inputEmail.placeholder = "Email de contact";
    divInput1.appendChild(inputEmail);

    var divInput2 = document.createElement('div');
    divInput2.className = "divFormContenu";
    divInfo.appendChild(divInput2);

    var inputCodeEtab = document.createElement("input");
    inputCodeEtab.className = "policeForm taille1Form";
    inputCodeEtab.type = "text";
    inputCodeEtab.name = "codeEtablissement";
    inputCodeEtab.placeholder = "Code etablissement";
    divInput2.appendChild(inputCodeEtab);

    var inputTel = document.createElement("input");
    inputTel.className = "policeForm taille1Form";
    inputTel.type = "tel";
    inputTel.name = "telUser";
    inputTel.placeholder = "Telephone de contact";
    divInput2.appendChild(inputTel);

    var selectCollege = document.createElement("select");
        selectCollege.className = "policeForm taille3form";
        selectCollege.name = "selectCollege";
        divInput2.appendChild(selectCollege);
        var option1 = document.createElement("option");
        selectCollege.appendChild(option1);
        var textOption1 = document.createTextNode("- Choisissez un collège -");
        option1.appendChild(textOption1);
        var option2 = document.createElement("option");
        selectCollege.appendChild(option2);
        var textOption2 = document.createTextNode("Calandreta - Pau");
        option2.appendChild(textOption2);
        var option3 = document.createElement("option");
        selectCollege.appendChild(option3);
        var textOption3 = document.createTextNode("Jeanne d'Albret - Pau");
        option3.appendChild(textOption3);
        var option4 = document.createElement("option");
        selectCollege.appendChild(option4);
        var textOption4 = document.createTextNode("Bois d'amour - Billère");
        option4.appendChild(textOption4);
        var option5 = document.createElement("option");
        selectCollege.appendChild(option5);
        var textOption5 = document.createTextNode("Simin Palay - Lescar");
        option5.appendChild(textOption5);

    var titre2 = document.createElement('h3');
    var textTitre2 = document.createTextNode("Connexion à l'application :");
    titre2.appendChild(textTitre2);
    formNewUser.appendChild(titre2);

    var divInput3 = document.createElement('div');
    divInput3.className = "divFormContenu";
    formNewUser.appendChild(divInput3);

    var inputIdentifiant = document.createElement("input");
    inputIdentifiant.className = "policeForm taille2Form";
    inputIdentifiant.type = "text";
    inputIdentifiant.name = "identifiant";
    inputIdentifiant.placeholder = "Identifiant";
    divInput3.appendChild(inputIdentifiant);

    var inputMdp = document.createElement("input");
    inputMdp.className = "policeForm taille1Form";
    inputMdp.type = "password";
    inputMdp.name = "motDePasse";
    inputMdp.placeholder = "Mot de passe";
    divInput3.appendChild(inputMdp);

    var inputMdp2 = document.createElement("input");
    inputMdp2.className = "policeForm taille1Form";
    inputMdp2.type = "password";
    inputMdp2.name = "verifMotDePasse";
    inputMdp2.placeholder = "Confirmation mot de passe";
    divInput3.appendChild(inputMdp2);

    var divInput4 = document.createElement('div');
    divInput4.className = "divFormBtn";
    formNewUser.appendChild(divInput4);

    var boutonEnregistrer = document.createElement("button");
    boutonEnregistrer.className = "btn-modifier";
    boutonEnregistrer.type = "submit";
    boutonEnregistrer.name = "enregistrer";
    boutonEnregistrer.value = "enregistrer";
    var textBouton = document.createTextNode("Enregistrer");
    boutonEnregistrer.appendChild(textBouton);
    divInput4.appendChild(boutonEnregistrer);
}

/* enseignant */

var enseignant = document.getElementById("enseignant");
enseignant.addEventListener("click", verifCreationEnseignant);

function verifCreationEnseignant() {
    var boutonEnseignant = document.getElementById("enseignant");

    if (!document.getElementById('divFormEnseignant')) {
        if (document.getElementById("divFormDocumentaliste")) {
            var boutonDocumentaliste = document.getElementById("documentaliste");
            var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.Section3'));
            boutonDocumentaliste.className = "zoneManagementUserBoutonChoix";
        }
        if (document.getElementById("divFormAdministrateur")) {
            var boutonAdministrateur = document.getElementById("administrateur");
            var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.Section3'));
            boutonAdministrateur.className = "zoneManagementUserBoutonChoix";
        }
        return createEnseignant();
    } else {
        var baseArticle = document.getElementById("base");
        baseArticle.removeChild(document.querySelector('.Section3'));
        boutonEnseignant.className = "zoneManagementUserBoutonChoix";
    }
}

function createEnseignant() {
    var boutonEnseignant = document.getElementById("enseignant");
    boutonEnseignant.className = "zoneManagementUserBoutonChoix couleurBtn";

    var base = document.getElementById("base");

    var section3 = document.createElement('section');
    section3.className = "Section3";
    base.appendChild(section3);

    var divForm = document.createElement('div');
    divForm.id = "divFormEnseignant";
    divForm.className = "divFormCreate";
    section3.appendChild(divForm);

    var formNewUser = document.createElement('form');
    formNewUser.className = "formCreate";
    divForm.appendChild(formNewUser);

    var divInfo = document.createElement('div');
    divInfo.className = "divInfo";
    formNewUser.appendChild(divInfo);

    var titre1 = document.createElement('h3');
    var textTitre1 = document.createTextNode("Information générale :");
    titre1.appendChild(textTitre1);
    divInfo.appendChild(titre1);

    var divInput1 = document.createElement('div');
    divInput1.className = "divFormContenu";
    divInfo.appendChild(divInput1);

    var inputNom = document.createElement("input");
    inputNom.className = "policeForm taille1Form";
    inputNom.type = "text";
    inputNom.name = "nomUser";
    inputNom.placeholder = "Nom utilistateur";
    divInput1.appendChild(inputNom);

    var inputPrenom = document.createElement("input");
    inputPrenom.className = "policeForm taille1Form";
    inputPrenom.type = "text";
    inputPrenom.name = "prenomUser";
    inputPrenom.placeholder = "Prenom utilistateur";
    divInput1.appendChild(inputPrenom);

    var inputEmail = document.createElement("input");
    inputEmail.className = "policeForm taille2Form";
    inputEmail.type = "email";
    inputEmail.name = "emailUser";
    inputEmail.placeholder = "Email de contact";
    divInput1.appendChild(inputEmail);

    var divInput2 = document.createElement('div');
    divInput2.className = "divFormContenu";
    divInfo.appendChild(divInput2);

    var selectMatiere = document.createElement("select");
    selectMatiere.className = "policeForm taille4form";
    selectMatiere.name = "selectMatiere";
    divInput2.appendChild(selectMatiere);
    var option1 = document.createElement("option");
    selectMatiere.appendChild(option1);
    var textOption1 = document.createTextNode("- Choisissez une matière -");
    option1.appendChild(textOption1);
    var option2 = document.createElement("option");
    selectMatiere.appendChild(option2);
    var textOption2 = document.createTextNode("Français");
    option2.appendChild(textOption2);
    var option3 = document.createElement("option");
    selectMatiere.appendChild(option3);
    var textOption3 = document.createTextNode("Anglais");
    option3.appendChild(textOption3);
    var option4 = document.createElement("option");
    selectMatiere.appendChild(option4);
    var textOption4 = document.createTextNode("Histoire");
    option4.appendChild(textOption4);
    var option5 = document.createElement("option");
    selectMatiere.appendChild(option5);
    var textOption5 = document.createTextNode("Géographie");
    option5.appendChild(textOption5);

    var inputTel = document.createElement("input");
    inputTel.className = "policeForm taille1Form";
    inputTel.type = "tel";
    inputTel.name = "telUser";
    inputTel.placeholder = "Telephone de contact";
    divInput2.appendChild(inputTel);

    var selectCollege = document.createElement("select");
    selectCollege.className = "policeForm taille3form";
    selectCollege.name = "selectCollege";
    divInput2.appendChild(selectCollege);
    var option1 = document.createElement("option");
    selectCollege.appendChild(option1);
    var textOption1 = document.createTextNode("- Choisissez un collège -");
    option1.appendChild(textOption1);
    var option2 = document.createElement("option");
    selectCollege.appendChild(option2);
    var textOption2 = document.createTextNode("Calandreta - Pau");
    option2.appendChild(textOption2);
    var option3 = document.createElement("option");
    selectCollege.appendChild(option3);
    var textOption3 = document.createTextNode("Jeanne d'Albret - Pau");
    option3.appendChild(textOption3);
    var option4 = document.createElement("option");
    selectCollege.appendChild(option4);
    var textOption4 = document.createTextNode("Bois d'amour - Billère");
    option4.appendChild(textOption4);
    var option5 = document.createElement("option");
    selectCollege.appendChild(option5);
    var textOption5 = document.createTextNode("Simin Palay - Lescar");
    option5.appendChild(textOption5);

    var titre2 = document.createElement('h3');
    var textTitre2 = document.createTextNode("Connexion à l'application :");
    titre2.appendChild(textTitre2);
    formNewUser.appendChild(titre2);

    var divInput3 = document.createElement('div');
    divInput3.className = "divFormContenu";
    formNewUser.appendChild(divInput3);

    var inputIdentifiant = document.createElement("input");
    inputIdentifiant.className = "policeForm taille2Form";
    inputIdentifiant.type = "text";
    inputIdentifiant.name = "identifiant";
    inputIdentifiant.placeholder = "Identifiant";
    divInput3.appendChild(inputIdentifiant);

    var inputMdp = document.createElement("input");
    inputMdp.className = "policeForm taille1Form";
    inputMdp.type = "password";
    inputMdp.name = "motDePasse";
    inputMdp.placeholder = "Mot de passe";
    divInput3.appendChild(inputMdp);

    var inputMdp2 = document.createElement("input");
    inputMdp2.className = "policeForm taille1Form";
    inputMdp2.type = "password";
    inputMdp2.name = "verifMotDePasse";
    inputMdp2.placeholder = "Confirmation mot de passe";
    divInput3.appendChild(inputMdp2);

    var divInput4 = document.createElement('div');
    divInput4.className = "divFormBtn";
    formNewUser.appendChild(divInput4);

    var boutonEnregistrer = document.createElement("button");
    boutonEnregistrer.className = "btn-modifier";
    boutonEnregistrer.type = "submit";
    boutonEnregistrer.name = "enregistrer";
    boutonEnregistrer.value = "enregistrer";
    var textBouton = document.createTextNode("Enregistrer");
    boutonEnregistrer.appendChild(textBouton);
    divInput4.appendChild(boutonEnregistrer);
}

/* administrateur */

var administrateur = document.getElementById("administrateur");
administrateur.addEventListener("click", verifCreationAdministrateur);

function verifCreationAdministrateur() {
    var boutonAdministrateur = document.getElementById("administrateur");

    if (!document.getElementById('divFormAdministrateur')) {
        if (document.getElementById("divFormDocumentaliste")) {
            var boutonDocumentaliste = document.getElementById("documentaliste");
            var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.Section3'));
            boutonDocumentaliste.className = "zoneManagementUserBoutonChoix";
        }
        if (document.getElementById("divFormEnseignant")) {
            var boutonEnseignant = document.getElementById("enseignant");
            var baseArticle = document.getElementById("base");
            baseArticle.removeChild(document.querySelector('.Section3'));
            boutonEnseignant.className = "zoneManagementUserBoutonChoix";
        }
        return createAdministrateur();
    } else {
        var baseArticle = document.getElementById("base");
        baseArticle.removeChild(document.querySelector('.Section3'));
        boutonAdministrateur.className = "zoneManagementUserBoutonChoix";
    }
}

function createAdministrateur() {
    var boutonAdministrateur = document.getElementById("administrateur");
    boutonAdministrateur.className = "zoneManagementUserBoutonChoix couleurBtn";

    var base = document.getElementById("base");

    var section3 = document.createElement('section');
    section3.className = "Section3";
    base.appendChild(section3);

    var divForm = document.createElement('div');
    divForm.id = "divFormAdministrateur";
    divForm.className = "divFormCreate";
    section3.appendChild(divForm);

    var formNewUser = document.createElement('form');
    formNewUser.className = "formCreate";
    divForm.appendChild(formNewUser);

    var divInfo = document.createElement('div');
    divInfo.className = "divInfo";
    formNewUser.appendChild(divInfo);

    var titre1 = document.createElement('h3');
    var textTitre1 = document.createTextNode("Information générale :");
    titre1.appendChild(textTitre1);
    divInfo.appendChild(titre1);

    var divInput1 = document.createElement('div');
    divInput1.className = "divFormContenu";
    divInfo.appendChild(divInput1);

    var inputNom = document.createElement("input");
    inputNom.className = "policeForm taille1Form";
    inputNom.type = "text";
    inputNom.name = "nomUser";
    inputNom.placeholder = "Nom utilistateur";
    divInput1.appendChild(inputNom);

    var inputPrenom = document.createElement("input");
    inputPrenom.className = "policeForm taille1Form";
    inputPrenom.type = "text";
    inputPrenom.name = "prenomUser";
    inputPrenom.placeholder = "Prenom utilistateur";
    divInput1.appendChild(inputPrenom);

    var inputEmail = document.createElement("input");
    inputEmail.className = "policeForm taille2Form";
    inputEmail.type = "email";
    inputEmail.name = "emailUser";
    inputEmail.placeholder = "Email de contact";
    divInput1.appendChild(inputEmail);

    var divInput2 = document.createElement('div');
    divInput2.className = "divFormContenu2";
    divInfo.appendChild(divInput2);

    var inputTel = document.createElement("input");
    inputTel.className = "policeForm taille1Form inputMaring";
    inputTel.type = "tel";
    inputTel.name = "telUser";
    inputTel.placeholder = "Telephone de contact";
    divInput2.appendChild(inputTel);

    var titre2 = document.createElement('h3');
    var textTitre2 = document.createTextNode("Connexion à l'application :");
    titre2.appendChild(textTitre2);
    formNewUser.appendChild(titre2);

    var divInput3 = document.createElement('div');
    divInput3.className = "divFormContenu";
    formNewUser.appendChild(divInput3);

    var inputIdentifiant = document.createElement("input");
    inputIdentifiant.className = "policeForm taille2Form";
    inputIdentifiant.type = "text";
    inputIdentifiant.name = "identifiant";
    inputIdentifiant.placeholder = "Identifiant";
    divInput3.appendChild(inputIdentifiant);

    var inputMdp = document.createElement("input");
    inputMdp.className = "policeForm taille1Form";
    inputMdp.type = "password";
    inputMdp.name = "motDePasse";
    inputMdp.placeholder = "Mot de passe";
    divInput3.appendChild(inputMdp);

    var inputMdp2 = document.createElement("input");
    inputMdp2.className = "policeForm taille1Form";
    inputMdp2.type = "password";
    inputMdp2.name = "verifMotDePasse";
    inputMdp2.placeholder = "Confirmation mot de passe";
    divInput3.appendChild(inputMdp2);

    var divInput4 = document.createElement('div');
    divInput4.className = "divFormBtn";
    formNewUser.appendChild(divInput4);

    var boutonEnregistrer = document.createElement("button");
    boutonEnregistrer.className = "btn-modifier";
    boutonEnregistrer.type = "submit";
    boutonEnregistrer.name = "enregistrer";
    boutonEnregistrer.value = "enregistrer";
    var textBouton = document.createTextNode("Enregistrer");
    boutonEnregistrer.appendChild(textBouton);
    divInput4.appendChild(boutonEnregistrer);
}

function listeColleges() {
    var selectCollege;
    $.getJSON( "../../json/colleges.json", function(listColleges) {
        selectCollege = $("<select/>", {
            id: "college",
            class: "selectpicker",
            "data-width": "fit",
            title: "College"
        }).appendTo(".dropdown");
        $.each(listColleges, function(key, college) {
            $('<option/>',{
                html: college.name +" ("+ college.address.addressLocality + ")"
            }).appendTo("#college");
        });
    });
    return selectCollege;
}