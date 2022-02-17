import { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import LoginHooks from '../../hooks/loginHooks';
import { Cliente, TemporaryClientState } from "../../types/cliente"
import { ShowModalInterface } from '../../types/modal';
import { CadastroClientes } from "../CadastroClientes"
import Login from '../Login';

interface ModalProps {
    show: ShowModalInterface;
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

    const SignUpModal = show.type === "up" ?  (
        <Modal show={show.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de Usuários</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CadastroClientes setCliente={setCliente} handleClose={handleClose}
                /> </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" disabled={checkMissingClientData()} onClick={handleFormSubmit}>Save</Button>
                <LoginHooks />
            </Modal.Footer>
        </Modal>
    ) : <></>;

    const SignInModal = show.type === "in" ? (
        <Modal show={show.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Entrar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" disabled={checkMissingClientData()} onClick={handleFormSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    ) : <></>;

    return (
        <>
        {SignUpModal}
        {SignInModal}
        </>
    )
}

