function CriarJogador(){
    var form = document.getElementById('formulario');

    var campo1 = document.createElement("input");
    campo1.setAttribute("type", "text");
    campo1.setAttribute("id", "txtCampo1");
    campo1.setAttribute("size", "50");
    campo1.setAttribute("placeHolder", "Nome");
    form.appendChild(campo1);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    var campo2 = document.createElement("input");
    campo2.setAttribute("type", "text");
    campo2.setAttribute("id", "txtCampo2");
    campo2.setAttribute("size", "50");
    campo2.setAttribute("placeHolder", "Email");
    form.appendChild(campo2);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    var campo3 = document.createElement("input");
    campo3.setAttribute("type", "text");
    campo3.setAttribute("id", "txtCampo3");
    campo3.setAttribute("size", "50");
    campo3.setAttribute("placeHolder", "Nome do jogador");
    form.appendChild(campo3);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    var data1 = document.createElement("span");
    data1.innerHTML = "Data de nascimento:";
    formulario.appendChild(data1);
    form.appendChild(document.createElement("br"));
    var data = document.createElement("input");
    data.setAttribute("type", "date");
    data.setAttribute("id", "txtdata");
    data.setAttribute("value", "2000-01-01");
    form.appendChild(data);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    
    var campo4 = document.createElement("select");
    campo4.setAttribute("id", "tjogador");
    form.appendChild(campo4);

    var opt1 = document. createElement("option");
    opt1.setAttribute("label", "-Genero ");
    opt1.setAttribute("value", " ");
    campo4.appendChild(opt1);

    var opt2 = document. createElement("option");
    opt2.setAttribute("label", " Masculino ");
    opt2.setAttribute("value", " M ");
    campo4.appendChild(opt2);

    var opt3 = document. createElement("option");
    opt3.setAttribute("label", " Feminino ");
    opt3.setAttribute("value", " F ");
    campo4.appendChild(opt3);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    var campo05 = document.createElement("span");
    campo05.innerHTML = "Deseja ser um jogador verificado:";
    formulario.appendChild(campo05);
    form.appendChild(document.createElement("br"));
    var campo5 = document.createElement("input");
    campo5.setAttribute("type", "radio");
    campo5.setAttribute("name", "opcao");
    campo5.setAttribute("value", "Sim");
    form.appendChild(campo5);
    var radio1 = document.createElement("span");
    radio1.innerHTML=("Sim");
    form.appendChild(radio1);
    
    var campo6 = document.createElement("input");
    campo6.setAttribute("type", "radio");
    campo6.setAttribute("name", "opcao");
    campo6.setAttribute("value", "Nao");
    form.appendChild(campo6);
    var radio2 = document.createElement("span");
    radio2.innerHTML=("Não");
    form.appendChild(radio2);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    var campo8 = document.createElement("input");
    campo8.setAttribute("type", "text");
    campo8.setAttribute("id", "txtCampo7");
    campo8.setAttribute("size", "50");
    campo8.setAttribute("placeHolder", "Senha");
    form.appendChild(campo8);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    var botao = document.createElement("button");
    botao.setAttribute("type", "reset");
    botao.setAttribute("id", "botao");
    botao.setAttribute("value", "Limpar");
    botao.innerHTML=("Limpar");
    form.appendChild(botao);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    function Valores(){
        var valorCampo = document.getElementById('txtCampo1').value;
        alert(valorCampo);
    }

    function Jogador() {
        var nome = document.getElementById('txtNome');
        var email = document.getElementById('txtEmail');
        var nomedojogador = document.getElementById('txtNome do jogador');
    
        var jogador = {
            "nome" : nome.value,
            "email" : email.value,
            "nomedojogador" : nomedojogador.value
        }
    
        insereNaTabela(jogador);
    }

}

    function insereNaTabela(j) {
        var tabela = document.getElementById('tblJogador');
        var linha = tabela.insertRow();
        linha.insertCell().innerHTML = j.nome;
        linha.insertCell().innerHTML = j.email;
        slinha.insertCell().innerHTML = j.nomedojogador;
}
