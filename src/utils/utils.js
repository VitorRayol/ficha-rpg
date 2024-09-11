export async function resultData(param) {
  const result = await fetch(param);
  const dataJson = await result.json();
  return dataJson;
}

document.addEventListener("DOMContentLoaded", () => {
  resultData();
});
