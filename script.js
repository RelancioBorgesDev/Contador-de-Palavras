let txtArea = document.getElementById("txt");
let numPalavras = document.querySelector(".qntPalavras");
let numLetras = document.querySelector(".qntLetras");

console.log(numPalavras);

txtArea.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    let frase = e.target.value
    let qntPalavras = frase.split(" ").filter((item) =>  /\S/.test(item));
    let qntLetras = frase.split("").filter((item) => /\S/.test(item))
    numPalavras.textContent = qntPalavras.length
    numLetras.textContent = qntLetras.length
})