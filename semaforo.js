"use strict";

const getId = (elemento) => document.getElementById(elemento);

const semaforo = getId("semaforo")

const tornarVermelho = () => {
  semaforo.src = "img/vermelho.png"
};

const tornarAmarelo = () => {
  semaforo.src = "img/amarelo.png"
};

const tornarVerde = () => {
  semaforo.src = "img/verde.png"
};

const automatizar = () => {
    if((semaforo.src == "img/vermelho.png")){
        semaforo.src = "img/amarelo"
    } else if (semaforo.src == "img/amarelo.png") {
        semaforo.src = "img/verde.png"
    } else if (semaforo.src == "img/verde.png") {
        semaforo.src = "img/vermelho.png"
    } else {
        semaforo.src = "img/vermelho.png"
    }
};

//eventos
getId("vermelho").addEventListener("click", tornarVermelho);

getId("amarelo").addEventListener("click", tornarAmarelo);

getId("verde").addEventListener("click", tornarVerde);

getId("automatico").addEventListener("click", automatizar);
