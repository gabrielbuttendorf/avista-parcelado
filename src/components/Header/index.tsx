import { useEffect, useState } from "react";
import { HeaderContainer } from "./styles";
import { getSelic } from "../../services/selic";

export function Header() {
  const [taxaAnual, setTaxaAnual] = useState<number>(0);

  function formatter(taxa: number) {
    const percentual = taxa * 100;

    const formatted = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(percentual);

    return `${formatted}% ao ano`;
  }

  useEffect(() => {
    getSelic().then(setTaxaAnual);
  }, []);
  return (
    <HeaderContainer>
      <h1>À Vista ou Parcelado?</h1>
      <p>
        Simule qual opção é mais vantajosa investindo na Selic atual:{" "}
        <span>{formatter(taxaAnual)}</span>
      </p>
    </HeaderContainer>
  );
}
