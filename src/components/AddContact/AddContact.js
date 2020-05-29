import React, {Component} from 'react';
import axios from 'axios'

class AddContact extends Component{
    state={
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }
    handleAdd = async ()=>{
        await axios.post('http://localhost:7000/contact', this.state);
        this.props.onUpdate();
        this.setState({firstName: "", lastName: "", phoneNumber: ""})
      }
    handleChangeFirstName = (e)=>{
        this.setState({firstName: e.target.value})
    }
    handleChangeLastName = (e)=>{
        this.setState({lastName: e.target.value})
    }
    handleChangePhoneNumber = (e)=>{
        const phoneNumber = Number(e.target.value)
        this.setState({ phoneNumber })
    }
    
    render(){
        return(
            <ul className="add-contact">
                <li>
                    <label>First Name</label>
                    <input  value={this.state.firstName} onChange={this.handleChangeFirstName}/>
                </li>
                <li>
                    <label>Last Name</label>
                    <input  value={this.state.lastName} onChange={this.handleChangeLastName}/>
                </li>
                <li>
                    <label>Phone Number</label>
                    <input  type="number" value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber}/>
                </li>
                <button className="add-btn" onClick={this.handleAdd}>Добавить</button>    
            </ul>
        )
    }
}
export default AddContact;