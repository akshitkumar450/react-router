import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
    return <div>
        pageone
    <Link to='/2' >pagetwo</Link>
    </div>
}

const PageTwo = () => {
    return <div>pageTwo .......
    <Link to='/' >pageone</Link>
    </div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={PageOne} />
                    <Route path='/2' component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
