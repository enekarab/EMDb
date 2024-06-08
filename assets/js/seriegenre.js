var filme = [
    { 
        titel: "24", 
        genre: "Action", 
        info: "24 ist eine actiongeladene Fernsehserie.",
        regisseur: "Joel Surnow, Robert Cochran",
        besetzung: ["Kiefer Sutherland", "Mary Lynn Rajskub", "Carlos Bernard"],
        episoden: "9 Staffeln, 204 Episoden",
        emdb_punkte: "8,3"
    },
    { 
        titel: "Breaking Bad", 
        genre: "Science-Fiction", 
        info: "Breaking Bad ist eine intensive Dramaserie, die die Transformation eines Chemielehrers an einer High School zum Methamphetamin-Königpin zeigt.",
        regisseur: "Vince Gilligan",
        besetzung: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        episoden: "5 Staffeln, 62 Episoden",
        emdb_punkte: "9,5"
    },
    { 
        titel: "Brooklyn Nine Nine", 
        genre: "Komödie", 
        info: "Brooklyn Nine-Nine ist eine komödiantische Polizeiserie, die im fiktiven 99. Bezirk des NYPD spielt.",
        regisseur: "Michael Schur, Daniel J. Goor",
        besetzung: ["Andy Samberg", "Stephanie Beatriz", "Terry Crews"],
        episoden: "8 Staffeln, 153 Episoden",
        emdb_punkte: "8,4"
    },
    { 
        titel: "Community", 
        genre: "Sitcom", 
        info: "Community ist eine Sitcom, die an einem Community College spielt und für ihren Meta-Humor und ihre vielfältige Besetzung bekannt ist.",
        regisseur: "Dan Harmon",
        besetzung: ["Joel McHale", "Gillian Jacobs", "Danny Pudi"],
        episoden: "6 Staffeln, 110 Episoden",
        emdb_punkte: "8,5"
    },
    { 
        titel: "Ezel", 
        genre: "Action", 
        info: "Ezel ist eine türkische Krimidramaserie, die sich auf Rache, Verrat und Liebe konzentriert.",
        regisseur: "Uluç Bayraktar",
        besetzung: ["Kenan İmirzalıoğlu", "Cansu Dere", "Bade İşçil"],
        episoden: "2 Staffeln, 71 Episoden",
        emdb_punkte: "8,2"
    },
    { 
        titel: "Friends", 
        genre: "Sitcom", 
        info: "Friends ist eine beliebte Sitcom, die das Leben, die Beziehungen und die komödiantischen Missgeschicke von sechs Freunden in New York City zeigt.",
        regisseur: "David Crane, Marta Kauffman",
        besetzung: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
        episoden: "10 Staffeln, 236 Episoden",
        emdb_punkte: "8,9"
    },
    { 
        titel: "Game of Thrones", 
        genre: "Fantasy", 
        info: "Game of Thrones ist eine Fantasy-Epos-Fernsehserie, die auf den Romanen von George R. R. Martin basiert.",
        regisseur: "David Benioff, D.B. Weiss",
        besetzung: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
        episoden: "8 Staffeln, 73 Episoden",
        emdb_punkte: "9,3"
    },
    { 
        titel: "Haus des Geldes", 
        genre: "Action", 
        info: "Haus des Geldes ist eine spanische Heist-Krimiserie, die für ihre komplexe Handlung und fesselnden Charaktere bekannt ist.",
        regisseur: "Álex Pina",
        besetzung: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
        episoden: "5 Staffeln, 31 Episoden",
        emdb_punkte: "8,3"
    },
    { 
        titel: "How I Met Your Mother", 
        genre: "Sitcom", 
        info: "How I Met Your Mother ist eine Sitcom, die als Geschichte von Ted Mosby darüber erzählt wird, wie er die Mutter seiner Kinder kennengelernt hat.",
        regisseur: "Carter Bays, Craig Thomas",
        besetzung: ["Josh Radnor", "Jason Segel", "Cobie Smulders"],
        episoden: "9 Staffeln, 208 Episoden",
        emdb_punkte: "8,3"
    },
    { 
        titel: "Initial D", 
        genre: "Anime", 
        info: "Initial D ist eine japanische Manga- und Anime-Serie, die sich auf illegale Straßenrennen in den Bergpässen Japans konzentriert.",
        regisseur: "Noriaki Akitaya, Tsuneo Tominaga",
        besetzung: ["Shin-ichiro Miki", "Greg Ayres", "Christopher Bevins"],
        episoden: "6 Staffeln, 74 Episoden",
        emdb_punkte: "8,4"
    },
    { 
        titel: "Limitless", 
        genre: "Science-Fiction", 
        info: "Limitless ist ein Science-Fiction-Thrillerfilm über einen kämpfenden Schriftsteller, der Zugang zum vollen Potenzial seines Gehirns erhält.",
        regisseur: "Neil Burger",
        besetzung: ["Bradley Cooper", "Anna Friel", "Abbie Cornish"],
        episoden: "1 Staffel, 22 Episoden",
        emdb_punkte: "7,4"
    },
    { 
        titel: "Lost", 
        genre: "Action", 
        info: "Lost ist eine mysteriöse Fernsehserie, die die Überlebenden eines Flugzeugabsturzes auf einer seltsamen und gefährlichen Insel begleitet.",
        regisseur: "J.J. Abrams, Damon Lindelof",
        besetzung: ["Matthew Fox", "Josh Holloway", "Evangeline Lilly"],
        episoden: "6 Staffeln, 121 Episoden",
        emdb_punkte: "8,3"
    },
    { 
        titel: "Mr.Robot", 
        genre: "Action", 
        info: "Mr. Robot ist eine spannende Thrillerserie, die sich um einen jungen Programmierer dreht, der zum Cyberkriminellen wird.",
        regisseur: "Sam Esmail",
        besetzung: ["Rami Malek", "Christian Slater", "Carly Chaikin"],
        episoden: "4 Staffeln, 45 Episoden",
        emdb_punkte: "8,6"
    },
    { 
        titel: "Peaky Blinders", 
        genre: "Action", 
        info: "Peaky Blinders ist eine britische Historiendramaserie, die die Geschichten einer Bande von Gangstern im Birmingham der 1920er Jahre erzählt.",
        regisseur: "Steven Knight",
        besetzung: ["Cillian Murphy", "Paul Anderson", "Helen McCrory"],
        episoden: "5 Staffeln, 30 Episoden",
        emdb_punkte: "8,8"
    },
    { 
        titel: "Person of Interest", 
        genre: "Science-Fiction", 
        info: "Person of Interest ist eine Science-Fiction-Thrillerserie über einen ex-CIA-Agenten, der Zugang zu einer maschinellen Intelligenz hat, die Verbrechen vorhersagen kann.",
        regisseur: "Jonathan Nolan",
        besetzung: ["Jim Caviezel", "Michael Emerson", "Kevin Chapman"],
        episoden: "5 Staffeln, 103 Episoden",
        emdb_punkte: "8,4"
    },
    { 
        titel: "Pokemon", 
        genre: "Anime", 
        info: "Pokémon ist eine Anime-Serie, die auf dem gleichnamigen Videospiel von Nintendo basiert und die Abenteuer des Pokémon-Trainers Ash und seines Freundes Pikachu zeigt.",
        regisseur: "Kunihiko Yuyama",
        besetzung: ["Veronica Taylor", "Rachael Lillis", "Eric Stuart"],
        episoden: "23 Staffeln, 1159 Episoden",
        emdb_punkte: "7,5"
    },
    { 
        titel: "Prison Break", 
        genre: "Action", 
        info: "Prison Break ist eine spannende Actionserie, die die Fluchtpläne von zwei Brüdern aus einem Hochsicherheitsgefängnis enthüllt.",
        regisseur: "Paul Scheuring",
        besetzung: ["Wentworth Miller", "Dominic Purcell", "Sarah Wayne Callies"],
        episoden: "5 Staffeln, 90 Episoden",
        emdb_punkte: "8,3"
    },
    { 
        titel: "Rick and Morty", 
        genre: "Animation", 
        info: "Rick and Morty ist eine animierte Science-Fiction-Sitcom, die die Abenteuer eines exzentrischen Wissenschaftlers Rick und seines einfältigen Enkels Morty zeigt.",
        regisseur: "Justin Roiland, Dan Harmon",
        besetzung: ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
        episoden: "5 Staffeln, 41 Episoden",
        emdb_punkte: "9,2"
    },
    { 
        titel: "Samurai Jack", 
        genre: "Animation", 
        info: "Samurai Jack ist eine amerikanische Zeichentrickserie, die die Reise eines samuraiartigen Kriegers auf seiner Mission gegen das Böse erzählt.",
        regisseur: "Genndy Tartakovsky",
        besetzung: ["Phil LaMarr", "Mako", "Kevin Michael Richardson"],
        episoden: "5 Staffeln, 62 Episoden",
        emdb_punkte: "8,5"
    },
    { 
        titel: "Sherlock", 
        genre: "Science-Fiction", 
        info: "Sherlock ist eine britische Fernsehserie, die die modernen Abenteuer des legendären Detektivs Sherlock Holmes und seines Partners Dr. John Watson in London erzählt.",
        regisseur: "Mark Gatiss, Steven Moffat",
        besetzung: ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
        episoden: "4 Staffeln, 15 Episoden",
        emdb_punkte: "9,1"
    },
    { 
        titel: "Stranger Things", 
        genre: "Fantasy", 
        info: "Stranger Things ist eine düstere Fantasy-Horrorserie, die in den 1980er Jahren in einer Kleinstadt in Indiana spielt und die paranormale Verschwörung um das Verschwinden eines Jungen untersucht.",
        regisseur: "The Duffer Brothers",
        besetzung: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
        episoden: "4 Staffeln, 34 Episoden",
        emdb_punkte: "8,7"
    },
    { 
        titel: "Suits", 
        genre: "Komödie", 
        info: "Suits ist eine Anwaltsserie, die die fesselnden Geschichten der Anwälte bei einer renommierten New Yorker Anwaltskanzlei erzählt.",
        regisseur: "Aaron Korsh",
        besetzung: ["Gabriel Macht", "Patrick J. Adams", "Meghan Markle"],
        episoden: "9 Staffeln, 134 Episoden",
        emdb_punkte: "8,4"
    },
    { 
        titel: "Tedlasso", 
        genre: "Komödie", 
        info: "Ted Lasso ist eine Comedy-Serie über einen amerikanischen College-Football-Trainer, der die Leitung eines britischen Fußballteams übernimmt.",
        regisseur: "Bill Lawrence, Jason Sudeikis",
        besetzung: ["Jason Sudeikis", "Hannah Waddingham", "Brett Goldstein"],
        episoden: "2 Staffeln, 22 Episoden",
        emdb_punkte: "8,7"
    },
    { 
        titel: "The Mandalorian", 
        genre: "Fantasy", 
        info: "The Mandalorian ist eine Star Wars-Serie, die die Abenteuer eines einsamen Kopfgeldjägers in den äußeren Randgebieten der Galaxis zeigt.",
        regisseur: "Jon Favreau",
        besetzung: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
        episoden: "2 Staffeln, 16 Episoden",
        emdb_punkte: "8,8"
    },
    { 
        titel: "The Office", 
        genre: "Sitcom", 
        info: "The Office ist eine amerikanische Sitcom, die das Arbeitsleben in einer fiktiven Papierfabrik in Scranton, Pennsylvania, humorvoll darstellt.",
        regisseur: "Greg Daniels",
        besetzung: ["Steve Carell", "Rainn Wilson", "John Krasinski"],
        episoden: "9 Staffeln, 201 Episoden",
        emdb_punkte: "8,9"
    },
    { 
        titel: "The Simpsons", 
        genre: "Animation", 
        info: "Die Simpsons ist eine langjährige amerikanische Zeichentrickserie, die die Abenteuer der Familie Simpson in der fiktiven Stadt Springfield zeigt.",
        regisseur: "Matt Groening",
        besetzung: ["Dan Castellaneta", "Nancy Cartwright", "Julie Kavner"],
        episoden: "33 Staffeln, 710 Episoden",
        emdb_punkte: "8,6"
    },
    { 
        titel: "The Witcher", 
        genre: "Fantasy", 
        info: "The Witcher ist eine Fantasy-Dramaserie, die auf der Buchreihe von Andrzej Sapkowski basiert und die Abenteuer des Hexers Geralt von Riva erzählt.",
        regisseur: "Lauren Schmidt Hissrich",
        besetzung: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        episoden: "2 Staffeln, 16 Episoden",
        emdb_punkte: "8,2"
    },
    { 
        titel: "Tom and Jerry", 
        genre: "Animation", 
        info: "Tom und Jerry ist eine klassische amerikanische Zeichentrickserie, die die ewige Rivalität zwischen einer Katze namens Tom und einer Maus namens Jerry zeigt.",
        regisseur: "William Hanna, Joseph Barbera",
        besetzung: ["William Hanna", "Joseph Barbera"],
        episoden: "5 Staffeln, 114 Episoden",
        emdb_punkte: "8,1"
    }
];


