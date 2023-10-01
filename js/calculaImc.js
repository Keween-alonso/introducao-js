var titulo = document. querySelector('h1');
titulo.textContent = `Keween Nutricionista`;
var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);

for(var i = 0; i<pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if(!pesoValido){
        tdImc.textContent=`Peso Inválido`;
        paciente.classList.add(`campo-invalido`);
        pesoValido = false;
    }
    if(!alturaValida){
        tdImc.textContent="Altura Inválida";
        paciente.classList.add(`campo-invalido`);
        alturaValida = false;
    }
    
    if(alturaValida && pesoValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
    
}
function validaPeso(peso){
    if(peso>=0&&peso<=1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura>=0&&altura<=3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura *  altura);
    return imc.toFixed(2);
}
