import {useState} from 'react'
import './Requests.css'

function Requests() {

    const [option,setOption] = useState("active")

    return (
        <div className='Requests'>
            <div className='RequestHeader'>
                <div>
                    <h1>Requests</h1>
                    <span>3</span>
                </div>
                <div className='Requests-Options'>
                    <button onClick={()=>{setOption("active")}} style={{ color:`${ option === "active" ? "#4E89FC" : ""}` }}>Active</button>
                    <button onClick={()=>{setOption("rejected")}} style={{ color:`${ option === "rejected" ? "#4E89FC" : ""}` }}>Rejected</button>
                    <button onClick={()=>{setOption("expired")}} style={{ color:`${ option === "expired" ? "#4E89FC" : ""}` }}>Expired</button>
                </div>
            </div>

            {/* {
                arr.Filter()
            } */}


        </div>
    )
}

export default Requests