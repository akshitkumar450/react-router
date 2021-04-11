import React from 'react'
import StreamForm from './StreamForm'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

// we have done refactor bcz our StreamEdit component also uses a form for editing which was same as createStream form 
// so we have created a new component StreamForm which can be reused in both creating and editing stream
// by passing a different onSubmit event handler
class StreamCreate extends React.Component {

    // pass this as a props to StreamForm component 
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <div>
                <h3>create a stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createStream: createStream })(StreamCreate)
