import {FETCH_PIZZAS,SEE_PIZZAS} from '../actions/types'
const initialState={
    pizzas:[]
}
export default function(state=initialState,action){
    switch(action.type){
       
            
        
        case FETCH_PIZZAS:
            return{
                ...state,
                pizzas:action.payload
            }
default:
    return state;            

    }

}