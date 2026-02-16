import { useEffect, useState } from "react";
import { Form, InputDiv, Page } from "./styles";
import { Calculator } from "../Calculator";
import { getSelic } from "../../services/selic";

interface FinanceForm {
  avista: number;
  parcelado: number;
  parcelas: number;
}

export function Home() {
  const [taxaAnual, setTaxaAnual] = useState<number>(0);

  useEffect(() => {
    getSelic().then(setTaxaAnual)
  }, [])

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
      <Form>
        <InputDiv>
          {/* <span>Valor à vista</span> */}
          <input
            type="number"
            inputMode="numeric"
            name="avista"
            id="avista"
            placeholder="Valor à vista"
            value={form.avista || ""}
            onChange={handleChange}
          />
        </InputDiv>
        <InputDiv>
          {/* <span>Valor parcelado</span> */}
          <input
            type="number"
            inputMode="numeric"
            name="parcelado"
            id="parcelado"
            placeholder="Valor parcelado"
            value={form.parcelado || ""}
            onChange={handleChange}
          />
        </InputDiv>
        <InputDiv>
          {/* <span>Quantidade de parcelas</span> */}
          <input
            type="number"
            inputMode="numeric"
            name="parcelas"
            id="parcelas"
            placeholder="Quantidade de parcelas"
            value={form.parcelas || ""}
            onChange={handleChange}
          />
        </InputDiv>

        <Calculator data={form} taxaAnual={taxaAnual}/>
      </Form>
    </Page>
  );
}
