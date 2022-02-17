import { useState } from 'react';
import { Alert, Button, Modal } from "react-bootstrap"
import { Cliente, TemporaryClientState } from "../../types/cliente"
import { CadastroClientes } from "../CadastroClientes"

interface ModalProps {
    show: boolean;
    handleClose: () => void;
    onCadastroCliente: (cliente: Cliente) => void;
}

export const SignInUpModal = ({ show, handleClose, onCadastroCliente }: ModalProps) => {
    const [cliente, setCliente] = useState<TemporaryClientState>();
    console.log({cliente})
    const checkMissingClientData = () => {
        if (!cliente ||
            !cliente.nome ||
            !cliente.sobrenome ||
            !cliente.email.isValid ||
            !cliente.senha.isValid)
            return true;
        return false;
    }

    console.log(checkMissingClientData())

    const handleFormSubmit = () => {
        if (cliente && !checkMissingClientData()) {
            onCadastroCliente({
                nome: cliente.nome,
                sobrenome: cliente.sobrenome,
                email: cliente.email.value,
                senha: cliente.email.value
            });
            handleClose();
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de Usuários</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CadastroClientes setCliente={setCliente} handleClose={handleClose}
                /> </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" disabled={checkMissingClientData()} onClick={handleFormSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

