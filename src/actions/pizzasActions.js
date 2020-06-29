import { createBrowserHistory } from 'history' 
import {FETCH_PIZZAS,} from '../actions/types'

const history = createBrowserHistory()

export const fetchPizzas=()=>dispatch=>{
        fetch("http://localhost:3000/pizzas")
        .then(res=>res.json())
        .then(pizzas=>dispatch({
            type:FETCH_PIZZAS,
            payload:pizzas
        }))
    
}

