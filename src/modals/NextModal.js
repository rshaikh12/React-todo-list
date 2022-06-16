import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NextPopup = ({ modal, toggle}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "taskName") {
            setTaskName(value)
        } else {
            setDescription(value)
        }
    }


    


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Titel</label>
                    <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                </div>
                <div className="form-group">
                    <label>Beschreibung</label>
                    <textarea rows="3" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Ressort</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>StMI</option>
                        <option>StMELF</option>
                        <option>StMFH</option>
                        <option>StMUK</option>
                        <option>StMUV</option>
                    </select>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default NextPopup;