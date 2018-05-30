var months = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juill.", "août", "sept.", "oct.", "nov.", "déc."];
// Dates à paramétrer chaque année par l'admin (ou trouver lien vers source officielle sur le net)
var dateRentree = new Date(2017, 8, 4);
var dateVacEte  = new Date(2018, 6, 7, 12, 59, 59);

$(document).ready(function() {
    afficherListeEditCollec();
    afficherListeLanguesNiv();
    afficherSliderRecherche();
    afficherEditions();
    
    $("article .ficheContain .article-right .fa-angle-down").click(ouvrirFermer);
    
    function ouvrirFermer() {
        var $fleche = $(this);
        var $article = $($fleche.parents()[4]);

        if($fleche.hasClass("fa-angle-up")) {
            $article.children('.article-complement').slideUp(300);
            $fleche.removeClass("fa-angle-up");
            $fleche.addClass("fa-angle-down");
            return;
        }

        if($fleche.hasClass("fa-angle-down")) {
            $article.children('.article-complement').slideDown(300);
            $fleche.removeClass("fa-angle-down");
            $fleche.addClass("fa-angle-up");
            return;
        }
    }
    
});

function afficherListeEditCollec() {
    $.getJSON( "../json/editeurs.json", function( editeurs ) {
        $("<select/>", {
            id: "editeur",
            class: "formInput formSelect",
            "data-width": "fit",
            title: "Editeur"
        }).appendTo(".dropdown");
        $.each( editeurs, function( key, editeur ) {
            $('<option/>',{
//                href: "#",
                html: editeur.name
            }).appendTo("#editeur");
        });

        $("<select/>", {
            id: "collection",
            class: "formInput formSelect",
            title: "Collection"
        }).appendTo(".dropdown");
        $.each( editeurs, function( key, editeur ) {
            $('<option/>',{
                html: editeur.collection[0]
            }).appendTo("#collection");
        });
    });
};

function afficherListeLanguesNiv() {
    $.getJSON( "../json/series.json", function( series ) {
        $("<select/>", {
            id: "langue",
            class: "formInput formSelect",
            title: "Langue",
            attr: {"autocomplete": "language"}
        }).appendTo(".dropdown");
        $('<option/>',{
            value: "",
            html: "Langue"
        }).appendTo("#langue");
        $('<option/>',{html: "Français"}).appendTo("#langue");                         
        $('<option/>',{html: "Anglais"}).appendTo("#langue"); 

       $("<select/>", {
            id: "niveau",
            class: "formInput formSelect",
            title: "Classe"
        }).appendTo(".dropdown");
        $('<option/>',{
            value: "",
            html: "Niveau"
        }).appendTo("#niveau");
        $('<option/>',{html: "6&#7497&#7504&#7497"}).appendTo("#niveau");                         
        $('<option/>',{html: "5&#7497&#7504&#7497"}).appendTo("#niveau");   
        $('<option/>',{html: "4&#7497&#7504&#7497"}).appendTo("#niveau");   
        $('<option/>',{html: "3&#7497&#7504&#7497"}).appendTo("#niveau");   
    });
};

function afficherSliderRecherche() {
    // Set multiple options at once
    $("#slider").dateRangeSlider({
        // Limites de la rêgle (date de rentrée des élèves -> date des vacances d'été)
        bounds: {min: dateRentree, max: dateVacEte},
        // Position du cursor par défaut (date du jour -> un mois plus tard)
        defaultValues: {min: new Date(), max: new Date().setMonth(new Date().getMonth() + 1)},
        // Configuration de la rêgle avec le tableau de mois (var months)
        scales: [{
            first:  function(value) {return value;},
            end:    function(value) {return value;},
            next:   function(value) {
                var next = new Date(value);
                return new Date(next.setMonth(value.getMonth() + 1));
            },
            label:  function(value) {
                return months[value.getMonth()];
            }
//            format: function(tickContainer, tickStart, tickEnd) {
//              tickContainer.addClass("myCustomClass");
//            }
    }],
        formatter:function(val){
            var days  = formater2Digits(val.getDate()),
                month = formater2Digits(val.getMonth() + 1);
            return days + "/" + month;
        },
            arrows: false
        });


//    $("#slider").on("userValuesChanged", function(e, data){
//        console.log(data.values.min.toString() + " " + data.values.max.toString());
//    });
};