function displayMovies(genre) {
    var filmContainer = document.getElementById('filmContainer');
    filmContainer.innerHTML = ''; 

    filme.forEach(function(movie) {
        if (genre == 'all' || movie.genre == genre) {
            var filmeDiv = document.createElement('div');
            filmeDiv.classList.add('filme');
            filmeDiv.innerHTML = '<img src="../pic/Serie/' + movie.titel.toLowerCase().replace(/ /g, '') + '.jpg" style="width:100%" onclick="showMovieInfo(\'' + movie.titel + '\', \'' + movie.genre + '\', \'' + movie.info + '\', \'' + movie.regisseur + '\', \'' + movie.besetzung.join(", ") + '\', \'' + movie.episoden + '\', \'' + movie.emdb_punkte + '\')">' +
                                 '<br><br><h5>' + movie.titel + '</h5>';
                
            filmContainer.appendChild(filmeDiv);
        }
    });
}

function showMovieInfo(title, genre, info, regisseur, besetzung, episoden, emdb_punkte) {
    alert("Titel: " + title + 
          "\nGenre: " + genre + 
          "\nInfo: " + info + 
          "\nRegisseur: " + regisseur + 
          "\nBesetzung: " + besetzung + 
          "\nEpisoden: " + episoden +
          "\nEMDb Punkte: " + emdb_punkte);
}


document.getElementById('genreFilter').addEventListener('change', function() {
    var selectedGenre = this.value;
    displayMovies(selectedGenre);
});


displayMovies('all');