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
            })
        })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div> dont know</div>
        } else if (this.state.isSignedIn) {
            return <div>signed in</div>
        } else {
            return <div>not signed in</div>
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