function afficherEditions() {
    $.getJSON( "../json/series.json", function( data ) {
        $.each( data, function( key, edition ) {
            // <article>
            var article = $( "<article/>");
                // <div class="ficheContain">
            var fiche = $("<div>");
                fiche.addClass("ficheContain");

                // Partie gauche ----------------------------------
                var partieGauche = $("<div/>", {class: "article-left"});
                        $("<img/>", {  "src": edition.cover,
                        alt: "Couverture du livre " + edition.title
                    }).appendTo(partieGauche);

                    var divDansPartieGauche = $("<div/>").appendTo(partieGauche);
                        var divTitleArticle = $('<div class="titleArticle"></div>');
                                $("<h2/>", {html: edition.title}).appendTo(divTitleArticle);
                                $("<h3/>", {html: edition.author}).appendTo(divTitleArticle);
                            divTitleArticle.appendTo(divDansPartieGauche);

                        var divContainMenu = $('<div class="containMenu"></div>');
                            $.getJSON( "../json/editeurs.json", function( editeurs ) {
                                    var indiceEditeur = edition.publisher;
                                    var indiceCollection = edition.collection;
                                var items = [];
                                        //items.push( "<li>Pages : " + edition.pages + "</li>" );
                                    items.push( "<li>Editeur : " + editeurs[indiceEditeur].name + "</li>" );
                                    items.push( "<li>Collection : " + editeurs[indiceEditeur].collection[indiceCollection] + "</li>" );
                                        let isbn13 = edition.ISBN13.toString().slice(0,3)+ " - " + edition.ISBN13.toString().slice(4);
                                    items.push( "<li>ISBN-13 : " + isbn13 + "</li>" );
//          /* a regarder !!!!*/      items.push( "<li>Code barre : " + serie.ISBN_10 + "</li>" );
                                $( "<ul/>", {html: items.join( "" )}).appendTo(divContainMenu);
                              var items2 = [];
                                        items2.push( "<li>Langue : " + edition.language + "</li>" );
                                        items2.push( "<li>" + edition.pages + " pages</li>" );
                                        var dateJson = new Date(edition.publishedDate);
                                        items2.push( "<li>" + formaterDatePubli(dateJson, "jma") + "</li>" );
    //                                    items2.push( "<li>Classe : " + edition.publishedDate + "</li>" );
    //                                    items2.push( "<li>Quantité exemplaires (min-max): " + edition.series[0].quantite + "</li>" );
                                $( "<ul/>", {html: items2.join( "" )}).appendTo(divContainMenu);
                            });

                    divContainMenu.appendTo(divDansPartieGauche);
                    divDansPartieGauche.appendTo(partieGauche);
                    partieGauche.appendTo(fiche);

                // Partie droite -----------------------------------------------
                var partieDroite = $("<div/>", {class: "article-right"});
                    var itemsbouton = [];
                        itemsbouton.push( '<li><i class="fas fa-home" title="Maison"></i></li>');
                        itemsbouton.push( '<li><i class="fas fa-plus" title="Ajouter"></i></li>');
                        itemsbouton.push( '<li><i class="fas fa-pencil-alt" title="Modifier"></i></li>' );
                        itemsbouton.push( '<li><i class="fas fa-angle-down" title="Ouvrir"></i></li>' );
                        $( "<ul/>", {html: itemsbouton.join( "" )}).appendTo(partieDroite);
                    partieDroite.appendTo(fiche);

                fiche.appendTo(article);
                
                // <div id="sliderDispoX">  Slider de disponibilité ------------
                $("<div/>", {"id": "sliderDispo"+ key}).appendTo(article);

                // <div class="article-complement"> ----------------------------
                var complement = $("<div/>", {"class": "article-complement"}).appendTo(article);
                    var collegeContain = $("<div>", {class: "collegeContain"}).appendTo(complement);
                        var college = $("<div>", {class: "college"}).appendTo(collegeContain);
                            $("<p>", {html: edition.series[0].college}).appendTo(college);
                            var college = $("<div>", {class: "college"}).appendTo(collegeContain);
                            var college = $("<div>", {class: "college"}).appendTo(collegeContain);
                            var college = $("<div>", {class: "college"}).appendTo(collegeContain);
                
                article.appendTo("#zoneSearchResult");
                
            afficherSliderDispo(key, edition);
        });
    });
};

// Formatage de la date de publication "03/06/2016"
function formaterDatePubli(dateJson, format) {
    let dateJ = new Date(dateJson);
    let dateP = formater2Digits(dateJ.getDate())  + "/" +
                formater2Digits(dateJ.getMonth() + 1);
    if (format === "jma") {
        dateP += "/" + dateJ.getFullYear();
    }
    return dateP;
}

