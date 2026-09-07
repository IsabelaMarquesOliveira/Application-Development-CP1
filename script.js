const produtos = [
  {
    nome: "Smartphone X Pro",
    descricao: "Tela OLED de 6.7\", 256GB de armazenamento e Câmera de 108MP.",
    preco: 4500,
    imagem: "./img/smartphone.jpg"
  },
  {
    nome: "Notebook Ultra",
    descricao: "Processador i7, 16GB RAM, SSD 512GB e Tela 15.6\" Full HD.",
    preco: 6200,
    imagem: "./img/notebook.jpg"
  },
  {
    nome: "Tablet Pad Pro",
    descricao: "Tela de 11\" a 120Hz, bateria de longa duração e compatível com caneta touch.",
    preco: 3800,
    imagem: "./img/tablet.jpg"
  },
  {
    nome: "Smartwatch Series 8",
    descricao: "Monitoramento de saúde, GPS integrado e resistente à água.",
    preco: 1500,
    imagem: "./img/smartwatch.jpg"
  },
  {
    nome: "Fone Noise Cancelling",
    descricao: "Fone sem fio over-ear com cancelamento ativo de ruído.",
    preco: 899,
    imagem: "./img/fone.jpg"
  },
  {
    nome: "Monitor Ultrawide",
    descricao: "Monitor 29\" IPS, formato 21:9 para maior produtividade.",
    preco: 1250,
    imagem: "./img/monitor.jpg"
  },
  {
    nome: "Teclado Mecânico RGB",
    descricao: "Switches azuis, retroiluminação customizável e anti-ghosting.",
    preco: 350,
    imagem: "./img/teclado.jpg"
  },
  {
    nome: "Mouse Sem Fio Ultra",
    descricao: "Sensor óptico de 16000 DPI, design ergonômico e bateria de longa duração.",
    preco: 280,
    imagem: "./img/mouse.jpg"
  }
];

const catalogoDiv = document.querySelector(".catalogo");

produtos.forEach((produto) => {
  catalogoDiv.innerHTML += `
    <div class="produto">
      <img src="${produto.imagem}">
      <h2>${produto.nome}</h2>
      <p>${produto.descricao}</p>
      <p class="preco">R$ ${produto.preco}</p>
    </div>
  `;
});