import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import flv from 'flv.js'

// https://github.com/Bilibili/flv.js/
class StreamShow extends React.Component {

    constructor(props) {
        super(props)
        // to get reference of the video element which will be shown in DOM
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }


    render() {
        // console.log(this.props.stream);
        // when the component will run first stream will not be available bcz componentDidmount fn runs after the component is rendered
        if (!this.props.stream) {
            return <div>loading..</div>
        }
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
                {this.props.stream.title}
                {this.props.stream.description}
            </div>
        )
    }
}

// fetching the stream from the redux store with the id in the url 
const mapStateToProps = (state, props) => {
    return {
        stream: state.streams[props.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream: fetchStream
})(StreamShow)
