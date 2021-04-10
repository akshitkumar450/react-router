import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                    </div>
                    <div className='description'>
                        {stream.description}
                    </div>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props.streams);
        return (
            <div>
                <h1>streams</h1>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(Object.values(state.streams));
    return {
        // Object.values takes an object as arg and put in an array
        streams: Object.values(state.streams)
    }
}

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList)
