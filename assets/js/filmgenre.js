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
    }
];


function displayMovies(genre) {
    var filmContainer = document.getElementById('filmContainer');
    filmContainer.innerHTML = ''; 

    filme.forEach(function(movie) {
        if (genre == 'all' || movie.genre == genre) {
            var filmeDiv = document.createElement('div');
            filmeDiv.classList.add('filme');
            
            var movieInfo = "'" + movie.titel + "','" + movie.genre + "','" + movie.info + "','" + movie.regisseur + "','" + movie.besetzung.join(", ") + "','" + movie.emdb_punkte + "'";
            
            filmeDiv.innerHTML = '<img src="../pic/Films/' + movie.titel.toLowerCase().replace(/ /g, '') + '.jpg" style="width:100%" onclick="showMovieInfo(' + movieInfo + ')">' +
                                 '<br><br><h5>' + movie.titel + '</h5>';
                
            filmContainer.appendChild(filmeDiv);
        }
    });
}

function showMovieInfo(title, genre, info, regisseur, besetzung, emdb_punkte) {
    alert("Titel: " + title + 
          "\nGenre: " + genre + 
          "\nInfo: " + info + 
          "\nRegisseur: " + regisseur + 
          "\nBesetzung: " + besetzung + 
          "\nEMDb Punkte: " + emdb_punkte);
}

document.getElementById('genreFilter').addEventListener('change', function() {
    var selectedGenre = this.value;
    displayMovies(selectedGenre);
});


displayMovies('all');