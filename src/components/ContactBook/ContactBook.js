import React from 'react';

import List from '../List/List';
import AddContact from '../AddContact/AddContact';
import Modal from '../Modal/Modal'

class ContactBook extends React.Component {
  state= {
    currentContact: null
  }  

  handleUpdate = () =>{
    this.forceUpdate()
  }

  checkPage = (currentItem) => this.props.page === undefined || this.props.page === currentItem;

  handleCloseModal = (currentContact) => {
    this.setState({currentContact: null})
  }
  handleOpenModal = (currentContact) => {
    this.setState({currentContact})
  }

  render(){
    const { currentContact } = this.state;
    return(
      <div className="contact-book">
        <Modal
          currentContact = { currentContact }
          onCloseModal = {this.handleCloseModal}
        />
        {this.checkPage ("ADD") ? <AddContact onUpdate={this.handleUpdate}/> : null}
        {this.checkPage ("LIST") ? <List onUpdate = {this.handleUpdate} onOpenModal = {this.handleOpenModal} /> :null }
      </div>
    );
  }
  
}

export default ContactBook;