window.onload = function (e) {

    var btnEsqueceu = document.getElementById ("btnEsqueceu");

    var email = document.getElementById ("txtEmail");

    txtEmail.focus();

    btnEsqueceu.onclick = function (e) {

        e.preventDefault (); 

        var email = txtEmail.value;

        if(email == "") {
            exibirMensagemErro ("Informe o e-mail");
        }

        else {
            recuperar (email);
        }

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function() {
            spnErro.style.display = "none";
        }, 5000);
        
    }

    function recuperar(email) {

        alert("A recuperação de senha para o usuário " + email + " foi realizada com sucesso! ")
    }

    }
}