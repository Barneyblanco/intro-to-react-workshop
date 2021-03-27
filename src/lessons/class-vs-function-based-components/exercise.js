import React from 'react';

/**
 * Use this module to practice writing what you feel are some decent examples of both
 * class-based and functional components. You can write as many or as few of each kind
 * as you want, just make sure to render them as part of the output in the Exercise
 * component down below, so you can see them reflected in the lesson page.
 *
 * Some examples of class- and function-based components follow, use them for ideas.
 *
 * const HelloWorld = () => <span>Hello World!</span>;
 *
 * const SignupForm = ({ action, method }) => (
 *   <form action={action} method={method}>
 *     <input type="text" name="full_name" defaultValue="" placeholder="Full Name" />
 *     <input type="text" name="address" defaultValue="" placeholder="Street Address" />
 *     <input type="text" name="city" defaultValue="" placeholder="City" />
 *     <input type="text" name="state" defaultValue="" placeholder="State" />
 *     <input type="phone" name="zip" defaultValue="" placeholder="Zip Code" />
 *     <button type="submit">Submit Form</button>
 *   </form>
 * );
 *
 * const ManagedSignupForm = class extends React.Component {
 *   state = {
 *     fullName: '',
 *     address: '',
 *     city: '',
 *     state: '',
 *     zip: '',
 *   };
 *
 *   _onChange = e => {
 *     this.setState({ [e.target.name]: e.target.value });
 *   };
 *
 *   _onSubmit = (e) => {
 *     e.preventDefault();
 *     this.props.onComplete(this.state);
 *   };
 *
 *   render() {
 *     return (
 *       <form onSubmit={this._onSubmit}>
 *         <input
 *           name="full_name"
 *           onChange={this._onChange}
 *           placeholder="Full Name"
 *           type="text"
 *           value={this.state.full_name}
 *         />
 *         <input
 *           name="address"
 *           onChange={this._onChange}
 *           placeholder="Street Address"
 *           type="text"
 *           value={this.state.address}
 *         />
 *         <input
 *           name="city"
 *           onChange={this._onChange}
 *           placeholder="City"
 *           type="text"
 *           value={this.state.city}
 *         />
 *         <input
 *           name="state"
 *           onChange={this._onChange}
 *           placeholder="State"
 *           type="text"
 *           value={this.state.state}
 *         />
 *         <input
 *           name="zip"
 *           onChange={this._onChange}
 *           placeholder="Zip Code"
 *           type="phone"
 *           value={this.state.zip}
 *         />
 *         <button type="submit">Submit Form</button>
 *       </form>
 *     );
 *   }
 * };
 **/

//const Exercise = () => (
  //<span />
//);



const Exercise = ({action, method}) => (
<div>
  <h3   class = "text-center">Functional based component</h3>
  <form action = {action} method = {method} class = "form-group">
    <input type = "text" name = "firstname" placeholder = "Enter your firstname" class = "form-control mt-2" />
    <input type = "text" name = "lastname" placeholder = "Enter your lastname" class = "form-control mt-2" />
    <input type = "password" name = "password" placeholder = "Enter your password" class = "form-control mt-2" />
    <select class = "form-control mt-2">
      <option value = "React">React</option>
      <option value = "Angular">Angular</option>
      <option value = "Vue">Vue</option>
    </select>
  <button class = "btn btn-primary mt-2">Submit</button>
  </form>
</div>

)

export default Exercise;

