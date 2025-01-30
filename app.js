// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if(nombre == ''){
        alert('Por favor, inserte un nombre');
        return false;
    } else if(nombre.match(/\d/)){
        alert('El nombre no puede contener numeros');
        return false;
    } else if(amigos.includes(nombre)){
        alert('El amigo ya fue ingresado en el sorteo')
        return false;
    } else {
        amigos.push(nombre);
        recorrerLista();     
    }
    console.log(amigos);
    document.getElementById("amigo").value="";   
    
}
console.log(amigos)

function recorrerLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i=0; i<amigos.length;i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if(amigosSorteados.length==amigos.length){
        alert('Ya fueron sorteados todos los nombres');
        amigosSorteados =[];
        return;
    }
    
    let indiceNombre =0;
    do {
        indiceNombre = Math.floor(Math.random() * amigos.length);
    } while (amigosSorteados.includes(indiceNombre)); 
    
    document.getElementById('resultado').textContent = `El nombre sorteado es: ${amigos[indiceNombre]}`;
    amigosSorteados.push(indiceNombre);

    if(amigos.length === 0){
        alert('No se puede realizar el sorteo');
        return;
    }
    
}