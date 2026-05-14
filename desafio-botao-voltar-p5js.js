let passoAtual = 1;

const passos = {
  1: {
    texto: "Você está na entrada de uma floresta misteriosa. O que deseja fazer?",
    botoes: [
      { texto: "Seguir pela trilha", acao: () => passoAtual = 2 },
      { texto: "Explorar as ruínas", acao: () => passoAtual = 3 }
    ]
  },
  2: {
    texto: "A trilha leva a uma ponte velha sobre um rio barulhento.",
    botoes: [
      { texto: "Atravessar a ponte", acao: () => passoAtual = 4 },
      { texto: "Voltar", acao: () => passoAtual = 1 }
    ]
  },
  3: {
    texto: "Nas ruínas você encontra um baú antigo trancado por uma senha.",
    botoes: [
      { texto: "Tentar abrir o baú", acao: () => passoAtual = 5 },
      { texto: "Voltar", acao: () => passoAtual = 1 }
    ]
  },
  4: {
    texto: "Parabéns! Você atravessou com segurança e encontrou o vilarejo escondido.",
    botoes: [
      { texto: "Voltar para a ponte", acao: () => passoAtual = 2 }
    ]
  },
  5: {
    texto: "O baú tinha uma armadilha gasosa. Você precisa recuar imediatamente!",
    botoes: [
      { texto: "Voltar para as ruínas", acao: () => passoAtual = 3 }
    ]
  }
};

function setup() {
  createCanvas(500, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(15, 23, 42); // #0f172a
  
  let passo = passos[passoAtual];
  
  // Desenhar caixa de texto
  fill(30, 41, 59); // #1e293b
  rect(50, 100, 400, 200, 12);
  
  // Desenhar texto
  fill(248, 250, 252); // #f8fafc
  textSize(20);
  textAlign(CENTER, CENTER);
  text(passo.texto, 80, 120, 360, 180);
  
  // Desenhar botões
  let botaoY = 350;
  passo.botoes.forEach((botao, index) => {
    desenharBotao(botao, botaoY + index * 70, index);
  });
}

function desenharBotao(botao, y, index) {
  let x = width / 2;
  let largura = 200;
  let altura = 50;
  
  // Cor do botão
  if (index === 0) {
    fill(59, 130, 246); // Azul para próximo
  } else {
    fill(239, 68, 68); // Vermelho para voltar
  }
  
  rect(x - largura / 2, y, largura, altura, 8);
  
  // Texto do botão
  fill(248, 250, 252);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(botao.texto, x, y + altura / 2);
}

function mousePressed() {
  let passo = passos[passoAtual];
  let botaoY = 350;
  
  passo.botoes.forEach((botao, index) => {
    let x = width / 2;
    let largura = 200;
    let altura = 50;
    let y = botaoY + index * 70;
    
    // Detectar clique no botão
    if (
      mouseX > x - largura / 2 &&
      mouseX < x + largura / 2 &&
      mouseY > y &&
      mouseY < y + altura
    ) {
      botao.acao();
    }
  });
  
  return false;
}
