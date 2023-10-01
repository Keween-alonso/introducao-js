var botao_criar = document.querySelector("#adicionar-paciente");
botao_criar.addEventListener("click", function (event){
    event.preventDefault();

    var ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = "";
    
    var form = document.querySelector("#form-adiciona")

    var paciente = obtemPacienteForm(form);
    
    var erros = validaPaciente(paciente);

    adicionaPacienteNaTabela(paciente);
    if(erros.length>0){
        exibeMensagensDeErro(erros);
        return;
    }
    
   

    form.reset();
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr);
}

function obtemPacienteForm(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length==0){
        erros.push("Nome vazio");
    }
    if(paciente.gordura.length==0){
        erros.push("Gordura vazia");
    }
    if(paciente.peso.length==0){
        erros.push("Peso vazio");
    }
    if(paciente.altura.length==0){
        erros.push("Altura vazia");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura Inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros){
    var ul =  document.querySelector("#mensagem-erro");
    for(var i = 0; i < erros.length;i++){
        var li = document.createElement("li");
        li.innerHTML = erros[i];
        ul.appendChild(li);
        console.log(erros[i]);
    }
}