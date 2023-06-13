window.onload = function(){
    var przycistk = document.getElementById("przycisk");

    przycisk.addEventListener("click", function(e){
        var tekst = document.getElementById("nazwa").value;
        var numer = document.getElementById("numer").value;
        var ok = true;
        var blad = ""

        console.log(tekst.length)
        console.log(tekst)
        console.log(numer)

        if(tekst == "") {
            e.preventDefault();
            blad = blad + "Pole tekstowe nie zostało uzupełnione!"
            ok = false
        } 
        if(isNaN(numer)){
            e.preventDefault();
            blad = blad + "Wpisana wartość zawiera tekst!"
            ok = false
        }

        if(ok == true) {
            return true
        } else {
            alert(blad);
            return false
        }
    }
    )
}