import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = (props) => {
    return ReactDOM.createPortal(
        // onclick is used if user click outside the modal link to home page
        // but if we click any child then due to event propagation this we also run
        // to stop propagation use e.stopPropagation inside child elements
        <div className='ui dimmer modals visible active' onClick={() => history.push('/')}>
            <div className='ui standard modal visible active' onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    delete stream
                </div>
                <div className='content'>
                    are your sure want to delete this stream?
                </div>
                <div className='actions'>
                    <button className='ui primary button'>delete</button>
                    <button className='ui button'>cancel</button>
                </div>
            </div>
        </div>
        ,
        document.getElementById('modal')
    )
}

export default Modal
