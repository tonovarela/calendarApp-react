import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const onCloseModal = () => {
        setIsOpen(false);
        console.log("cerrando el modal");
    }
    return (
        <Modal
            className="modal"
            overlayClassName="modal-fondo"
            closetime={200}
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
        >

            <h1>Hola que tal</h1>
            <hr>
            </hr>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam repellat enim quam blanditiis, deserunt voluptatibus neque inventore. Quibusdam dolores laborum quo architecto dignissimos laudantium possimus illo! Omnis, quae maiores. Modi.</p>
        </Modal>
    )
}
