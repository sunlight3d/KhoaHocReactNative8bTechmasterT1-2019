import {combineReducers} from 'redux'
export const counterReducer = (state = {counter: 0}, action) => {
    switch(action.type){
        case 'INCREASE_ACTION': {
            // alert(JSON.stringify(state))
            //alert('INCREASE_ACTION INCREASE_ACTION')
            let newState = Object.assign({}, state)
            newState.counter =  newState.counter + 1
            return newState
        }
        case 'DECREASE_ACTION': {
            let newState = Object.assign({}, state)
            newState.counter =  newState.counter - 1
            return newState
        }
        
    }
    
    return state
}

export const reducer2 = (state = {x: 0}, action) => {
    switch(action.type){
        case 'X_ACTION': {
            break;
        }
    }
    return state
}
export var allReducers = combineReducers({counterReducer, reducer2});


