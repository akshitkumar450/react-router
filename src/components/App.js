import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'

import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import Header from './Header'
import history from '../history'
const App = () => {
    return (
        <div className='ui container'>
            {/* now we are making use of our own history object ,but before we were using history object from BrwoserRouter*/}
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} />
                        <Route path='/streams/show/:id' exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
