"use strict";

var dato = "un ejemplo";
function saludar() {
    window.alert("hola, qué tal");
    var lista = [2, 3, 5, 7];
    lista.map(function (x) {
        return x * x;
    }).forEach(function (x) {
        return console.log(x);
    });
}
