
const numerosArray = [];

function vetorI() {
    const numero = document.getElementById("numero").value;
    console.log(numero);
    
    numerosArray.unshift(numero);
    console.log(numerosArray);
    document.getElementById("numero").value="";
}

function vetorF() {
    const numeros = document.getElementById("numero").value;
    console.log(numeros);
    
    numerosArray.push(numeros);
    console.log(numerosArray);
    document.getElementById("numero").value="";
}

function resetar() {
    numerosArray.splice(0, numerosArray.length);
    console.log(numerosArray);
    document.getElementById("numero").value="";
}

function indice() {
    const indiceA = document.getElementById("indice").value;
     numerosArray.splice(indiceA, 1);
    console.log(numerosArray);
    document.getElementById("indice").value="";
    if(indiceA <= numerosArray.length) {
        console.log("ok");
    }else {
        alert("Indice Invalido!");
    }
    const lista = document.getElementById("lista");
    numerosArray.sort((a,b) => a-b);

    for(const element of numerosArray) {
        lista.innerHTML += `<li>${element}</li>`;
        console.log(element);
    }
}


 

