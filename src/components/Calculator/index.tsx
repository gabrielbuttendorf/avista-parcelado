import { simulateFinance } from "../../services/finance";

interface FinanceForm {
  avista: number;
  parcelado: number;
  parcelas: number;
}

interface CalculatorProps {
  data: FinanceForm;
  taxaAnual: number;
}

export function Calculator({ data, taxaAnual }: CalculatorProps) {
  const { avista, parcelado, parcelas } = data;

  if (!avista || !parcelado || !parcelas) return null;

  const result = simulateFinance({
    ...data,
    taxaAnual,
  });

  return (
    <div>
      <p>À Vista: {result.valorFinalAvista}</p>
      <p>Parcelado: {result.valorFinalParcelado}</p>
      <p>Parcelas: {parcelas}</p>
    </div>
  );
}
