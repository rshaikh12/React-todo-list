import React, {useState } from 'react';
import NextModal from '../modals/NextModal'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [modal2, setModal] = useState(false);
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

    const toggle2 = () => {
        setModal(!modal2);
    }



    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)

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
                        <option>StMU</option>
                    </select>
                </div>

            </ModalBody>
            <ModalFooter>
            <div className="button-group">
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                <Button color="primary" onClick={() => setModal(true)}>Next</Button>

            
            <NextModal modal = {modal2} toggle = {toggle2}/>
            </div>
            </ModalFooter>
        </Modal>
   
    );
};

export default CreateTaskPopup;