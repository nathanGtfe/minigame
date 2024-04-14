
let body = document.getElementById('body');
let game = document.getElementById('game');
let gifParado = document.getElementById('people');
let bau = document.getElementById('bau');
let divbau = document.getElementById('divbau');
let divCoolisaof = document.getElementById('posicionamento');
let larguraPersonagem = gifParado.offsetWidth;
    let alturaPersonagem = gifParado.offsetHeight;
function tela (){
let tel = document.createElement('div');
tel.id = 'tela';
game.appendChild(tel);

let button = document.createElement('button');
button.innerHTML = "COMEÇAR";
button.id = 'comecar';
game.appendChild(button);

button.addEventListener('click', () => {
    game.removeChild(tel);
    game.removeChild(button);
alert('Welcome, voce foi desafiado a elevar o seu apredizado no ingles!');
alert('Por isso, voce esta preso nessa sala, o seu objetivo é interagir com o cenario em sua voltar e encontrar uma forma de escapar, boa sorte! ahhahahahahahah');


})}

tela();
function exibirAlerta() {
    alert("Existe alguns comandos que você precisa para interagir com alguns itens. Vamos começar abrindo aquele baú.");
}

// Chama a função exibirAlerta após 10 segundos (10000 milissegundos)
setTimeout(exibirAlerta, 30000);

let posicaoTopo = 200;
let posicaoEsquerda = 265;


let posicaoBauTopo = 138;
let posicaoBauEsquerda = 265;
// Variável de controle



let bus = document.getElementById('bus');
bus.addEventListener("click", () => {
alert('Para abrir o bau voce vai combinar duas palavras');
alert('"Open" Abrir, e "chest" baú');
alert('Insira o comando e veja a magia acontercer!')
});

function verificarColisaoGame() {
    let personagem = gifParado.getBoundingClientRect();
    let divCoolisao = game.getBoundingClientRect();

    let colidiu = !(
        personagem.right < divCoolisao.left ||
        personagem.left > divCoolisao.right ||
        personagem.bottom < divCoolisao.top ||
        personagem.top > divCoolisao.bottom
    );

    return colidiu;
}

function verificarColisao() {
    let personagem = gifParado.getBoundingClientRect();
    let divCoolisao = divCoolisaof.getBoundingClientRect();

    let colidiu = !(
        personagem.right < divCoolisao.left ||
        personagem.left > divCoolisao.right ||
        personagem.bottom < divCoolisao.top ||
        personagem.top > divCoolisao.bottom
    );

    return colidiu;

    }
    function criaPC(){
        let pc = document.getElementById('pc');
        pc.addEventListener('click', function() {
            alert('O computador esta desligado');
        })
    }

 function verificarColisao2() {
        let personagem = gifParado.getBoundingClientRect();
        let divCoolisao = divCoolisaof.getBoundingClientRect();
    
        let colidiu = !(
            personagem.right < divCoolisao.left ||
            personagem.left > divCoolisao.right ||
            personagem.bottom < divCoolisao.top ||
            personagem.top > divCoolisao.bottom
        );
    
        return colidiu;
    
        }
        function verificarColisao3() {
            let roupa = document.getElementById('roupa');
            let personagem = gifParado.getBoundingClientRect();
            let divCoolisao = roupa.getBoundingClientRect();
        
            let colidiu = !(
                personagem.right < divCoolisao.left ||
                personagem.left > divCoolisao.right ||
                personagem.bottom < divCoolisao.top ||
                personagem.top > divCoolisao.bottom
            );
        
            return colidiu;
        
            }
            function verificarColisaoBag() {
                let bag = document.getElementById('bag');
                let personagem = gifParado.getBoundingClientRect();
                let divCoolisao = bag.getBoundingClientRect();
            
                let colidiu = !(
                    personagem.right < divCoolisao.left ||
                    personagem.left > divCoolisao.right ||
                    personagem.bottom < divCoolisao.top ||
                    personagem.top > divCoolisao.bottom
                );
            
                return colidiu;
            
                }
                function verificarColisaoPc() {
                    let pc = document.getElementById('pc');
                    let personagem = gifParado.getBoundingClientRect();
                    let divCoolisao = pc.getBoundingClientRect();
                
                    let colidiu = !(
                        personagem.right < divCoolisao.left ||
                        personagem.left > divCoolisao.right ||
                        personagem.bottom < divCoolisao.top ||
                        personagem.top > divCoolisao.bottom
                    );
                
                    return colidiu;
                
                    }

        function criarCaderno(){
            let inventario = document.getElementById('inventario')
            let caderno = document.createElement('img');
            caderno.src = 'img/caderno.png';
            caderno.id = 'caderno';
            inventario.appendChild(caderno);
            

            caderno.addEventListener('click', function(){
                let cadernoAberto = document.createElement('img');
                cadernoAberto.src = 'img/caderno2.png';
                cadernoAberto.id = 'caderno2';
                game.appendChild(cadernoAberto);
                let buttomC = document.createElement('button');
                buttomC.innerHTML = 'exit';
                buttomC.id = 'buttonC';
                game.appendChild(buttomC);
                buttomC.addEventListener('click', function (){
                   game.removeChild(cadernoAberto);
                   game.removeChild(buttomC);
        
                })
                
        
            });
        }