// Formatage d'un chiffre en 2 digit "3"=>"03"
function formater2Digits(num) {
    return ("0" + num).slice(-2);
}

//$(".sliderDispo1").on(load, , function(){afficherSliderDispo();})
function afficherSliderDispo(key, editionCurrent) {
//    $('.sliderDispo1').each(function () {
        var slider = $('#sliderDispo'+key);
//        console.log(slider);
            slider.addClass("ui1-rangeSlider");
            var $container = $("<div/>", {"class": "ui1-rangeSlider-container"});
                var innerBar = $("<div>", {"class": "ui1-rangeSlider-innerBar"});
                    var scale = $("<div>", {"class": "ui1-ruler-scale"});
                    // Partie gauche ----------------------------------
                    var tabRuler = [
                        {width: "9.7866%", label: "sept."},
                        {width: "10.1264%", label: "oct."},
                        {width: "9.7866%", label: "nov."},
                        {width: "10.1128%", label: "déc."},
                        {width: "10.1128%", label: "janv."},
                        {width: "9.13416%", label: "févr."},
                        {width: "10.0992%", label: "mars"},
                        {width: "9.7866%", label: "avr."},
                        {width: "10.1128%", label: "mai"},
                        {width: "9.7866%", label: "juin"},
                        {width: "1.15536%", label: "juill."}
                    ];
                    $.each( tabRuler, function( key, mois ) {
                        var tick = $( "<div/>", {
                            "class": "ui1-ruler-tick",
                            display: 'inline-block',
                            width: tabRuler[key].width
                        });
                            var inner = $("<div/>", {"class": "ui1-ruler-tick-inner"});
                                var label = $("<span/>", {
                                    "class": "ui1-ruler-tick-label",
                                    text: mois.label
                                    });
                                    label.appendTo(inner);
                                inner.appendTo(tick);
                            tick.appendTo(scale);
                    });
                        scale.appendTo(innerBar);
                    innerBar.appendTo($container);
                $container.appendTo(slider);
        
        // Récupération des données de la BDD pour les mettre dans un tableau
        var tabResa = [];

        $.getJSON( "../json/reservations.json", function(listeEditions) {
            $(listeEditions).each(function( key, edition) {
                // Choix de la bonne édition
                if (edition.ISBN_13 === editionCurrent.ISBN13) {
                    $(edition.series).each(function(key, serie) {
                        // Choix de la bonne série
                        if (serie.codeBar === editionCurrent.series[0].codeBar) { // Juste 1 série pour commencer
                            $(serie.demandes).each(function(key, demande) {
//                                console.log("Date de début série"+key+" = " +demande.dateDebut);
                                tabResa.push(demande.dateDebut, demande.dateFin);
                            });
                        }
                    });
                }

            });
//        if (tabResa.length>0) {
//            console.log("Longueur tabResa : " + tabResa.length);
//            console.log(" Diff : "+ (new Date(tabResa[1]) - new Date(tabResa[0])) + " ms"); // Différence en milliseconde (1 mois = 2 678 400 000 ms)
//            console.log("durée dispo : " + ((new Date(tabResa[1]) - new Date(tabResa[0]))/86400000) + " jours");
//        };



        // Construction des périodes de reservation ------------------------
            for (var i = 0; i < tabResa.length; i = i+2) {
                let resaInfobulle = formaterDatePubli(new Date(tabResa[i]) ) + " -> " + formaterDatePubli(new Date(tabResa[i+1]));

            $container.append($("<div/>", {
            "class": "ui1-rangeSlider-bar",
                    width: (diffDatePourcent(tabResa[i], tabResa[i+1]) + 1) +"%",
                    css: {left: diffDatePourcent(dateRentree, tabResa[i]) +"%"},
                    attr: {title: resaInfobulle}
            }));
        };

            });
                
        // Retourne la différence entre deux dates, en % de la règle
        function diffDatePourcent(dateDeb, dateFin) {
        //    return ((new Date(dateFin) - new Date(dateDeb)) / 86400000) / 3.06;
            return (((new Date(dateFin) - new Date(dateDeb)) / (dateVacEte - dateRentree) * 100));
        }; 
};
                
document.getElementById("boutonRechercher").addEventListener("click", function() {
   document.getElementById("zoneSearchResult").style.display = "block";
   document.getElementsByClassName("search-box")[0].style.marginTop = 0;
});
