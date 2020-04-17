
import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { order: '' ,items:[]};
  }
  
  mySubmitHandler = (event) => {
    const apiURL = 'https://www.cis.gvsu.edu/~kurmasz/Orders/';
    event.preventDefault();
   // alert("You are submitting " + this.state.order);
    fetch(apiURL + this.state.order).then(res => res.json()).then(
      (result) =>{
       
      this.setState({
        items: result
      });

      });
  }
  myChangeHandler = (event) => {
    this.setState({order: event.target.value});
  }
  render() {
    const {  items } = this.state;
    let total = 0;
    return (
      
      <form onSubmit={this.mySubmitHandler}>
      <h1>Online Order Reciepts</h1>
      <p>Enter your order number, and submit:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
         <ul>
           <tr>
         <td> Name |</td> <td> quantity |</td><td> price </td>
         </tr>
          {items.map(item => (
            total += item.quantity*item.price,
            <tr key={item.item}>
             <td> {item.item}</td> <td>{item.quantity} </td><td>${item.price}</td>
            </tr>
          ))}
          <p>Total: ${total.toFixed(2)}</p>
        </ul>
      </form>
      
   
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
