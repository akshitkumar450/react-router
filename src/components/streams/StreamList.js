import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'
class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    // for showing delete and edit btns only when the logged  in user try to get streams created by him
    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className='ui button primary'>
                        edit
                    </Link>
                    <Link to='/streams/delete' className='ui button negative'>delete</Link>
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
    // navigate to create stream page is user is signed in
    renderCreateBtn = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='/streams/new' className='ui button primary'>create stream</Link>
                </div>
            )
        }
    }
    render() {
        // console.log(this.props.streams);
        return (
            <div>
                <h1>streams</h1>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                {this.renderCreateBtn()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(Object.values(state.streams));
    return {
        // Object.values takes an object as arg and put in an array
        //  converted into array for easy mapping through it and showing the list
        streams: Object.values(state.streams),
        // if we are having currentUserId -> user is signed in else null value
        currentUserId: state.auth.userId,
        // we can use currentUserId also we can use isSignedIn property to know signin or signout
        isSignedIn: state.auth.isSignedIn

    }
}

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList)
