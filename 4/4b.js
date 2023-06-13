window.onload = function(){
    document.getElementById("przycisk").onclick = function(){
        let tekst = document.getElementById("miejscetekst").value;
        
        let sekcja = document.getElementById("tekst")
        let artykul = document.createElement("article")
        let akapit = document.createElement("p")
        let nowyTekst = document.createTextNode(tekst)
        sekcja.appendChild(artykul)
        artykul.appendChild(akapit)
        akapit.appendChild(nowyTekst)
        
    }
}