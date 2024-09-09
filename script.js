window.addEventListener("DOMContentLoaded", () => {
    let listaDeNotas = [];
    let inputTexto = document.getElementById("descriptionId");
    let botonEnviar = document.querySelector(".btn");
    let botonVerNotas = document.querySelector(".btn2");

    botonEnviar.addEventListener("click", event => {
        event.preventDefault();

        listaDeNotas.push(inputTexto.value);
        inputTexto.value = "";

        console.log(listaDeNotas)
    });


    botonVerNotas.addEventListener("click", event => {
        event.preventDefault();

        let todasLasNotas = "";
        
        listaDeNotas.forEach(nota => {
            todasLasNotas += nota + "\n"
        })

        alert(todasLasNotas)
    })
});