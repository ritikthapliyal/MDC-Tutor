import React, { Fragment } from 'react'
import reactDom from 'react-dom'
import RequestDetails from './RequestDetails'

function RequestOverlay({toggleSetDisplay}) {
    
    const portal = document.getElementById('portal')
    
    return reactDom.createPortal(
        <Fragment>
            <div onClick={toggleSetDisplay} className='RequestOverlay-Wrapper'></div>
            <RequestDetails toggleSetDisplay={toggleSetDisplay}/>
        </Fragment>
        ,portal)
}

export default RequestOverlay