import { resultData } from "../utils/utils";

const ENDPOINTALIGNMENTS = `https://www.dnd5eapi.co/api/alignments`;

export async function fetchAlignments(selectAligmentsParam) {
  try {
    const data = await resultData(ENDPOINTALIGNMENTS);

    if (data.results && data.results.length > 0) {
      data.results.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.index;
        option.textContent = item.name;
        selectAligmentsParam.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Erro ao buscar raças:", error);
    selectAligmentsParam.innerHTML = `<p>Erro ao carregar raças</p>`;
  }
}
