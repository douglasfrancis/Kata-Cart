import React from 'react'
import "../index.css";
import { EventEmitter } from '../events'

function n(){
    return '-.--'
} 

class BasketItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          quantity: 0,
          show: true,
          max: 2,
          min: 0
        };
      }

      IncrementItem = () => {
      this.setState(prevState => {
        if(prevState.quantity < 50) {
          return {
            quantity: prevState.quantity + 1
          }
        } else {
          return null;
        }
      });
  }
  DecreaseItem = () => {
    this.setState(prevState => {
      if(prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        }
      } else {
        return null;
      }
    });
  }
  ToggleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  handleChange = (event) => {
    this.setState({quantity: event.target.value});
  }

    render() {
    return <div>
        
                <label id='item' for={this.props.id}>{this.props.name}</label>
                <p id='qty'>Qty</p>
                <button type="button" onClick={this.DecreaseItem}>-</button>
                <input className="inputne" value={this.state.quantity} onChange={this.handleChange} maxLength='2' size='2'/>
                <button type="button" onClick={this.IncrementItem}>+</button>
                <p>item total £</p>{n()}

           </div>
    }
};

/*
Create n function for individual cost
*/
export default BasketItem