function interacaoChave() {
    let chave = document.getElementById('chave')
    let personagem = gifParado.getBoundingClientRect();
    let chaveColizao = chave.getBoundingClientRect();

    let colidiu = !(
        personagem.right < chaveColizao.left ||
        personagem.left > chaveColizao.right ||
        personagem.bottom < chaveColizao.top ||
        personagem.top > chaveColizao.bottom
    );

    return colidiu;
}
function criarChave(){
    let chave2 = document.createElement('img');
    chave2.src = 'img/chave.png';
    chave2.id = 'chave2';
    game.appendChild(chave2);

}
function criarCloset(){
    let closet = document.createElement('img');
    closet.src = 'img/closet.png';
    closet.id = 'closet';
    game.appendChild(closet);

}

function criaPapel (){
    let papel = document.getElementById('papel');
    papel.addEventListener('click', () => {
        let papel2 = document.createElement('img');
       papel2.src = 'img/papel.png';
        papel2.id = 'papel2';
        game.appendChild(papel2);

        let divbag = document.createElement('div');
        divbag.id = 'divbag';
        game.appendChild(divbag);

        let buttombag = document.createElement('button');
                buttombag.innerHTML = 'exit';
                buttombag.id = 'buttonbag';
                game.appendChild(buttombag);
                buttombag.addEventListener('click', function (){
                   game.removeChild(papel2);
                   game.removeChild(buttombag);
                   game.removeChild(divbag);})
    })
}
function criarBauAberto() {
    
        bau.style.opacity = '0';
        
        let bauAberto = document.createElement('img');
        bauAberto.src = 'img/bau-aberto.png';
        bauAberto.id= 'bauAberto';
        bauAberto.style.position = 'absolute';
        bauAberto.style.top = posicaoBauTopo + "px";
        bauAberto.style.left = posicaoBauEsquerda + "px";
        game.appendChild(bauAberto);
        

      
        // Define a variável de controle como true para indicar que o bauAberto foi adicionado
    } 
    function removerElemento() {
        let selector = document.querySelectorAll('bauAberto');
        bauAberto.style.opacity = '0%';
        
        bau.style.opacity = '100%';
        console.log('oi');
    }
function interacaoPc(){
    let pc = document.createElement('img');
    pc.src = 'img/pcligado.png';
    pc.id = 'pcligado';
    game.appendChild(pc);
    let divbag = document.createElement('div');
    divbag.id = 'divbag';
    game.appendChild(divbag);

    let buttombag = document.createElement('button');
            buttombag.innerHTML = 'exit';
            buttombag.id = 'buttonbag';
            game.appendChild(buttombag);
            let pcinput = document.createElement('input');
    pcinput.id = 'pcinput';
    game.appendChild(pcinput);
   
   
    let buttombPC = document.createElement('button');
    buttombPC.innerHTML = 'enter';
    buttombPC.id = 'buttonPc';
    game.appendChild(buttombPC) 
                
                    let img1 = document.createElement("img");
            buttombPC.addEventListener('click',  function(event) {

                if(pcinput.value === "cheese"){
                    
                    img1.id = 'img1';
                    img1.src = "img/1.png";
                    game.appendChild(img1);
                    alert("essa sao é uma foto capturada algumas horas antes!")
                }
                    
                });
    
            
            buttombag.addEventListener('click', function (){
              
               game.removeChild(pc);
               game.removeChild(buttombPC);
               game.removeChild(divbag); 
               game.removeChild(buttombag)
               game.removeChild(pcinput);
            game.removeChild(img1)})
}


function atualizarPosicao() {
    gifParado.style.top = posicaoTopo + "px";
    gifParado.style.left = posicaoEsquerda + "px";
}

