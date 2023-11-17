// document.getElementById("lista").onclick = function(v){
//     alert(v.target.innerText);
// }

// function obterSelecionado(elemento){
//     alert(elemento.parentNode);
//     elemento.style.background = "orange";
// }


// event listener, onclick
// vai dar uma lista e dar alerta no pai quando clicar - parentNode

document.getElementById("btnCadastrar").addEventListener("click", validacao);

// document.getElementById("nome").addEventListener("change", function(){
//     var input = document.getElementById("nome");
//     if(input.value == 0){
//         document.getElementById("nome").classList.add("erro");
//     }
//     else{
//         document.getElementById("nome").classList.remove("erro");
//     }
// });

// document.getElementById("idade").addEventListener("change", function(){
//     var input = document.getElementById("idade");
//     if(input.value <= 0){
//         document.getElementById("idade").classList.add("erro");
//     }
//     else{
//         document.getElementById("idade").classList.remove("erro");
//     }
// });

// document.getElementById("pais").addEventListener("change", function(){
//     var input = document.getElementById("pais");
//     if(input.value.length < 3){
//         document.getElementById("pais").classList.add("erro");
//     }
//     else{
//         document.getElementById("pais").classList.remove("erro");
//     }
// });

// document.getElementById("senha").addEventListener("change", function(){
//     var input = document.getElementById("senha");
//     if(input.value < 4 || input.value > 8){
//         document.getElementById("senha").classList.add("erro");
//     }
//     else{
//         document.getElementById("senha").classList.remove("erro");
//     }
// });


function validacao(){
    var inputNome = document.getElementById("nome"); //value retorna o conteudo
    var inputIdade = document.getElementById("idade"); //value retorna o conteudo
    var checkM = document.getElementById("m");
    var checkF = document.getElementById("f");
    var checkN = document.getElementById("n");
    var inputPais = document.getElementById("pais");
    var inputSenha = document.getElementById("senha");

    if(inputNome.value.length == 0){
        alert("Preencha seu nome.");
        inputNome.classList.add("erro");
        document.getElementById("erro").classList.remove("hide");
        setTimeout(function(){
            document.getElementById("erro").classList.add("hide");
            document.getElementById("erro").classList.remove("erro");

        }, 2000);
    }

    else if(inputIdade.value <= 0){
        alert("Idade inválida.");
        inputIdade.classList.add("erro");
        document.getElementById("erro").classList.remove("hide");
        setTimeout(function(){
            document.getElementById("erro").classList.add("hide");
        }, 2000);
    }

    else if(checkM.checked == false && checkF.checked == false && checkN.checked == false){
        alert("Selecione uma opção de sexo.");
    }

    else if(inputPais.value.length < 3){
        alert("País inválido.");
        inputPais.classList.add("erro");
        document.getElementById("erro").classList.remove("hide");
        setTimeout(function(){
            document.getElementById("erro").classList.add("hide");
        }, 2000);
    }

    else if(inputSenha.value.indexOf("$") == -1 || inputSenha < 4 || inputSenha > 8){
        alert("Senha inválida.");
        inputSenha.classList.add("erro");
        document.getElementById("erro").classList.remove("hide");
        setTimeout(function(){
            document.getElementById("erro").classList.add("hide");
        }, 2000);
    }

    else{
        alert("Cadastrado com sucesso.");
    }
    limparCampos();
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("senha").value = "";
}
