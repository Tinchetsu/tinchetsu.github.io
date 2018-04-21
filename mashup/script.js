function roll() {
    var genresArray = [];
    var rand1, rand2;
    var desc1, desc2;
    var indexDesc2
    for (var key in genres.genres) {
        genresArray.push({genre:key, desc:genres.genres[key]});
    }
    rand1 = Math.floor(Math.random() * genresArray.length);
    do {
        rand2 = Math.floor(Math.random() * genresArray.length);
    } while (rand2==rand1);
    
    document.getElementById("genre1").textContent = genresArray[rand1].genre;
    document.getElementById("genre2").textContent = genresArray[rand2].genre;
    
    //remove end dot "." from desc1
    desc1 = genresArray[rand1].desc;
    desc1 = desc1.slice(0, desc1.length-1)
    
    //in desc2, remove initial part, until "game" or "games" string, in order to mash 2 descriptions
    if (genresArray[rand2].desc.toLowerCase().indexOf("games")>=0) {
        indexDesc2 = genresArray[rand2].desc.toLowerCase().indexOf("games") + 6;
        desc2 = genresArray[rand2].desc.substr(indexDesc2);
    } else if (genresArray[rand2].desc.toLowerCase().indexOf("game")>=0) {
        indexDesc2 = genresArray[rand2].desc.toLowerCase().indexOf("game") + 5;
        desc2 = genresArray[rand2].desc.substr(indexDesc2);
    } else {
        desc2 = genresArray[rand2].desc;
    }
    
    document.getElementById("desc1").textContent = desc1;
    document.getElementById("desc2").textContent = desc2;
}