import { gql } from "@apollo/client";

export const LOAD_CLIENTES = gql`
    query {
        getAllClients {
            id,
            nome,
            sobrenome,
            email
        }
    }
`; 