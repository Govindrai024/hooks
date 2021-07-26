

import React,{useState, useEffect} from 'react'
import './UseState.css'

export const UseStatePrac = () => {

  
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `Chats ${count} `;
    });
  

    return (
        <div>
            <div className="center_div">
                <p>Use of useEffect</p>
                <p >{count}</p>
                <div 
                className="button2" 
                onClick={
                    () => setCount(count +1)
                    }>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
              
            </div>
        </div>
    )
}


export default UseStatePrac