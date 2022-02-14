import { useState } from "react";
import { Container } from "../../containers";
import { Cliente } from "../../types/cliente";
import { CadastroClientes } from "../../components/CadastroClientes";
import { usePost } from "../../hooks/customHooks";

export const Clientes = () => {
  const { apiPost } = usePost("/clientes");

  const [clientes, setClientes] = useState<Cliente[]>([]);

  const cadastrarCliente = async (cliente: Cliente) => {
    console.log("cadastrar aluno");
    await apiPost(cliente);
    setClientes([...clientes, cliente]);
  };

  return (
    <Container>
      <CadastroClientes onCadastroCliente={cadastrarCliente} />
    </Container>
  );
};
