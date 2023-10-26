window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var primeiroNumero = document.getElementById("caixaNumero1").value;

        var segundoNumero = document.getElementById("caixaNumero2").value;

    }

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var mensagem = this.responseText;

            alert(mensagem);
        }
    });

    xhr.open("GET", "https://localhost:7234/api/aula8/somar?valor1=" + primeiroNumero + "&valor2=" + segundoNumero);

    xhr.send();
}
