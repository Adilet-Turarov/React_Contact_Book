import React from 'react';
import axios from 'axios'

import Card from './Card';
import Prevloader from '../prevloader/Prevloader'

class List extends React.Component {
  state = {
    data: [],
    loading: true
  }
  componentDidMount(){
    this.fetchContacts()
  }
  componentDidUpdate(){
    this.fetchContacts()
  } 
  fetchContacts = async() =>{
    const {data} = await axios.get('http://localhost:7000/contact');
    if(JSON.stringify(this.state) === JSON.stringify({ data })) return
    this.setState({ data });
    this.setState({loading: false})
  }
  render(){
    return (
      <>
        {this.state.loading ? <Prevloader/> : ""}
        <ul>
          {this.state.data.map(contact =>(
            <Card
              key={contact.id}
              contact = {contact}
              onOpenModal = {() => this.props.onOpenModal(contact)}
              
            />
          ))}
        </ul>
      </>
      
    )
  }
  
}

export default List;






