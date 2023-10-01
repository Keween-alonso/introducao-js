var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");
botaoBuscarPacientes.addEventListener("click", function(){
    xhr = new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.send();
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(resposta);
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            for(var i = 0; i < pacientes.length; i++){
                paciente = pacientes[i];
                adicionaPacienteNaTabela(paciente);
        }
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        
    })
})