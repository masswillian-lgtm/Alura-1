// Array com as mensagens do desafio
const mensagens = [
  "Você encontrou o tesouro perdido e se tornou rico! 💰",
  "Um dragão apareceu e você teve que fugir para sempre! 🐉",
  "Você descobriu um portal secreto para outra dimensão! 🌌"
];

let mensagemSorteada = "";
let botaoClicado = false;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  
  // Sorteia uma mensagem aleatória ao carregar
  const indiceAleatorio = floor(random(mensagens.length));
  mensagemSorteada = mensagens[indiceAleatorio];
}

function draw() {
  // Fundo
  background(244, 244, 249); // #f4f4f9
  
  // Título
  fill(0);
  textSize(32);
  textStyle(BOLD);
  text("Resultado da sua Aventura", width / 2, 60);
  
  // Caixa com a mensagem
  fill(255);
  stroke(0, 118, 214); // #0076d6
  strokeWeight(2);
  // Desenha um retângulo tracejado simulado
  rect(150, 150, 300, 120, 8);
  
  // Texto da mensagem
  fill(51); // #333
  textSize(24);
  textStyle(BOLD);
  text(mensagemSorteada, 150, 150, 300, 120);
  
  // Botão para sortear novamente
  desenharBotao(width / 2 - 100, 320, 200, 50, "Sortear Novamente");
}

function desenharBotao(x, y, largura, altura, texto) {
  // Verificar se o mouse está sobre o botão
  let sobre = mouseX > x && mouseX < x + largura && mouseY > y && mouseY < y + altura;
  
  if (sobre) {
    fill(0, 100, 200);
    cursor(HAND);
  } else {
    fill(0, 118, 214);
    cursor(ARROW);
  }
  
  rect(x, y, largura, altura, 8);
  
  // Texto do botão
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(texto, x + largura / 2, y + altura / 2);
}

function mousePressed() {
  // Detectar clique no botão
  let x = width / 2 - 100;
  let y = 320;
  let largura = 200;
  let altura = 50;
  
  if (mouseX > x && mouseX < x + largura && mouseY > y && mouseY < y + altura) {
    // Sorteia uma nova mensagem
    const indiceAleatorio = floor(random(mensagens.length));
    mensagemSorteada = mensagens[indiceAleatorio];
  }
  
  return false;
}
