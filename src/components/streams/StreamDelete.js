import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}
                    className='ui negative button'>
                    delete
                </button>

                <Link to='/' className='ui button'>cancel</Link>
            </React.Fragment>
        )
    }
    // when the component first renders stream will not be present 
    // bcz first this component renders and than only our componentDidMount() will runs
    // after that only stream will be available
    renderContent = () => {
        if (!this.props.stream) {
            return 'are you sure want to delete this stream?'
        }
        return `are you sure want to delete this stream with title: ${this.props.stream.title}`
    }

    render() {
        // console.log(this.props.match.params.id);
        // console.log(this.props.stream.title);
        // console.log(this.props.stream.description);

        return (
            <div>
                <Modal
                    title='Delete header'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

// getting stream fo current id
const mapStateToProps = (state, props) => {
    return {
        stream: state.streams[props.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream: fetchStream,
    deleteStream: deleteStream
})(StreamDelete)
