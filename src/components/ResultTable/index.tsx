import type { simulateFinance } from "../../services/finance";
import { MainResult, ResultCard, TableContainer } from "./style";

interface ResultTableProps {
  result: ReturnType<typeof simulateFinance> | null;
}

export function ResultTable({ result }: ResultTableProps) {
  return (
    <TableContainer>
      {result && (
        <>
          <MainResult>
            <ResultCard variant="avista">
              À Vista{" "}
              <span>
                {result.valorFinalAvista.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </ResultCard>
            <ResultCard variant="parcelado">
              Parcelado{" "}
              <span>
                {result.valorFinalParcelado.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </ResultCard>
          </MainResult>

          <h2>Investir o Desconto</h2>
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Saldo inicial</th>
                <th>Rendimento</th>
                <th>Saldo final</th>
              </tr>
            </thead>
            <tbody>
              {result.tabelaAvista.map((linha) => (
                <tr key={linha.parcela}>
                  <td>{linha.parcela}</td>
                  <td>{linha.saldoInicial.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</td>
                  <td>{linha.rendimento.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</td>
                  <td>{linha.saldoFinal.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Investir e Sacar Parcelas</h2>
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Saldo inicial</th>
                <th>Pagamento</th>
                <th>Rendimento</th>
                <th>Saldo final</th>
              </tr>
            </thead>
            <tbody>
              {result.tabelaParcelado.map((linha) => (
                <tr key={linha.parcela}>
                  <td>{linha.parcela}</td>
                  <td>{linha.saldoInicial.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</td>
                  <td>{linha.pagamento.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</td>
                  <td>{linha.rendimento.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</td>
                  <td>{linha.saldoFinal.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </TableContainer>
  );
}
