const perguntas = [
  {
    pergunta: "Qual é o nome do movimento de flexionar o cotovelo?",
    opcoes: ["Extensão", "Flexão", "Rotação", "Abdução"],
    resposta: 1
  },
  // Adicione mais perguntas aqui...
];

let indice = 0;
let pontuacao = 0;

const quiz = document.getElementById("quiz");
const inicio = document.getElementById("inicio");
const perguntaContainer = document.getElementById("perguntaContainer");
const scoreDisplay = document.getElementById("score");
const progresso = document.getElementById("progresso");

function iniciarQuiz() {
  inicio.style.display = "none";
  quiz.style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  perguntaContainer.innerHTML = "";
  const q = perguntas[indice];
  const perguntaEl = document.createElement("h2");
  perguntaEl.textContent = q.pergunta;
  perguntaContainer.appendChild(perguntaEl);

  q.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.setAttribute("aria-label", `Opção ${opcao}`);
    btn.onclick = () => verificarResposta(i, btn);
    perguntaContainer.appendChild(btn);
  });

  progresso.value = (indice / perguntas.length) * 100;
}

function verificarResposta(i, btn) {
  const correta = perguntas[indice].resposta;
  if (i === correta) {
    pontuacao++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("incorrect");
  }

  Array.from(perguntaContainer.getElementsByTagName("button")).forEach(b => b.disabled = true);

  setTimeout(() => {
    indice++;
    if (indice < perguntas.length) {
      mostrarPergunta();
    } else {
      perguntaContainer.innerHTML = "<h2>Quiz finalizado!</h2>";
      scoreDisplay.textContent = `Você acertou ${pontuacao} de ${perguntas.length}`;
    }
  }, 1000);
}
