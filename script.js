const txtArea = document.getElementById("txt");
const numPalavras = document.querySelector(".qntPalavras");
const numLetras = document.querySelector(".qntLetras");


txtArea.addEventListener("keyup", (e) => {
    let frase = e.target.value
    let qntPalavras = frase.split(" ").filter((item) =>  /\S/.test(item));
    let qntLetras = frase.split("").filter((item) => /\S/.test(item))
    numPalavras.textContent = qntPalavras.length
    numLetras.textContent = qntLetras.length
})