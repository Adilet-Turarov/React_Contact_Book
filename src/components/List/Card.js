import React from 'react';

class Card extends React.Component{
    render(){
        const {onOpenModal, contact} = this.props;
        
        return(
            <li className="contact" onClick={onOpenModal}>
                <div>First Name: {contact.firstName}</div>
                <div>Last Name: {contact.lastName}</div>
                <div>Phone Number: {contact.phoneNumber}</div>
            </li>
        )
    }
    
    
}
export default Card;