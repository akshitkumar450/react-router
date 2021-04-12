import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
    return ReactDOM.createPortal(
        // onclick is used if user click outside the modal link to home page
        // but if we click any child then due to event propagation this we also run
        // to stop propagation use e.stopPropagation inside child elements
        <div className='ui dimmer modals visible active'
            onClick={props.onDismiss}
        >
            <div className='ui standard modal visible active' onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    {props.title}
                </div>
                <div className='content'>
                    {props.content}
                </div>
                <div className='actions'>
                    {props.actions}
                </div>
            </div>
        </div>
        ,
        document.getElementById('modal')
    )
}

export default Modal
