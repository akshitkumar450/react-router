import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className='ui negative button'>delete</button>
            <button className='ui button'>cancel</button>
        </React.Fragment>

    )
    return (
        <div>
            StreamDelete
            <Modal
                title='Delete header'
                content='are your sure want to delete this stream?'
                actions={actions}
                onDismiss={() => history.push('/')}
            />
        </div>
    )
}

export default StreamDelete
