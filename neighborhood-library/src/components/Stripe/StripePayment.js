import React, { Component } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import dotenv from 

class StripePayment extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        name: '',
        amount:''
    };
 }


handleSubmit = async e => {
    e.preventDefault();
    try {
        let token = await this.props.stripe.createToken({name: this.state.name});
        console.log(token);
    } catch (e) {
        throw e;
    }
    console.log('clicked!')
}

handleInputChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value });
  };
 render() {
     return (
         <div className='paymentContainer'>
             <form 
                className='paymentForm'
                onSubmit={this.handleSubmit}
            >
                 <label>Name</label>
                 <input
                    type='text'
                    defaultValue={this.state.name}
                    onChange={this.handleInputChange}
                 />
                 <label>Dollar Amount</label>
                 <input
                    type='text'
                    defaultValue={this.state.amount}
                    onChange={this.handleInputChange}
                 />
                 <br />
                 <label>hint: testing card number is 4242 4242 4242 4242 4242. any CVV and zip may be used</label>
                 <CardElement className='cardElement'/>
                 <button className='button'>Click to Pay</button>
             </form>

         </div>
     )
 }

}
export default injectStripe(StripePayment);