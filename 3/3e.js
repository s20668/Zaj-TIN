let spr = 'Jakie jest tu najdluzsze slowo'

function najdluzszeslowo(ciag) {
    let tablica = ciag.split(" ")
    let dlugosc = 0
    let poz = 0;

    for(i = 0; i < tablica.length; i++) {
        if(tablica[i].length > maxDl) {
            dlugosc = tablica[i].length
            poz = i
        }
    }

    console.log("Najdluzsze slowo w ciagu \"" + ciag + "\" to: " + tablica[poz])
}
najdluzszeslowo(spr)