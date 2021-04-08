import React, { Component } from 'react'

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '714969361012-ger65chtrib1tm9uoakmpan2j5opudh6.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return (
            <div>
                google auth
            </div>
        )
    }
}

export default GoogleAuth
