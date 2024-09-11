import { fetchClass } from "./personagem/classes";
import { fetchAlignments } from "./personagem/alignments";
import { fetchRaces } from "./personagem/racas";

const nomeJogadorInput = document.getElementById("nomeJogador");
const nomePersonagemInput = document.getElementById("nomePersonagem");
const selectClasse = document.getElementById("autocompleteClasse");
const inputHitDie = document.getElementById("autocompletePv");
const selectRaca = document.getElementById("autocompleteRaca");
const selectAligments = document.getElementById("autocompleteAlinhamento");
const btn = document.getElementById("gerarClasse");

fetchClass(selectClasse, inputHitDie);
fetchRaces(selectRaca);
fetchAlignments(selectAligments);

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const nomeJogador = nomeJogadorInput.value;
  const nomePersonagem = nomePersonagemInput.value;
  const classe = selectClasse.value;
  const hitDie = inputHitDie.value;
  const raca = selectRaca.value;
  const alinhamento = selectAligments.value;

  if (!nomeJogador || !nomePersonagem || !classe || !raca || !alinhamento) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const personagemData = {
    nomeJogador: nomeJogador,
    nomePersonagem: nomePersonagem,
    classe: classe,
    hitDie: hitDie,
    raca: raca,
    alinhamento: alinhamento,
  };
  console.log("Dados do Personagem:", personagemData);
});
