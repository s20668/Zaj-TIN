let spr = [15,10,7,129,6,53,99,92,932]

function sortow(a,b) {
    return a-b;
}

function licz(tab) {
    
    tab.sort(sortow)

    console.log("Druga najmniejsza liczba to: " + tab[1] + ", a druga najwieksza to: " + tab[tab.length-2])
}
licz(spr)