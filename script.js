const perguntas = [ /* seu array com perguntas */ ];

let indice = 0;
let pontuacao = 0;

const quiz = document.getElementById("quiz");
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
    btn.onclick = () => verificarResposta(i, btn);
    quiz.appendChild(btn);
  });
}

function verificarResposta(i, btn) {
  const correta = perguntas[indice].resposta;
  if (i === correta) {
    pontuacao++;
    btn.style.backgroundColor = "green";
  } else {
    btn.style.backgroundColor = "red";
  }

  // Desativar todos os botões
  Array.from(quiz.getElementsByTagName("button")).forEach(b => b.disabled = true);

  setTimeout(() => {
    indice++;
    if (indice < perguntas.length) {
      mostrarPergunta();
    } else {
      quiz.innerHTML = "Quiz finalizado!";
      scoreDisplay.textContent = `Você acertou ${pontuacao} de ${perguntas.length}`;
    }
  }, 1000);
}

mostrarPergunta();
