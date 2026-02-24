import type { simulateFinance } from "../../services/finance";

interface ResultTableProps {
  result: ReturnType<typeof simulateFinance> | null;
}

export function ResultTable({result}: ResultTableProps) {
  return (
    <>
      {result && (
        <>
          <h2>Resultado Final</h2>
          <p>À Vista: {result.valorFinalAvista}</p>
          <p>Parcelado: {result.valorFinalParcelado}</p>

          <h2>Tabela – À vista</h2>
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
                  <td>{linha.saldoInicial.toFixed(2)}</td>
                  <td>{linha.rendimento.toFixed(2)}</td>
                  <td>{linha.saldoFinal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Tabela – Parcelado</h2>
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
                  <td>{linha.saldoInicial.toFixed(2)}</td>
                  <td>{linha.pagamento.toFixed(2)}</td>
                  <td>{linha.rendimento.toFixed(2)}</td>
                  <td>{linha.saldoFinal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
