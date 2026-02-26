import type { FinanceForm, simulateFinance } from "../../services/finance";
import {
  InfoContainer,
  MainResult,
  ResultCard,
  TableContainer,
  TableWrapper,
  UserInputs,
} from "./style";
import { InfoIcon } from "@phosphor-icons/react";

interface ResultTableProps {
  result: ReturnType<typeof simulateFinance> | null;
  inputs: FinanceForm | null;
}

export function ResultTable({ result, inputs }: ResultTableProps) {
  return (
    <TableContainer>
      {result && (
        <>
          <UserInputs>
            <p>
              Valor à vista:{" "}
              {inputs?.avista.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>
              Valor parcelado:{" "}
              {inputs?.parcelado.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>Parcelas: {inputs?.parcelas}</p>
          </UserInputs>
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

          <InfoContainer>
            <InfoIcon size={18} />
            <p>
              Os valores acima já estão líquidos de impostos. (22,5% de IR){" "}
            </p>
          </InfoContainer>

          <h2>Investir o Desconto</h2>
          <TableWrapper>
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
                    <td>
                      {linha.saldoInicial.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td>
                      {linha.rendimento.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td>
                      {linha.saldoFinal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          <h2>Investir e Sacar Parcelas</h2>
          <TableWrapper>
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
                    <td>
                      {linha.saldoInicial.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td>
                      {linha.pagamento.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td>
                      {linha.rendimento.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td>
                      {linha.saldoFinal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
        </>
      )}
    </TableContainer>
  );
}
