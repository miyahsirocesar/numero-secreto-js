alert('Bem vindo ao jogo!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute for diferente ao número secreto
while (chute != numeroSecreto) {    
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
    // Se o chute for igual ao secreto
    if (chute == numeroSecreto) {    
        break    
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor do que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
    
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí, você descobriu o número secreto ${numeroSecreto}! com ${tentativas} ${palavraTentativa}`);
// if (tentativas > 1){alert(`Isso aí, você descobriu o número secreto ${numeroSecreto}! com ${tentativas} tentativas`);
// }else {
//     alert(`Isso aí, você descobriu o número secreto ${numeroSecreto}! com ${tentativas} tentativa`);
// }

