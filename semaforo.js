"use strict";

const 

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

const semaforoDesligado = () => semaforo.src.includes("desligado")

const automatico = () => {
    const botaoAutomatico = getId("automatico")
    
}

const automatizar = () => {
    if(semaforo.src.includes("desligado")) {
        semaforo.src = "img/vermelho"
    } else if(semaforo.src.includes("vermelho") {
        semaforo.src = "img/amarelo.png"
    } else if (semaforo.src.includes("amarelo")) {
        semaforo.src = "img/verde.png"
    } else if (semaforo.src.includes("verde")) {
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
