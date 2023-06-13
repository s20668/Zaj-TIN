window.onload = function(){
    document.getElementById("przycisk").onclick = function(){
        let c = document.forms.formularz.C.value;
        let f = (c*1.8) +32

        document.forms.formularz.F.value = f;
    }
}