document.addEventListener('keydown', function(event) {
    let tecla = event.keyCode;

    // Calcula as novas posições do personagem
    let novaPosicaoEsquerda = posicaoEsquerda;
    let novaPosicaoTopo = posicaoTopo;

        switch (tecla) {
        case 37:
            novaPosicaoEsquerda -= 10;
            
            break;
        case 38:
            novaPosicaoTopo -= 10;
         
            break;
        case 39:
            novaPosicaoEsquerda += 10;
            
            break;
        case 40:
            novaPosicaoTopo += 10;
           
            break;
    }
    atualizarPosicao();

 // Verifica se houve colisão com as paredes
let divParedes = [document.getElementById("colisao"), 
document.getElementById("colisao1"), 
document.getElementById("colisao2"), 
document.getElementById("colisao3")];
let personagem = gifParado.getBoundingClientRect();

let colidiuComAlgumaParede = false;

for (let i = 0; i < divParedes.length; i++) {
let divColisao = divParedes[i].getBoundingClientRect();
let colidiu = !(novaPosicaoEsquerda + personagem.width < divColisao.left ||
 novaPosicaoEsquerda > divColisao.right ||
 novaPosicaoTopo + personagem.height < divColisao.top ||
 novaPosicaoTopo > divColisao.bottom);

if (colidiu) {
colidiuComAlgumaParede = true;
break; // Se houver colisão com uma parede, não é necessário verificar as outras
}
}

if (!colidiuComAlgumaParede) {
// Se não houver colisão com nenhuma parede, atualize a posição do personagem
posicaoEsquerda = novaPosicaoEsquerda;
posicaoTopo = novaPosicaoTopo;
atualizarPosicao();
}  });

let input = document.getElementById('in');
let buttom = document.getElementById('bu');

input.addEventListener('keydown', (event) => {

    if(event.keyCode === 13) {
        let input = document.getElementById('in');
// Use uma estrutura if-else para verificar a condição desejada
     if (interacaoChave() && input.value === "Get key") { 
    alert('Voce pegou a Chave');
    let chave = document.getElementById('chave');
    chave.style.opacity = '0%';
    chave.style.top = '140px';
    chave.style.left = '265px';
    chave.style.height = '120px';
    chave.style.width = '120px';
    criarChave();
    

    } else if (interacaoChave() && verificarColisao() && input.value === "Open chest") {
        alert('baú aberto');
        criarBauAberto();
        alert('Voce adquiriu um item! Aqui esta alguns verbos para te orientar, boa sorte! ')
        criarCaderno();
    }
    
    else if (input.value === "Open chest"){
    alert('hmmm... Parece que o baú está trancado, procure a chave(key)');
    alert('Tente utilizar a Palavra "Open" para interagir com outros objetos que deseja colocando o nome deles em ingles');} 
    
    else if (verificarColisao3() && input.value === "Open closet"){
        alert('Voce encontrou outro iten!');
       criarCloset();
       chave.style.opacity = '100%';
       alert('Para pegar a chave digite: Get key(Pegar chave)');

    } else if (verificarColisaoBag() && input.value === "Open bag"){
        let bag = document.createElement('img');
        bag.src = 'img/bag2.png';
        bag.id = 'bag2';
        game.appendChild(bag);
        alert('teste')
        let divbag = document.createElement('div');
        divbag.id = 'divbag';
        game.appendChild(divbag);

        let buttombag = document.createElement('button');
                buttombag.innerHTML = 'exit';
                buttombag.id = 'buttonbag';
                game.appendChild(buttombag);
                buttombag.addEventListener('click', function (){
                   game.removeChild(bag);
                   game.removeChild(buttombag);
                   game.removeChild(divbag);})

    }
    else if (verificarColisaoPc() && input.value === "Connect Pc"){
       
                  interacaoPc();
                  

    }
    else{
        alert('Comando invalido')


    }
    } });


   

    console.log(input.value);


    var altura = game.offsetHeight;
    var largura = game.offsetWidth;

    // Exibe a altura e a largura no console ou em outro lugar desejado
    console.log('Altura:', altura, 'px');
    console.log('Largura:', largura, 'px');


    criaPC();
    criaPapel();
    
    var larguraTotal = window.innerWidth;
var alturaTotal = window.innerHeight;

console.log('Largura total da janela:', larguraTotal, 'px');
console.log('Altura total da janela:', alturaTotal, 'px');
