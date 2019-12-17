var lista = ["maca", "pera", "uva"];
var fruta = { nome: "maça", cor: "vermelha" };
var frutas = [
  { nome: "maça", cor: "vermelha" },
  { nome: "uva", cor: "roxa" }
];

//fruta.nome json por nome
//lista.push("abacate"); inclui array
//lista.pop("laranja"); retira item array
//lista.length //tamanho array
// lista.reverse()  lista reversa elemento contratrio array

//lista.toString()  tranforma em extring

//console.log(lista[0]) primeiro da lista
//lista.join("!")
//console.log(frutas); //imprime todas as listas
//console.log(frutas[0].nome); nome do primeiro posicação

//alert(lista.join("!"));

var idade = 18;

if (idade > 18) {
  console.log("maior de idade");
}

var count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}

//for
var count;
for (count = 0; count <= 5; count++) {
  console.log(count);
}

//data
var d = new Date();
console.log(d);

console.log(d.getMonth() + 1); //sempre começa do 0 getMonth
console.log(d.getMinutes());
//

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(1, 2));

function setReplace(frase, nome, repl) {
  return frase.replace(nome, repl);
}
console.log(setReplace("vai Japão", "Japão", "brazil"));

function testeOnclic() {
  document.getElementById("agradecimento").innerHTML = "<b>abrigado<b>";
  console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
  window.open("http://www.google.com.br"); //em outra janela
  window.location.href("http://www.google.com.br"); //mesma aba
}

function trocar(elemento) {
  //document.getElementById("trocar").innerHTML = "<b>mouver hover<b>";
  elemento.innerHTML = "<b>mouver hover<b>";
}
function voltar(elemento) {
  //document.getElementById("trocar").innerHTML = "<b>passe o mouse<b>";

  elemento.innerHTML = "<b>passe o mouse<b>";
}

function load() {
  alert("pagina carregada");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}
