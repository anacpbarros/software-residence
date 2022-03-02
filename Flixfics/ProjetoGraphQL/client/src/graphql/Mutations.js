import { gql } from "@apollo/client";

export const CREATE_CLIENTE_MUTATION = gql`
    mutation createCliente(
        $nome: String!,
        $sobrenome: String!,
        $email: String!,
        $senha: String!
    ) {
        createCliente(
            nome: $nome,
            sobrenome: $sobrenome,
            email: $email,
            senha: $senha
        ) {
            id,
            nome,
            sobrenome
        }
    }

`;