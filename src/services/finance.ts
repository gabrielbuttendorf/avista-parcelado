export interface FinanceInput {
  avista: number;
  parcelado: number;
  parcelas: number;
  taxaAnual: number;
}

export interface LinhaAvista {
  parcela: number;
  saldoInicial: number;
  rendimento: number;
  saldoFinal: number;
}

export interface LinhaParcelado {
  parcela: number;
  saldoInicial: number;
  pagamento: number;
  rendimento: number;
  saldoFinal: number;
}

export interface FinanceResult {
  valorFinalAvista: number;
  valorFinalParcelado: number;
  tabelaAvista: LinhaAvista[];
  tabelaParcelado: LinhaParcelado[];
}

export interface FinanceForm {
  avista: number;
  parcelado: number;
  parcelas: number;
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
  let saldoA = desconto;
  let rendimentoTotalA = 0;

  const tabelaAvista: LinhaAvista[] = [];

  for (let parcela = 1; parcela <= parcelas; parcela++) {
    const saldoInicial = saldoA;
    const rendimento = saldoA * taxaMensalBruta;
    saldoA += rendimento;
    rendimentoTotalA += rendimento;

    tabelaAvista.push({
      parcela,
      saldoInicial,
      rendimento,
      saldoFinal: saldoA,
    });
  }

  const impostoA = rendimentoTotalA * 0.225;
  const valorFinalAvista = saldoA - impostoA;

  // --- Cenário B: investir tudo e sacar parcelas ---
  let saldoB = parcelado;
  let rendimentoTotalB = 0;
  const valorParcela = parcelado / parcelas;

  const tabelaParcelado: LinhaParcelado[] = [];

  for (let parcela = 1; parcela <= parcelas; parcela++) {
    const saldoInicial = saldoB;

    // saca parcela
    saldoB -= valorParcela;

    // rende
    const rendimento = saldoB * taxaMensalBruta;
    saldoB += rendimento;

    // acumula lucro
    rendimentoTotalB += rendimento;

    tabelaParcelado.push({
      parcela,
      saldoInicial,
      pagamento: valorParcela,
      rendimento,
      saldoFinal: saldoB,
    })
  }

  const impostoB = rendimentoTotalB * 0.225;
  const valorFinalParcelado = saldoB - impostoB;

  return {
    valorFinalAvista,
    valorFinalParcelado,
    tabelaAvista,
    tabelaParcelado,
  };
}
