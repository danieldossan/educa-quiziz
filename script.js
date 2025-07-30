// script.js
const perguntas = [
  {
    pergunta: "Qual é a frequência ideal para se praticar atividade física?",
    opcoes: ["1 vez por semana", "3-5 vezes por semana", "Todos os dias", "Nenhuma"],
    resposta: 1
  },
  {
    pergunta: "Qual é a função principal do sistema cardiovascular?",
    opcoes: ["Respiração", "Transporte de nutrientes e oxigênio", "Movimento corporal", "Sistema nervoso"],
    resposta: 1
  },
  {
    pergunta: "Qual é o principal benefício do alongamento antes do exercício?",
    opcoes: ["Aumentar a força muscular", "Melhorar a flexibilidade e prevenir lesões", "Reduzir a frequência cardíaca", "Aumentar a resistência"],
    resposta: 1
  },
  {
    pergunta: "Qual é o nome do hormônio liberado durante a prática de exercícios físicos que promove sensação de bem-estar?",
    opcoes: ["Adrenalina", "Cortisol", "Inulina", "Endorfina"],
    resposta: 3
  }
];


let indice = 0;
let pontuacao = 0;

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const scoreDisplay = document.getElementById("score");

function mostrarPergunta() {
  quiz.innerHTML = "";
  const q = perguntas[indice];
  const perguntaEl = document.createElement("h2");
  perguntaEl.textContent = q.pergunta;
  quiz.appendChild(perguntaEl);

  q.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(i);
    quiz.appendChild(btn);
  });
}

function verificarResposta(i) {
  if (i === perguntas[indice].resposta) {
    pontuacao++;
  }
  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    quiz.innerHTML = "Quiz finalizado!";
    scoreDisplay.textContent = `Você acertou ${pontuacao} de ${perguntas.length}`;
    nextBtn.style.display = "none";
  }
}

nextBtn.onclick = mostrarPergunta;
mostrarPergunta();
