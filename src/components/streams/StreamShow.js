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
        this.buildPlayer()
    }

    componentDidUpdate() {
        this.buildPlayer()
    }
    // to stop straming video and detach itself from video element
    componentWillUnmount() {
        this.player.destroy()
    }
    buildPlayer() {
        if (this.player || !this.props.stream) {
            return
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }

    render() {
        // console.log(this.props.stream);
        // when the component will run first stream will not be available bcz componentDidmount fn runs after the component is rendered

        //    when our component first renders our stream will not be there so it will just return and reference of video element will not be there
        if (!this.props.stream) {
            return <div>loading..</div>
        }
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div >
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
