import { addHours, differenceInSeconds } from 'date-fns';
import { useMemo, useState } from 'react';
import Modal from 'react-modal';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import es from 'date-fns/locale/es';
import Swal from 'sweetalert2';


registerLocale('es', es)

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

    const [isOpen, setIsOpen] = useState(true);
    const [formvalues, setFormvalues] = useState({
        title: "Marco Antonio",
        notes: "Varela",
        start: new Date(),
        end: addHours(new Date(), 2)


    });
    const [formEnviado, setFormEnviado] = useState(false);
    const onDateChanged = (event, changing = "start") => {
        setFormvalues({
            ...formvalues,
            [changing]: event
        })
    }
    const onInputChange = ({ target }) => {
        setFormvalues({
            ...formvalues,
            [target.name]: target.value
        })
    }
    const onCloseModal = () => {
        setIsOpen(false);
        console.log("cerrando el modal");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFormEnviado(true);
        const difference = differenceInSeconds(formvalues.end, formvalues.start);
        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error')

            return;
        }
        if (formvalues.title.length == 0) {
            console.log("Falta el titulo");
            return;
        }
        // TODO:
        //Remover los errores
        // Cerra el modal
        console.log(formvalues);

    }

    const titleClass = useMemo(() => {
        if (!formEnviado) return '';
        return (formvalues.title.length > 0) ? '' : 'is-invalid';
    }, [formvalues.title, formEnviado])

    return (
        <Modal
            className="modal"
            overlayClassName="modal-fondo"
            closetime={200}
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
        >

            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formvalues.start}
                        showTimeSelect
                        locale="es"
                        dateFormat="Pp"
                        timeCaption="Hora"
                        onChange={(event) => onDateChanged(event, "start")}
                        className="form-control"></DatePicker>

                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        className="form-control "
                        minDate={formvalues.start}
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                        selected={formvalues.end}
                        dateFormat="Pp"
                        onChange={(event) => onDateChanged(event, "end")}
                        placeholder="Fecha inicio" />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        value={formvalues.title}
                        onChange={onInputChange}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        value={formvalues.notes}
                        onChange={onInputChange}
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
