function silniaI(liczba) {
    let silnia = 1;

    if(liczba == 0) {
        console.log("0! = 1")
    } else {
        for(i=1; i<= liczba; i++) {
            silnia = silnia*i;
        }
        console.log("Silnia iteracyjna: "+ liczba+"! = " + silnia)
    }
}

let spr = 35
silniaIt(spr)

var silnia = function silniaR(liczba) {
    let silnia = 1;

    if(liczba > 1) {
        silnia = liczba * (silniaR(liczba-1))
    } else {
        silnia = 1
    } 
    return silnia;
}
silnia(spr)
console.log("Silnia rekurencyjna: "+ spr + "! = " + silnia(spr))