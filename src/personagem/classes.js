import { resultData } from "../utils/utils";

export async function fetchClass(selectClasseParam, hitDieParam) {
  const ENDPOINTCLASSES = "https://www.dnd5eapi.co/api/classes/";

  try {
    const data = await resultData(ENDPOINTCLASSES);

    if (data.results && data.results.length > 0) {
      data.results.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.index;
        option.textContent = item.name;
        selectClasseParam.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Erro ao buscar classes:", error);
    selectClasseParam.innerHTML = "";
    const errorOption = document.createElement("option");
    errorOption.textContent = "Erro ao carregar classes";
    selectClasseParam.appendChild(errorOption);
  }

  selectClasseParam.addEventListener("change", async () => {
    const itemId = selectClasseParam.value;

    if (itemId) {
      try {
        const response = await fetch(`${ENDPOINTCLASSES}${itemId}`);
        const data = await response.json();

        if (data) {
          hitDieParam.value = data.hit_die;
        }
      } catch (error) {
        console.error("Erro ao carregar pontos de vida:", error);
      }
    } else {
      hitDieParam.value = "";
    }
  });
}
