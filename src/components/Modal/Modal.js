import React, { Component } from 'react';
import axios from 'axios'

class Modal extends Component {
    state = {
        currentContact: null,
        isEdit: false
    }
    componentDidMount(){
        const {currentContact} = this.props;
        this.setState({ currentContact })
    }
    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps) === JSON.stringify(this.props)) return;
        const {currentContact} = this.props;
        this.setState({currentContact})

    }
    handleCloseModal = ()=>{
        const { onCloseModal } = this.props;
        this.setState({currentContact: null})
        onCloseModal()
    }
    handleDeleteModal = async () =>{
        const {currentContact } = this.state;
        const { onCloseModal } = this.props;
        await axios.delete(`http://localhost:7000/contact/${currentContact.id}`)
        onCloseModal();
    }
    handleOpenEdit = ()=> {
        this.setState({isEdit: true})
    }
    handleEditContact = (event, field) =>{
        const { currentContact } = this.state;
        const newContact = { ...currentContact }
        newContact[field] = event.target.value;
        this.setState({currentContact: newContact})
    }
    handleSaveContact = async ()=>{
        const {currentContact} = this.state;
        await axios.put(`http://localhost:7000/contact/${currentContact.id}`, currentContact)
        this.setState({isEdit: false})
    }
    render() {
        const {currentContact, isEdit} = this.state;
        return currentContact ? (
            <div className="modal">
                <div className="modal-window">
                    {isEdit ? (
                        <>
                            <input 
                                type="text" 
                                placeholder="first name" 
                                value={currentContact.firstName}
                                onChange={(e)=> this.handleEditContact(e, "firstName")}
                            />
                            <input 
                                type="text" 
                                placeholder="last name" 
                                value={currentContact.lastName}
                                onChange={(e)=> this.handleEditContact(e, "lastName")}
                            />
                            <input 
                                type="text" 
                                placeholder="phone number" 
                                value={currentContact.phoneNumber}
                                onChange={(e)=> this.handleEditContact(e, "phoneNumber")}
                            />
                            <button onClick={this.handleSaveContact}>Save</button>
                        </>
                    ) : (
                        <React.Fragment>
                            <div>First Name: {currentContact.firstName}</div>
                            <div>Last Name: {currentContact.lastName}</div>
                            <div>Phone Number: {currentContact.phoneNumber}</div>
                            <button onClick = {this.handleOpenEdit}>Изменить</button>
                            <button onClick ={this.handleDeleteModal}>Удалить</button>
                            <button onClick={this.handleCloseModal}>Закрыть</button>
                        </React.Fragment>
                    )}
                </div>
            </div>
        ) : null;
    }
}

export default Modal;