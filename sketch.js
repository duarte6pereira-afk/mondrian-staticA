const CANVAS_SIZE = 800;

const CORES = {
  FUNDO: '#f2eee5',
  vermelho: '#c8261d', 
  azul: '#173f8a',
  amarelo: '#f3bd19',
  preto:'#181716'
  };

  function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    noLoop();
    }

    function draw(){
    background(CORES.FUNDO);

//Blocos de cor
    drawRect(0, 0, width * 0.65, height * 0.65, CORES.vermelho);
drawRect(width *0.65, height *0.75, width * 0.35, height * 0.25, CORES.azul);
drawRect(0, height *0.85, width *0.18, height * 0.15, CORES.amarelo);

// Linhas pretas estruturais
stroke(CORES.preto);
strokeCap(SQUARE);

drawLinhacomEspessura(width * 0.65, 0, width * 0.65, height, 18);
drawLinhacomEspessura(width *0.18, height * 0.65, width * 0.18, height, 14);

drawLinhacomEspessura(0, height * 0.65, width, height * 0.65, 18);
drawLinhacomEspessura(width * 0.65, height * 0.75, width, height * 0.75, 14);
drawLinhacomEspessura(0, height * 0.85, width * 0.65, height * 0.85, 14);

}

function keyPressed() {
  if (key === 's' || key === 'S') {
saveCanvas('mondrian', 'png');
  }
}

function drawRect(x, y, w, h, cor)  {
  push();
  fill(cor);
  noStroke();
  rect(x, y, w, h);
  pop();

  }

  function drawLinhacomEspessura(x1, y1, x2, y2, espessura) {
push();
  strokeWeight(espessura);
line(x1, y1, x2, y2);
pop();
}
