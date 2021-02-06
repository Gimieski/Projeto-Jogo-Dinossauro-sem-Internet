const dino=document.querySelector(".dino");
const background=document.querySelector(".background");
let isJump=false;
let position=0;
// uma variavel para escopo de bloco, no escopo global(para pegar a di dino)

function keyUp(event){
    if(event.keyCode===32 && !isJump){
           jump(); 
    }
}
/*quando essa função for executada, ela verifica se o codigo 32(que ta no parametro) é apertado 
e se nãó esta pulando, então executa uma instrução que é a função jump. Então se apertar 32, esta
pulando*/

function jump(){
    isJump=true;
/*essa variavel vai setar uma função arrow com interval de 20(executa essa funçãoa cada 20 
milisegundos. Quando executa a função(quando aperta espaço) vai adicionar posição +20 que vai se
igual a pixels e adicionar mais a cada 20 milesegundos
*/
    let upIntervalo = setInterval(() =>{
        if(position >=150){
            clearInterval(upIntervalo);
/* se a posição for maior ou igual a 150, vai executar a função downInterval, que se a posição 
for 0 vai parar de descer e ela vai descer 20*/
            let downIntervalo=setInterval(() =>{
                if(position <=0){
                    clearInterval(downIntervalo);
                    isJump=false;
                }else{
                position -=20;
                dino.style.bottom =position+"px"
                } 
            },20 );  

        }else{  
        position +=20;
        dino.style.bottom =position+"px"
        // a cada loop, vai adicionar 20 ao position. Com isso definimos que position é igual a pixels, então 20px
        }
    },20);
}

function createCacto(){
    const cacto=document.createElement('div');
    let cactosPosition=1000;
    cacto.style.left=cactosPosition+"px"
    let randomTIme=Math.random()*6000;

    cacto.classList.add('cactus')
    background.appendChild(cacto);

    let leftInterval=setInterval(()=>{
        if(cactosPosition < -60){
            // menor que 60px
            clearInterval(leftInterval);
            background.removeChild(cacto)
        }else if(cactosPosition >0 && cactosPosition < 60 && position < 60){
            /*se a posição do cactosPosition for maior que zero(ele ainda ta na tela),for menor
             que 60(ou seja não passou do dino ainda, que ocupa os 60px da tela e a posição do 
            dino for menor que 60(ele não pulou ainda), game over */
            clearInterval(leftInterval);
            document.body.innerHTML="<h1 class=gm>Fim de jogo</h1>"        
        }else{
            cactosPosition -=10;
            cacto.style.left=cactosPosition+"px";
        }
    },20);

    setTimeout(createCacto, randomTIme);
}
createCacto();
// keyCode é o codig de cada tecla. Usammos isso para identificar uma tecla no js.
// para ficar mais facil, um site mostra esses codigos:https://keycode.info/
document.addEventListener("keyup", keyUp);

/* O primeiro parâmetro é o tipo de evento (como " click" ou " mousedown" ou qualquer outro
 evento HTML DOM .)

O segundo parâmetro é a função que queremos chamar quando o evento ocorrer.Não vai ter um evento
que não faz nada né!

O terceiro parâmetro é um valor booleano que especifica se deve ser usado o bubbling ou a 
captura de evento. Este parâmetro é opcional */