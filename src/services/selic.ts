export async function getSelic(): Promise<number> {
  const response = await fetch(
    "https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=01/01/2026",
  );

  const data = await response.json()

  const last = data[data.length - 1];
  const selicPercent = Number(last.valor);

  return selicPercent / 100; // ex: 15% → 0.15
}
