import {useState} from 'react'
import './Requests.css'
import Request from './Request'

function Requests() {

    const element = document.getElementById('portal')
    
    const [option,setOption] = useState("active")

    return (
        <div className='Requests'>
            <div className='RequestsHeader'>
                
                <div className='Requests-Left'>
                    <h1>Requests</h1>
                    <span>3</span>
                </div>
                
                <div className='Requests-Right'>
                    <button onClick={()=>{setOption("active")}} style={{ color:`${ option === "active" ? "#4E89FC" : "#898B8D"}` }}>Active</button>
                    <button onClick={()=>{setOption("rejected")}} style={{ color:`${ option === "rejected" ? "#4E89FC" : "#898B8D"}` }}>Rejected</button>
                    <button onClick={()=>{setOption("expired")}} style={{ color:`${ option === "expired" ? "#4E89FC" : "#898B8D"}` }}>Expired</button>
                </div>
            </div>

            
            <div className='Request-Container'>
                <Request/>
                <Request/>
                <Request/>
            </div>


        </div>
    )
}

export default Requests