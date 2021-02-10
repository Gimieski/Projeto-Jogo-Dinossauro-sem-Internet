const dino=document.querySelector(".dino");
        const background=document.querySelector(".background");
        let isJump=false;
        let isGM=false;
        // criei uma variavel se é game over, recebe false
        
        function jump(){
            isJump=true;
            dino.classList.add("animando");
  
            setTimeout(function(){
              dino.classList.remove("animando");
              isJump=false;
            },400)
        }
        document.addEventListener("keydown",function (event){
            var teclas=(event.keyCode);
            if(event.keyCode===32 && !isJump){
              jump();
            }
// referencia-se a boolean de dentro
            if(event.keyCode===71 && isGM ){
                document.location.reload(true);
            }
            
        })

        function gameOver(){
            isGM=true;
            document.body.innerHTML="<h1 class=gm>Fim de jogo</h1><p class=parag>Aperte >>G<< para Reiniciar</p>"
            }
            // quando executar fica true

    function createCacto(){
    const cacto=document.createElement('div');
    cacto.classList.add('cactus')
    let cactosPosition=1000;
    cacto.style.left=cactosPosition+"px"
    background.appendChild(cacto);
    let randomTIme=Math.random()*6000;

    
    let leftInterval=setInterval(()=>{
        if(cactosPosition < -60){
            // menor que 60px
            clearInterval(leftInterval);
            background.removeChild(cacto);
        }else if(cactosPosition >0 && cactosPosition < 60 && !isJump){
            /*se a posição do cactosPosition for maior que zero(ele ainda ta na tela),for menor
             que 60(ou seja não passou do dino ainda, que ocupa os 60px da tela e a posição do 
            dino for menor que 60(ele não pulou ainda), game over */
            clearInterval(leftInterval);
            gameOver()
        }else{
            cactosPosition -=10;
            cacto.style.left=cactosPosition+"px";
        }
    },20);

    setTimeout(createCacto, randomTIme);
}

createCacto()
  
      