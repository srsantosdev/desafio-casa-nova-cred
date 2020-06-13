import { gql } from "apollo-boost";

export const allLoanRequests = gql`
  {
    todasSolicitacoesEmprestimoRelay(funcionarioId: "75") {
      edges {
        node {
          cliente {
            nome
            cpf
            contas {
              formapagamentoemprestimoSet {
                emprestimo {
                  nsuCartao
                  data
                  parcelas
                  valorDesejado
                  taxaAplicada
                }
              }
            }
          }
        }
      }
    }
  }
`;
