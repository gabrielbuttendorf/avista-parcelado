export interface FinanceInput {
  avista: number;
  parcelado: number;
  parcelas: number;
  taxaAnual: number;
}

export interface FinanceResult {
  valorFinalAvista: number;
  valorFinalParcelado: number;
}

export function simulateFinance({
  avista,
  parcelado,
  parcelas,
  taxaAnual,
}: FinanceInput): FinanceResult {
  const taxaMensalBruta = taxaAnual / 12;

  // --- Cenário A: investir desconto ---
  const desconto = parcelado - avista;
  const valorBruto = desconto * Math.pow(1 + taxaMensalBruta, parcelas);
  const rendimentoA = valorBruto - desconto;
  const impostoA = rendimentoA * 0.225;
  const valorFinalAvista = valorBruto - impostoA;

  // --- Cenário B: investir tudo e sacar parcelas ---
  let saldo = parcelado;
  let rendimentoB = 0;
  const valorParcela = parcelado / parcelas;

  for(let i = 0; i < parcelas; i++) {
    // saca parcela
    saldo -= valorParcela;
    
    // rende
    const rendimentoMes = saldo * taxaMensalBruta;
    saldo += rendimentoMes
    
    // acumula lucro
    rendimentoB += rendimentoMes
  }

  const impostoB = rendimentoB * 0.225;
  const valorFinalParcelado = saldo - impostoB;

  return {
    valorFinalAvista,
    valorFinalParcelado,
  }
}
