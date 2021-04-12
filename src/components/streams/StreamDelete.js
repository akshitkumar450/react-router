import React from 'react'
import Modal from '../Modal'
const StreamDelete = () => {
    const actions = (
        <div>
            <button className='ui negative button'>delete</button>
            <button className='ui button'>cancel</button>
        </div>
    )
    return (
        <div>
            StreamDelete
            <Modal
                title='Delete header'
                content='are your sure want to delete this stream?'
                actions={actions}
            />
        </div>
    )
}

export default StreamDelete
