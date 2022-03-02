import { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { useTranslation } from 'react-i18next';
import LoginHooks from '../../hooks/loginHooks';
import { Cliente, TemporaryClientState } from "../../types/cliente"
import { ShowModalInterface } from '../../types/modal';
import { CadastroClientes } from "../CadastroClientes"
import Login from '../Login';

interface ModalProps {
    show: ShowModalInterface;
    handleClose: () => void;
    onCadastroCliente: (cliente: Cliente) => void;
    onLoginCliente: () => void;
}

export const SignInUpModal = ({ show, handleClose, onCadastroCliente, onLoginCliente }: ModalProps) => {
    const { t } = useTranslation();
    const [cliente, setCliente] = useState<TemporaryClientState>();
    const checkMissingClientData = () => {
        if (!cliente ||
            !cliente.nome ||
            !cliente.sobrenome ||
            !cliente.email.isValid ||
            !cliente.senha.isValid)
            return true;
        return false;
    }

    const handleFormSubmit = () => {
        if (cliente && !checkMissingClientData()) {
            onCadastroCliente({
                nome: cliente.nome,
                sobrenome: cliente.sobrenome,
                email: cliente.email.value,
                senha: cliente.senha.value
            });
            handleClose();
        }
    }

    const SignUpModal = show.type === "up" ?  (
        <Modal show={show.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{t('modal.label')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CadastroClientes setCliente={setCliente} handleClose={handleClose}
                /> </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>{t('modal.fechar')}</Button>
                <Button variant="primary" disabled={checkMissingClientData()} onClick={handleFormSubmit}>{t('modal.salvar')}</Button>
                <LoginHooks />
            </Modal.Footer>
        </Modal>
    ) : <></>;

    const SignInModal = show.type === "in" ? (
        <Modal show={show.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{t('login.entrar')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>{t('modal.fechar')}</Button>
                <Button variant="primary" onClick={onLoginCliente}>{t('modal.salvar')}</Button>
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

