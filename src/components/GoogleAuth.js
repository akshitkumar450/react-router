import React, { Component } from 'react'

class GoogleAuth extends Component {
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // returns a promise
            window.gapi.client.init({
                clientId: '714969361012-ger65chtrib1tm9uoakmpan2j5opudh6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                // to put the status whether signed in or not to render component
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                // this will run whenever user authentication status is changed
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
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

export default GoogleAuth
