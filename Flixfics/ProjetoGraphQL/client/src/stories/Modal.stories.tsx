import { Story, Meta } from "@storybook/react";
// import Modal, { ModalProps } from './Modal';
import { Button, Modal, ModalProps as BTModalProps } from "react-bootstrap"


const meta: Meta = {
    title: "Modal",
    component: Modal,
  }

  export default meta;

  interface ModalProps extends BTModalProps  {
    label: string;
    onClickClose: () => {};
    onClickSave: () => {};
    closeLabel: string;
    saveLabel: string;
  }
  
  const Template: Story<ModalProps> = (args) => (
    <Modal show={args.show} onHide={args.onHide}>
            <Modal.Header closeButton={args.closeButton}>
                <Modal.Title>{args.label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {args.children} </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={args.onClickClose}>{args.closeLabel}</Button>
                <Button variant="primary" disabled={args.disabled} onClick={args.onClickSave}>{args.saveLabel}</Button>
            </Modal.Footer>
        </Modal>
  );
  
  export const Main = Template.bind({});
  Main.args = {
    label: "Default Modal",
    show: true,
    children: "Content",
    closeLabel: "Close",
    saveLabel: "Save"
  };