import React,{useState} from 'react'
import './UseState.css'

export const UseStatePrac = () => {

    const [myNum, setmyNum] = useState(0)

    return (
        <div>
            <div className="center_div">
                <p>Use of useState</p>
                <p >{myNum}</p>
                <div className="button2" onClick={() => setmyNum(myNum +1)}>
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