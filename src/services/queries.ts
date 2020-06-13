import { gql } from "apollo-boost";

export const allLoanRequests = gql`
  query todasSolicitacoesEmprestimoRelay($funcionario_Nome: String) {
    todasSolicitacoesEmprestimoRelay(funcionario_Nome: $funcionario_Nome) {
      edges {
        node {
          data
          valorDesejado
          cliente {
            cpf
            nome
          }
          parcelas
          taxaAplicada
        }
      }
    }
  }
`;
