import { useState } from "react";
import { Container } from "../../containers";
import { Cliente } from "../../types/cliente";
import { CadastroClientes } from "../../components/CadastroClientes";
import { usePost } from "../../hooks/customHooks";

export const Home = () => {
  const { apiPost } = usePost("/clientes");

  const [clientes, setClientes] = useState<Cliente[]>([]);

  const cadastrarCliente = async (cliente: Cliente) => {
    console.log("cadastrar aluno");
    await apiPost(cliente);
    setClientes([...clientes, cliente]);
  };

  return (
    <Container>
      <div className="cadastro-usuario">
        <CadastroClientes onCadastroCliente={cadastrarCliente} />
      </div>
      <br/>
      <div>Conteúdo</div>
    </Container>
  );
};
