import { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { Cliente } from "../../types/cliente"
import { CadastroClientes } from "../CadastroClientes"

interface ModalProps {
    show: boolean;
    handleClose: () => void;
    onCadastroCliente: (cliente: Cliente) => void;
}

export const SignInUpModal = ({ show, handleClose, onCadastroCliente }: ModalProps) => {
    const [submit, setSubmit] = useState<boolean>(false);

    const handleFormSubmit = () => {
        setSubmit(true);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Teste</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CadastroClientes onCadastroCliente={onCadastroCliente} submit={submit}
                /> </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleFormSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

