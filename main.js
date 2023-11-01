function tocaSom (idElement) {
    document.querySelector(idElementoAudio).play();


}

//o que é uma constante...
const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while(contador < listaDeTeclas.length) {
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function()
    {
        tocaSom(this.idAudio);
    }
    contador = contador + 1;
    console.log(contador);

}

