import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Cliente } from "../../types/cliente";
import { LOAD_CLIENTES } from "../../graphql/Queries";
import { Container } from "../../containers";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const ClientList = () => {
  const { data, loading, error } = useQuery(LOAD_CLIENTES);
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      setClientes(data.getAllClients);
    }
  }, [data]);

  return (
    <Container>
      <h2 className="title-client">{t("clients.title")}</h2>
      <p className="description-client">{t("clients.description")}</p>
      <hr className="solid" />
      <Table striped bordered hover>
        <thead
          style={{
            backgroundColor: "#14213D",
            color: "#FFFFFF",
          }}
        >
          <th>{t("clients.firstname")}</th>
          <th>{t("clients.lastname")}</th>
          <th>{t("clients.email")}</th>
        </thead>
        <tbody>
          {clientes.map((client, idx) => (
            <tr key={idx}>
              <td>{client.nome}</td>
              <td>{client.sobrenome}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default ClientList;
