"use strict";

const getId = (elemento) => document.getElementById(elemento);

let idVermelho;
let idAmarelo;
let idVerde;
const semaforo = getId("semaforo");

const tornarVermelho = () => {
  semaforo.src = "img/vermelho.png";
};

const tornarAmarelo = () => {
  semaforo.src = "img/amarelo.png";
};

const tornarVerde = () => {
  semaforo.src = "img/verde.png";
};

const pararAutomatizar = () => {
  clearInterval(idVermelho);
  clearInterval(idAmarelo);
  clearInterval(idVerde);
};

const automatizarSemaforo = () => {
  const botaoAutomatico = getId("automatico");
  if (botaoAutomatico.textContent == "Automático") {
    idVermelho = setInterval(tornarVermelho, 2300);
    idAmarelo = setInterval(tornarAmarelo, 2400);
    idVerde = setInterval(tornarVerde, 2500);
    botaoAutomatico.textContent = "Parar";
  } else {
    pararAutomatizar();
    botaoAutomatico.textContent = "Automático";
  }
};

//eventos
getId("vermelho").addEventListener("click", tornarVermelho);

getId("amarelo").addEventListener("click", tornarAmarelo);

getId("verde").addEventListener("click", tornarVerde);

getId("automatico").addEventListener("click", automatizarSemaforo);
