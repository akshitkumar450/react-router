import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    // for showing delete and edit btns only when the logged  in user try to get streams created by him
    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <button className='ui button primary'>edit</button>
                    <button className='ui button negative'>delete</button>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    { /*for showing btns*/}
                    {this.renderAdmin(stream)}

                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>
                            {stream.description}
                        </div>
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
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList)
