import './Requests.css'
import {Fragment, useState} from 'react'
import RequestOverlay from './RequestOverlay'
import doubt from '../../../../assets/doubt.svg'

function Request() {

    const [displayOverlay,setDisplayOverlay] = useState(false)

    const toggleSetDisplay = () => {
        setDisplayOverlay(!displayOverlay)
    }

    return (
        <Fragment>
            <div onClick={toggleSetDisplay} className='Request'>

                <div className='Request-Left'>
                    <img src={doubt}></img>
                    <p>Grade 8</p>
                    <h5>Mathematics</h5>
                    <span>8/8 Criteria Match</span>
                </div>

                <div className='Request-Right'>
                    <button style={{color:"#898B8D"}}>Reject</button>
                    <button style={{backgroundColor:'#4e89fc',color:"white"}}>Approve</button>
                </div>

            </div>

            {displayOverlay && <RequestOverlay toggleSetDisplay={toggleSetDisplay}/>}
        
        </Fragment>
    )
}

export default Request