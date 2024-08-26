function somar(args) {
    const soma = args
        .map(Number)        
        .filter(num => num % 2 === 0)  
        .reduce((acc, num) => acc + num, 0);  

    console.log(`A soma de divisíveis por 2: ${soma}`);
}


const fs = require('fs');
const readline = require('readline');

function salvar() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let palavras = new Set();  

    function perguntar() {
        rl.question('Digite uma palavra, ou "sair": ', (resposta) => {
            if (resposta.toLowerCase() === 'sair') {
                const palavrasArray = Array.from(palavras);
                fs.writeFileSync('palavras.json', JSON.stringify(palavrasArray, null, 2));
                rl.close();
            } else {
                if (resposta.trim()) {
                    palavras.add(resposta.trim());
                }
                perguntar();
            }
        });
    }

    perguntar();
}

const args = process.argv.slice(2);
somar(args);
salvar();



//  //Escrevendo em Arquivos
// palavra += "\r\n"
// palavra2 += "\r\n"
// //  versão síncrona
// var arquivo2 = fs.writeFileSync("pacote.txt", palavra, {encoding: "utf-8", flag:"a"});
// //  versão assíncrona
// var arquivo2 = fs.writeFile("pacote.txt", palavra2, {encoding: "utf-8", flag:"a"}, function(erro, arquivo2){
//     console.log(erro);
// });