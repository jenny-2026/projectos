function sortear() {

    const max = Math.floor(document.querySelector(".maximo").value)
    const min = Math.ceil(document.querySelector(".minimo").value)
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    
alert(`O número sorteado é: ${result}`);


}

