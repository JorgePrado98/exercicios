window.onload = function (e) {

    var btnCadastrar = document.getElementById("btnCadastrar");

    var txtNome = document.getElementById("txtNome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmail = document.getElementById("txtEmail");

    var txtTelefone = document.getElementById("txtTelefone");

    var slcGenero = document.getElementById("slcGenero");

    var txtSenha = document.getElementById("txtSenha");

    txtNome.focus();

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;
        console.log(nome);
        var sobrenome = txtSobrenome.value;

        var email = txtEmail.value;

        var telefone = txtTelefone.value;

        var genero = slcGenero.value;

        var senha = txtSenha.value;

        if (nome == "") {
            exibirMensagemErro("Informe o nome.");
        }

        else if (sobrenome == "") {
            exibirMensagemErro("Informe o sobrenome.");
        }
        else if (email == "") {
            exibirMensagemErro("Informe o e-mail.");
        }
        else if (telefone == "") {
            exibirMensagemErro("Informe o telefone.");
        }
        else if (senha == "") {
            exibirMensagemErro("Informe a senha");
        }

        else {
            cadastrar(nome, sobrenome, email, telefone, genero, senha);
        }
    };

    var mensagem = "Os campos acima são obrigatórios!"
    exibirMensagemErro();
    function cadastrar(nome, sobrenome, email, telefone, genero, senha) {

        var data = JSON.stringify({
            "nome": nome,
            "sobrenome": sobrenome,
            "email": email,
            "telefone": telefone,
            "senha": senha,
            "genero": genero
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {


                var result = JSON.parse(this.responseText);

                if (result.sucesso) {
                    alert("cadastrou!");
                }

                else {
                    exibirMensagemErro(result.mensagem);
                }

            }
        });

        xhr.open("POST", "https://localhost:7234/api/usuario/cadastro");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);

    }

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }

}
