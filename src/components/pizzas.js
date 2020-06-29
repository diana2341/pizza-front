import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPizzas} from '../actions/pizzasActions'
class pizzas extends Component {
    componentDidMount(){
        this.props.fetchPizzas();
    }
    render() {
        const pizzaItems=this.props.pizzas.map(pizza=>(
            <div class="grid-item" key={pizza.id} >
                <div > 
                  <h3>{pizza.name}</h3>
                <p>{pizza.topping}</p>
                <p>{pizza.size}</p>
                <p>{pizza.price}</p>  
                </div>
                


            </div>
        )
        )
        return (
            <div>
                <h1>list of pizzas</h1>
                <div className="grid-container">
                    {pizzaItems}
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    pizzas:state.pizzas.pizzas
})
export default  connect(mapStateToProps,{fetchPizzas})(pizzas)