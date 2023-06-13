let spr = 'Czy jest tu palidrom'

function palindrom(ciag) {

    let x = ciag.replaceAll(" ", "")
    x = x.toUpperCase();
    let y = true;

    for(i = 0; i < x.length; i++) {
        if (x.charAt(i) != x.charAt(x.length-1-i)){
            y = false
        }
    }

    if (y == false) {
        console.log("Ciag \"" + ciag + "\" nie jest palidromem")
    } else {
        console.log("Ciag \"" + ciag + "\" jest palidromem")
    }

}
palindrom(spr)

