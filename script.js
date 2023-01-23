const prompt = require('prompt-sync')();

const comandos = []

let condicao = false;


const comando = ()=>{
    let css = prompt('Digite um comando CSS: ');
    comandos.push(css)
}

const continuar = ()=>{
    let pergunta = prompt('Deseja continuar? (CONTINUAR/SAIR) ').toUpperCase()
    switch(pergunta){
        case 'CONTINUAR':
            condicao = false
            comando()
        break

        case 'SAIR':
            condicao = true
            comandos.sort()
            console.log(comandos)
        break

        default:
            console.log('Opção Inválida')
    }
    return pergunta
}

comando()

while(!condicao){
    continuar()
}
