import { type MouseEvent } from "react";
import { simulateFinance } from "../../services/finance";
import { CalculateButton } from "./styles";

interface FinanceForm {
  avista: number;
  parcelado: number;
  parcelas: number;
}

interface CalculatorProps {
  data: FinanceForm;
  taxaAnual: number;
  onCalculate: () => void;
  onResult: (result: ReturnType<typeof simulateFinance>) => void;
  onSaveInputs: (data: FinanceForm) => void;
}

export function Calculator({
  data,
  taxaAnual,
  onCalculate,
  onResult,
  onSaveInputs,
}: CalculatorProps) {
  const handleCalculate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { avista, parcelado, parcelas } = data;

    if (!avista || !parcelado || !parcelas) return;

    const calculation = simulateFinance({
      ...data,
      taxaAnual,
    });

    onResult(calculation);
    onSaveInputs(data);
    onCalculate();
  };

  return (
    <div>
      <CalculateButton type="submit" onClick={handleCalculate}>
        Calcular
      </CalculateButton>
    </div>
  );
}
