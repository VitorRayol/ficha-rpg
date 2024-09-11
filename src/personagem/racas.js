import { resultData } from "../utils/utils";

const ENDPOINTRACES = `https://www.dnd5eapi.co/api/races/`;

export async function fetchRaces(selectRacaParam) {
  try {
    const data = await resultData(ENDPOINTRACES);

    if (data.results && data.results.length > 0) {
      data.results.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.index;
        option.textContent = item.name;
        selectRacaParam.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Erro ao buscar raças:", error);
    selectRacaParam.innerHTML = `<p>Erro ao carregar raças</p>`;
  }
}
