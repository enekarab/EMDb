var filme = [
    { 
        titel: "Avatar", 
        genre: "Fantasy", 
        info: "Avatar ist ein Fantasy-Film unter der Regie von James Cameron.",
        regisseur: "James Cameron",
        besetzung: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        emdb_punkte: "7,8"
    },
    { 
        titel: "Batman The Dark Knight", 
        genre: "Action", 
        info: "The Dark Knight ist ein Actionfilm unter der Regie von Christopher Nolan.",
        regisseur: "Christopher Nolan",
        besetzung: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        emdb_punkte: "9,0"
    },
    { 
        titel: "Braveheart", 
        genre: "Action", 
        info: "Braveheart ist ein epischer historischer Action-Drama-Film.",
        regisseur: "Mel Gibson",
        besetzung: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "Cars", 
        genre: "Animation", 
        info: "Cars ist ein animierter Film von Pixar.",
        regisseur: "John Lasseter",
        besetzung: ["Owen Wilson", "Larry the Cable Guy", "Bonnie Hunt"],
        emdb_punkte: "7,1"
    },
    { 
        titel: "Gladiator", 
        genre: "Action", 
        info: "Gladiator ist ein epischer historischer Actionfilm unter der Regie von Ridley Scott.",
        regisseur: "Ridley Scott",
        besetzung: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        emdb_punkte: "8,5"
    },
    { 
        titel: "Dune", 
        genre: "Fantasy", 
        info: "Dune ist ein Fantasy-Epos unter der Regie von Denis Villeneuve.",
        regisseur: "Denis Villeneuve",
        besetzung: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "Shining", 
        genre: "Thriller", 
        info: "Shining ist ein psychologischer Horrorfilm unter der Regie von Stanley Kubrick.",
        regisseur: "Stanley Kubrick",
        besetzung: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
        emdb_punkte: "8,4"
    },
    { 
        titel: "The Imitation Game", 
        genre: "Science-Fiction", 
        info: "The Imitation Game ist ein historisches Drama unter der Regie von Morten Tyldum.",
        regisseur: "Morten Tyldum",
        besetzung: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"],
        emdb_punkte: "8,0"
    },
    { 
        titel: "Inception", 
        genre: "Science-Fiction", 
        info: "Inception ist ein Science-Fiction-Heist-Thriller unter der Regie von Christopher Nolan.",
        regisseur: "Christopher Nolan",
        besetzung: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        emdb_punkte: "8,8"
    },
    { 
        titel: "Interstellar", 
        genre: "Science-Fiction", 
        info: "Interstellar ist ein Science-Fiction-Film unter der Regie von Christopher Nolan.",
        regisseur: "Christopher Nolan",
        besetzung: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        emdb_punkte: "8,6"
    },
    { 
        titel: "Königreich der Himmel", 
        genre: "Action", 
        info: "Königreich der Himmel ist ein historischer Eposfilm unter der Regie von Ridley Scott.",
        regisseur: "Ridley Scott",
        besetzung: ["Orlando Bloom", "Eva Green", "Liam Neeson"],
        emdb_punkte: "7,2"
    },
    { 
        titel: "Der König der Löwen", 
        genre: "Animation", 
        info: "Der König der Löwen ist ein animierter Musical-Drama-Film von Walt Disney.",
        regisseur: "Roger Allers, Rob Minkoff",
        besetzung: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        emdb_punkte: "8,5"
    },
    { 
        titel: "Matrix", 
        genre: "Science-Fiction", 
        info: "Matrix ist ein Science-Fiction-Actionfilm unter der Regie von den Wachowskis.",
        regisseur: "Die Wachowskis",
        besetzung: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        emdb_punkte: "8,7"
    },
    { 
        titel: "Memento", 
        genre: "Thriller", 
        info: "Memento ist ein neo-noir psychologischer Thriller unter der Regie von Christopher Nolan.",
        regisseur: "Christopher Nolan",
        besetzung: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
        emdb_punkte: "8,4"
    },
    { 
        titel: "Men in Black", 
        genre: "Action", 
        info: "Men in Black ist ein Science-Fiction-Actionkomödienfilm unter der Regie von Barry Sonnenfeld.",
        regisseur: "Barry Sonnenfeld",
        besetzung: ["Will Smith", "Tommy Lee Jones", "Linda Fiorentino"],
        emdb_punkte: "7,3"
    },
    { 
        titel: "Oppenheimer", 
        genre: "Science-Fiction", 
        info: "Oppenheimer ist ein kommender biografischer Film unter der Regie von Christopher Nolan.",
        regisseur: "Christopher Nolan",
        besetzung: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
        emdb_punkte: "8,3"
    },
    { 
        titel: "Mord im Orient Express", 
        genre: "Abenteuer", 
        info: "Mord im Orient Express ist ein Mystery-Dramafilm unter der Regie von Kenneth Branagh.",
        regisseur: "Kenneth Branagh",
        besetzung: ["Kenneth Branagh", "Penélope Cruz", "Willem Dafoe"],
        emdb_punkte: "6,5"
    },
    { 
        titel: "Der Pate", 
        genre: "Thriller", 
        info: "Der Pate ist ein Kriminaldrama unter der Regie von Francis Ford Coppola.",
        regisseur: "Francis Ford Coppola",
        besetzung: ["Marlon Brando", "Al Pacino", "James Caan"],
        emdb_punkte: "9,2"
    },
    { 
        titel: "Prestige", 
        genre: "Abenteuer", 
        info: "Prestige ist ein Mystery-Drama unter der Regie von Christopher Nolan.",
        regisseur: "Christopher Nolan",
        besetzung: ["Hugh Jackman", "Christian Bale", "Michael Caine"],
        emdb_punkte: "8,5"
    },
    { 
        titel: "Ratatouille", 
        genre: "Animation", 
        info: "Ratatouille ist ein animierter Film von Pixar unter der Regie von Brad Bird.",
        regisseur: "Brad Bird",
        besetzung: ["Patton Oswalt", "Ian Holm", "Lou Romano"],
        emdb_punkte: "8,0"
    },
    { 
        titel: "Spiderman a New Universe", 
        genre: "Animation", 
        info: "Spiderman: A New Universe ist ein animierter Superheldenfilm unter der Regie von Bob Persichetti und Peter Ramsey.",
        regisseur: "Bob Persichetti, Peter Ramsey",
        besetzung: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
        emdb_punkte: "8,4"
    },
    { 
        titel: "Star Wars Die Rache der Sith", 
        genre: "Fantasy", 
        info: "Star Wars: Die Rache der Sith ist ein Science-Fiction-Actionfilm unter der Regie von George Lucas.",
        regisseur: "George Lucas",
        besetzung: ["Ewan McGregor", "Natalie Portman", "Hayden Christensen"],
        emdb_punkte: "7,5"
    },
    { 
        titel: "Tenet", 
        genre: "Science-Fiction", 
        info: "Tenet ist ein Science-Fiction-Actionfilm unter der Regie von Christopher Nolan.",
        regisseur: "Christopher Nolan",
        besetzung: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
        emdb_punkte: "7,5"
    },
    { 
        titel: "Vergiss mein nicht", 
        genre: "Abenteuer", 
        info: "Vergiss mein nicht ist ein romantischer Science-Fiction-Film unter der Regie von Michel Gondry.",
        regisseur: "Michel Gondry",
        besetzung: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "The Fast and The Furious", 
        genre: "Action", 
        info: "The Fast and The Furious ist ein Actionfilm unter der Regie von Rob Cohen.",
        regisseur: "Rob Cohen",
        besetzung: ["Vin Diesel", "Paul Walker", "Michelle Rodriguez"],
        emdb_punkte: "6,8"
    },
    { 
        titel: "Titanic", 
        genre: "Abenteuer", 
        info: "Titanic ist ein romantisches Katastrophenfilm unter der Regie von James Cameron.",
        regisseur: "James Cameron",
        besetzung: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        emdb_punkte: "7,8"
    },
    { 
        titel: "Die Verurteilten", 
        genre: "Abenteuer", 
        info: "Die Verurteilten ist ein Drama unter der Regie von Frank Darabont.",
        regisseur: "Frank Darabont",
        besetzung: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        emdb_punkte: "9,3"
    },
    { 
        titel: "Zurück in die Zukunft", 
        genre: "Fantasy", 
        info: "Zurück in die Zukunft ist ein Science-Fiction-Abenteuerfilm unter der Regie von Robert Zemeckis.",
        regisseur: "Robert Zemeckis",
        besetzung: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
        emdb_punkte: "8,5"
    },
    { 
        titel: "24", 
        genre: "Action", 
        info: "24 ist eine actiongeladene Fernsehserie.",
        regisseur: "Joel Surnow, Robert Cochran",
        besetzung: ["Kiefer Sutherland", "Mary Lynn Rajskub", "Carlos Bernard"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "Breaking Bad", 
        genre: "Science-Fiction", 
        info: "Breaking Bad ist eine intensive Dramaserie, die die Transformation eines Chemielehrers an einer High School zum Methamphetamin-Königpin zeigt.",
        regisseur: "Vince Gilligan",
        besetzung: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        emdb_punkte: "9,5"
    },
    { 
        titel: "Brooklyn Nine Nine", 
        genre: "Komödie", 
        info: "Brooklyn Nine-Nine ist eine komödiantische Polizeiserie, die im fiktiven 99. Bezirk des NYPD spielt.",
        regisseur: "Michael Schur, Daniel J. Goor",
        besetzung: ["Andy Samberg", "Stephanie Beatriz", "Terry Crews"],
        emdb_punkte: "8,4"
    },
    { 
        titel: "Community", 
        genre: "Sitcom", 
        info: "Community ist eine Sitcom, die an einem Community College spielt und für ihren Meta-Humor und ihre vielfältige Besetzung bekannt ist.",
        regisseur: "Dan Harmon",
        besetzung: ["Joel McHale", "Gillian Jacobs", "Danny Pudi"],
        emdb_punkte: "8,5"
    },
    { 
        titel: "Ezel", 
        genre: "Action", 
        info: "Ezel ist eine türkische Krimidramaserie, die sich auf Rache, Verrat und Liebe konzentriert.",
        regisseur: "Uluç Bayraktar",
        besetzung: ["Kenan İmirzalıoğlu", "Cansu Dere", "Bade İşçil"],
        emdb_punkte: "8,2"
    },
    { 
        titel: "Friends", 
        genre: "Sitcom", 
        info: "Friends ist eine beliebte Sitcom, die das Leben, die Beziehungen und die komödiantischen Missgeschicke von sechs Freunden in New York City zeigt.",
        regisseur: "David Crane, Marta Kauffman",
        besetzung: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
        emdb_punkte: "8,9"
    },
    { 
        titel: "Game of Thrones", 
        genre: "Fantasy", 
        info: "Game of Thrones ist eine Fantasy-Epos-Fernsehserie, die auf den Romanen von George R. R. Martin basiert.",
        regisseur: "David Benioff, D.B. Weiss",
        besetzung: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
        emdb_punkte: "9,3"
    },
    { 
        titel: "Haus des Geldes", 
        genre: "Action", 
        info: "Haus des Geldes ist eine spanische Heist-Krimiserie, die für ihre komplexe Handlung und fesselnden Charaktere bekannt ist.",
        regisseur: "Álex Pina",
        besetzung: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "How I Met Your Mother", 
        genre: "Sitcom", 
        info: "How I Met Your Mother ist eine Sitcom, die als Geschichte von Ted Mosby darüber erzählt wird, wie er die Mutter seiner Kinder kennengelernt hat.",
        regisseur: "Carter Bays, Craig Thomas",
        besetzung: ["Josh Radnor", "Jason Segel", "Cobie Smulders"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "Initial D", 
        genre: "Anime", 
        info: "Initial D ist eine japanische Manga- und Anime-Serie, die sich auf illegale Straßenrennen in den Bergpässen Japans konzentriert.",
        regisseur: "Noriaki Akitaya, Tsuneo Tominaga",
        besetzung: ["Shin-ichiro Miki", "Greg Ayres", "Christopher Bevins"],
        emdb_punkte: "8,4"
    },
    { 
        titel: "Limitless", 
        genre: "Science-Fiction", 
        info: "Limitless ist ein Science-Fiction-Thrillerfilm über einen kämpfenden Schriftsteller, der Zugang zum vollen Potenzial seines Gehirns erhält.",
        regisseur: "Neil Burger",
        besetzung: ["Bradley Cooper", "Anna Friel", "Abbie Cornish"],
        emdb_punkte: "7,4"
    },
    { 
        titel: "Lost", 
        genre: "Action", 
        info: "Lost ist eine mysteriöse Fernsehserie, die die Überlebenden eines Flugzeugabsturzes auf einer seltsamen und gefährlichen Insel begleitet.",
        regisseur: "J.J. Abrams, Damon Lindelof",
        besetzung: ["Matthew Fox", "Josh Holloway", "Evangeline Lilly"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "Mr.Robot", 
        genre: "Action", 
        info: "Mr. Robot ist eine spannende Thrillerserie, die sich um einen jungen Programmierer dreht, der zum Cyberkriminellen wird.",
        regisseur: "Sam Esmail",
        besetzung: ["Rami Malek", "Christian Slater", "Carly Chaikin"],
        emdb_punkte: "8,6"
    },
    { 
        titel: "Peaky Blinders", 
        genre: "Action", 
        info: "Peaky Blinders ist eine britische Historiendramaserie, die die Geschichten einer Bande von Gangstern im Birmingham der 1920er Jahre erzählt.",
        regisseur: "Steven Knight",
        besetzung: ["Cillian Murphy", "Paul Anderson", "Helen McCrory"],
        emdb_punkte: "8,8"
    },
    { 
        titel: "Person of Interest", 
        genre: "Science-Fiction", 
        info: "Person of Interest ist eine Science-Fiction-Thrillerserie über einen ex-CIA-Agenten, der Zugang zu einer maschinellen Intelligenz hat, die Verbrechen vorhersagen kann.",
        regisseur: "Jonathan Nolan",
        besetzung: ["Jim Caviezel", "Michael Emerson", "Kevin Chapman"],
        emdb_punkte: "8,4"
    },
    { 
        titel: "Pokemon", 
        genre: "Anime", 
        info: "Pokémon ist eine Anime-Serie, die auf dem gleichnamigen Videospiel von Nintendo basiert und die Abenteuer des Pokémon-Trainers Ash und seines Freundes Pikachu zeigt.",
        regisseur: "Kunihiko Yuyama",
        besetzung: ["Veronica Taylor", "Rachael Lillis", "Eric Stuart"],
        emdb_punkte: "7,5"
    },
    { 
        titel: "Prison Break", 
        genre: "Action", 
        info: "Prison Break ist eine spannende Actionserie, die die Fluchtpläne von zwei Brüdern aus einem Hochsicherheitsgefängnis enthüllt.",
        regisseur: "Paul Scheuring",
        besetzung: ["Wentworth Miller", "Dominic Purcell", "Sarah Wayne Callies"],
        emdb_punkte: "8,3"
    },
    { 
        titel: "Rick and Morty", 
        genre: "Animation", 
        info: "Rick and Morty ist eine animierte Science-Fiction-Sitcom, die die Abenteuer eines exzentrischen Wissenschaftlers Rick und seines einfältigen Enkels Morty zeigt.",
        regisseur: "Justin Roiland, Dan Harmon",
        besetzung: ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
        emdb_punkte: "9,2"
    },
    { 
        titel: "Samurai Jack", 
        genre: "Animation", 
        info: "Samurai Jack ist eine amerikanische Zeichentrickserie, die die Reise eines samuraiartigen Kriegers auf seiner Mission gegen das Böse erzählt.",
        regisseur: "Genndy Tartakovsky",
        besetzung: ["Phil LaMarr", "Mako", "Kevin Michael Richardson"],
        emdb_punkte: "8,5"
    },
    { 
        titel: "Sherlock", 
        genre: "Science-Fiction", 
        info: "Sherlock ist eine britische Fernsehserie, die die modernen Abenteuer des legendären Detektivs Sherlock Holmes und seines Partners Dr. John Watson in London erzählt.",
        regisseur: "Mark Gatiss, Steven Moffat",
        besetzung: ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
        emdb_punkte: "9,1"
    },
    { 
        titel: "Stranger Things", 
        genre: "Fantasy", 
        info: "Stranger Things ist eine düstere Fantasy-Horrorserie, die in den 1980er Jahren in einer Kleinstadt in Indiana spielt und die paranormale Verschwörung um das Verschwinden eines Jungen untersucht.",
        regisseur: "The Duffer Brothers",
        besetzung: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
        emdb_punkte: "8,7"
    },
    { 
        titel: "Suits", 
        genre: "Komödie", 
        info: "Suits ist eine Anwaltsserie, die die fesselnden Geschichten der Anwälte bei einer renommierten New Yorker Anwaltskanzlei erzählt.",
        regisseur: "Aaron Korsh",
        besetzung: ["Gabriel Macht", "Patrick J. Adams", "Meghan Markle"],
        emdb_punkte: "8,4"
    },
    { 
        titel: "Tedlasso", 
        genre: "Komödie", 
        info: "Ted Lasso ist eine Comedy-Serie über einen amerikanischen College-Football-Trainer, der die Leitung eines britischen Fußballteams übernimmt.",
        regisseur: "Bill Lawrence, Jason Sudeikis",
        besetzung: ["Jason Sudeikis", "Hannah Waddingham", "Brett Goldstein"],
        emdb_punkte: "8,7"
    },
    { 
        titel: "The Mandalorian", 
        genre: "Fantasy", 
        info: "The Mandalorian ist eine Star Wars-Serie, die die Abenteuer eines einsamen Kopfgeldjägers in den äußeren Randgebieten der Galaxis zeigt.",
        regisseur: "Jon Favreau",
        besetzung: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
        emdb_punkte: "8,8"
    },
    { 
        titel: "The Office", 
        genre: "Sitcom", 
        info: "The Office ist eine amerikanische Sitcom, die das Arbeitsleben in einer fiktiven Papierfabrik in Scranton, Pennsylvania, humorvoll darstellt.",
        regisseur: "Greg Daniels",
        besetzung: ["Steve Carell", "Rainn Wilson", "John Krasinski"],
        emdb_punkte: "8,9"
    },
    { 
        titel: "The Simpsons", 
        genre: "Animation", 
        info: "Die Simpsons ist eine langjährige amerikanische Zeichentrickserie, die die Abenteuer der Familie Simpson in der fiktiven Stadt Springfield zeigt.",
        regisseur: "Matt Groening",
        besetzung: ["Dan Castellaneta", "Nancy Cartwright", "Julie Kavner"],
        emdb_punkte: "8,6"
    },
    { 
        titel: "The Witcher", 
        genre: "Fantasy", 
        info: "The Witcher ist eine Fantasy-Dramaserie, die auf der Buchreihe von Andrzej Sapkowski basiert und die Abenteuer des Hexers Geralt von Riva erzählt.",
        regisseur: "Lauren Schmidt Hissrich",
        besetzung: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        emdb_punkte: "8,2"
    },
    { 
        titel: "Tom and Jerry", 
        genre: "Cartoon", 
        info: "Tom und Jerry ist eine klassische amerikanische Zeichentrickserie, die die ewige Rivalität zwischen einer Katze namens Tom und einer Maus namens Jerry zeigt.",
        regisseur: "William Hanna, Joseph Barbera",
        besetzung: ["William Hanna", "Joseph Barbera"],
        emdb_punkte: "8,1"
    }
];

function searchFunction() {
    var selectBox = document.getElementById("searchSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value.trim().toLowerCase();
    var selectedMovie = filme.find(movie => movie.titel.trim().toLowerCase() === selectedValue);

    if (selectedMovie) {
        alert("Titel: " + selectedMovie.titel + "\nGenre: " + selectedMovie.genre + "\nInfo: " + selectedMovie.info + "\nRegisseur: " + selectedMovie.regisseur + "\nBesetzung: " + selectedMovie.besetzung.join(", ") + "\nEMDb Punkte: " + selectedMovie.emdb_punkte);
    } else {
        alert("Es wurden keine Filme gefunden!");
    }
}