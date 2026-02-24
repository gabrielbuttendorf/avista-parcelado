import { useEffect, useRef, useState } from "react";
import { FormContainer, InputDiv, Page } from "./styles";
import { Calculator } from "../Calculator";
import { getSelic } from "../../services/selic";
import type { simulateFinance } from "../../services/finance";
import { ResultTable } from "../ResultTable";

interface FinanceForm {
  avista: number;
  parcelado: number;
  parcelas: number;
}

export function Form() {
  const [taxaAnual, setTaxaAnual] = useState<number>(0);
  const avistaRef = useRef<HTMLInputElement>(null);

  const [result, setResult] = useState<ReturnType<
    typeof simulateFinance
  > | null>(null);

  useEffect(() => {
    getSelic().then(setTaxaAnual);
  }, []);

  const [form, setForm] = useState<FinanceForm>({
    avista: 0,
    parcelado: 0,
    parcelas: 0,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  return (
    <Page>
      <FormContainer>
        <InputDiv>
          <span>Valor à vista</span>

          <input
            ref={avistaRef}
            type="number"
            inputMode="numeric"
            name="avista"
            id="avista"
            value={form.avista || ""}
            onChange={handleChange}
            placeholder="0,00"
          />
        </InputDiv>
        <InputDiv>
          <span>Valor parcelado</span>
          <input
            type="number"
            inputMode="numeric"
            name="parcelado"
            id="parcelado"
            value={form.parcelado || ""}
            onChange={handleChange}
            placeholder="0,00"
          />
        </InputDiv>
        <InputDiv>
          <span>Parcelas</span>
          <input
            type="number"
            inputMode="numeric"
            name="parcelas"
            id="parcelas"
            value={form.parcelas || ""}
            onChange={handleChange}
            placeholder="0"
          />
        </InputDiv>

        <Calculator
          data={form}
          taxaAnual={taxaAnual}
          onResult={setResult}
          onCalculate={() => {
            setForm({ avista: 0, parcelado: 0, parcelas: 0 });
            avistaRef.current?.focus();
          }}
        />
      </FormContainer>

      <ResultTable result={result}/>
    </Page>
  );
}
