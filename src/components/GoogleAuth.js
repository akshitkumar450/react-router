import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
class GoogleAuth extends Component {
    // state = {
    //     isSignedIn: null
    // }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // returns a promise
            window.gapi.client.init({
                clientId: '714969361012-ger65chtrib1tm9uoakmpan2j5opudh6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                // to put the status whether signed in or not to render component
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() })

                // update the auth state in redux store
                // here we want to use the same functionality of auth change ,so we have manually passed value
                this.onAuthChange(this.auth.isSignedIn.get())
                // this will run whenever user authentication status is changed
                // authchange fn will automatically get value true or false depending on the login or logout
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    // this fn will automatically get value true or false depending on the login or logout
    // when login -true
    // when logout -false
    onAuthChange = (isSignedIn) => {
        // any time our auth state changes we are calling the action creater
        if (isSignedIn) {
            // saving the userId when logged in
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={this.onSignOutClick}
                    className='ui red google button'>
                    <i className='google icon'></i>
                     sign out
                </button>
            )
        } else {
            return (
                <button
                    onClick={this.onSignInClick}
                    className='ui red google button'>
                    <i className='google icon'></i>
                     sign in
                </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // this value is having the same effect as before ,when the state is declared in this file only
        // it will be boolean
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(GoogleAuth)
