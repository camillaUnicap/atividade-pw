
const numerosArray = [];

function vetorI() {
    const numero = document.getElementById("numero").value;
    console.log(numero);
    
    numerosArray.push(numero);
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
}

function indice() {
    const indiceA = document.getElementById("indice").value;
   const fila =  numerosArray.splice(indiceA, 1);
    console.log(numerosArray);
    if(indiceA < numerosArray.length) {
        console.log("ok");
    }else {
        alert("Indice Invalido!");
    }
}
