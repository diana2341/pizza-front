import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPizzas,seePizzas} from '../actions/pizzasActions'
class pizzas extends Component {
    componentDidMount(){
        this.props.fetchPizzas();
    }
    render() {
        const pizzaItems=this.props.pizzas.map(pizza=>(
            <div className="grid-item" key={pizza.id} >
                <div onClick={()=>{this.props.history.push(`/pizzas/${pizza.id}`)}}> 
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