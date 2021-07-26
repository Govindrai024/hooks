import React,{ useReducer} from 'react'
import '../useState/UseState.css'

const reducer = (state, action) =>{
    if(action.type === "INC"){
        state = state + 1;
    }
    if(state > 0 && action.type === 'DEC'){
        state = state - 1;
    }
    return state
};

 const UseReducerPrac = () => {
  const intial = 0;
  const [state, dispatch] = useReducer(reducer, intial);

    return (
        <div>
            <div className="center_div">
                <p>Use of useReducer</p>
                <p>{state}</p>
                <div 
                className="button2" 
                onClick={
                    () => dispatch({type:'INC'})
                    }>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
                <div 
                className="button2" 
                onClick={
                    () => dispatch({type:'DEC'})
                    }>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DEC
                </div>
            </div>
        </div>
    )
}


export default UseReducerPrac