import React from 'react';

const SecondExercise = class extends React.Component{
   
    state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
    } 
    
    _onChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }
  
  
     _onSubmit = (e) => {
       e.preventDefault()
       this.props.onComplete(this.state)
     }
    
    render(){
      return (
       <div>
        <h3 class = "text-center display-6">Class based component</h3>
       <form class = "form-group my-3" onSubmit = {this._onSubmit}>
          <input 
            name = "firstname"
            value = {this.state.firstname}
            onChange = {this._onChange}
            type = "text"
            placeholder = "Firstname"
            class = "form-control mb-2"
          
          />
  
        <input 
        name = "lastname"
        onChange = {this._onChange}
        value = {this.state.lastname}
        type = "text"
        class = "form-control mb-2"
        placeholder = "Last name"
        
        />
  
        <input 
        name = "phonenumber"
        type = "number"
        onChange = {this._onChange}
        value = {this.state.phonenumber}
        placeholder = "Phone number"
        class = "form-control mb-2"
        />
        <button class = "btn btn-primary" type = "submit">submit</button>
        </form>
      </div>
      )
  
       
      }
  }
  
  export default SecondExercise;