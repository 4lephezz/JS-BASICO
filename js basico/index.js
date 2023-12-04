/*
var dia = prompt("Qual dia que você nasceu?")
var mes = prompt("Qual mês você nasceu?")
var ano = prompt("Em que ano você nasceu?")




var data = dia +"/"+ mes +"/"+ ano;

alert("Seu aniversario é dia" +" "+ data)




var listaDeCarros = ["Palio", "Jetta", "Mustang", "Gol"];

var elementoLista = document.getElementById("lista");

var elementoItem = document.createElement("li");
elementoItem.innerText = "Palio"
elementoLista.appendChild(elementoItem);


    
})



var listaDeCarros = ["Palio", "Jetta", "Mustang", "Gol"];

var elementoLista = document.getElementById("lista");


var elementoItemPalio = document.createElement("li");


listaDeCarros.forEach(carro => {
    var elementoItem = document.createElement("li");
    elementoItem.innerText = carro;
    elementoLista.appendChild(elementoItem);
});


var elementoLista = document.getElementById("lista");

var cruzeiro = { nome: "cruzeiro", cor: "Azul", melhorJogador: "Bruno Rodrigues"};
var america = { nome: "America", cor: "Verde",  melhorJogador: "Pedro"};
var atletico = { nome: "Atletico", cor: "Preto",  melhorJogador: "Daniel Amorim"};
var corinthians = { nome: "Corinhians", cor: "Vermelho",  melhorJogador: "Yuri Alberto"};
var vasco = { nome: "Vasco", cor: "Preto",  melhorJogador: "Cano"};
var palmeiras = { nome: "Palmeiras", cor: "Verde", melhorJogador: "Gustavo Scarpa"};

var listaDeTimes = [cruzeiro, america, atletico, corinthians, vasco, palmeiras];

var li = document.createElement("li");
li.innerText = "O time se chama " + listaDeTimes[0].nome + " e sua cor é " + 
listaDeTimes[0].cor +", "+ " atualmente o melhor jogador é " + listaDeTimes[0].melhorJogador;
elementoLista.appendChild(li);
console.log(li);

var li = document.createElement("li");
li.innerText = "O time se chama " + listaDeTimes[1].nome + " e sua cor é " +
listaDeTimes[1].cor +", "+ " atualmente o melhor jogador é " + listaDeTimes[1].melhorJogador;
elementoLista.appendChild(li);
console.log(li);

var li = document.createElement("li");
li.innerText = "O time se chama " + listaDeTimes[2].nome + " e sua cor é " +
listaDeTimes[2].cor +", "+ " atualmente o melhor jogador é " + listaDeTimes[2].melhorJogador;
elementoLista.appendChild(li);
console.log(li);

var li = document.createElement("li");
li.innerText = "O time se chama " + listaDeTimes[3].nome + " e sua cor é " +
listaDeTimes[3].cor +", "+ " atualmente o melhor jogador é " + listaDeTimes[3].melhorJogador;
elementoLista.appendChild(li);
console.log(li);

var li = document.createElement("li");
li.innerText = "O time se chama " + listaDeTimes[4].nome + " e sua cor é " +
listaDeTimes[4].cor +", " + " atualmente o melhor jogador é " + listaDeTimes[4].melhorJogador;
elementoLista.appendChild(li);
console.log(li);

var li = document.createElement("li");
li.innerText = "O time se chama " + listaDeTimes[5].nome + " e sua cor é " +
listaDeTimes[5].cor +", "+ " atualmente o melhor jogador é " + listaDeTimes[5].melhorJogador;
elementoLista.appendChild(li);
console.log(li);






var listaDeTimes = [
    { nome: "Cruzeiro", cor: "Azul" },
    { nome: "América", cor: "Verde" },
    { nome: "Atlético", cor: "Preto e Branco" },
];

listaDeTimes.forEach(time => {
    var li = document.createElement("li");

    if (time.nome == "Cruzeiro") {
        li.innerText = "O time se chama " + time.nome + " e é uma seleção.";
    } else {
        li.innerText = "O time se chama " + time.nome + " e a sua cor favorita é " + time.cor;
    }

    elementoLista.appendChild(li);
}
)
;


var ListaDeFilmes = {
capAmerica:  " Capitão América ",
capMarvel:  " Capitã Marvel ",
homemDeFerro:  " Homem de Ferro ",
hulk:  " O Incrível Hulk ",
homemDeFerro2:  " Homem de Ferro 2 ",
thor:  " Thor ",
vingadores:  " Os Vingadores ",
}





var empresa = {
nome:  " nome ",
google:  " Google ",
seuRamo:  " Ramo ",
tec:  " Tecnologia ",
possui:  " 9900 funcionarios ",
sede:  " Sede ",
lugar:  " California ",
fun:  " fundada ",
tempo:  1998,
}

console.log("O " + nome +
 " da empresa é " + google + " e o seu " 
 + seuRamo + " é " + tec + ". Ela possui" + possui + ". Sua" +
 sede + " é na " + lugar + ". Foi " + fun + " em "+ tempo   );
*/




