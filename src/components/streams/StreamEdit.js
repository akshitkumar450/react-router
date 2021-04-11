import React from 'react'
import { connect } from 'react-redux'

const StreamEdit = (props) => {
    // when the Route component of react-router renders this component 
    // react-router-dom  passes many props to rendered component
    // console.log(props);
    // console.log(props.match.params.id);

    // when we directly goes to /streams/edit/3  redux store has no data 
    // so streams will be undefined at begin
    // Every component needs to fetch its own data ,,and should not rely on other component data
    // that one component has loaded data we can't use that data in other component
    console.log(props);
    return (
        <div>
            StreamEdit
        </div>
    )
}

const mapStateToProps = (state, props) => {
    // console.log(props);
    // getting the selected stream from store
    // state.streams is an object
    return {
        stream: state.streams[props.match.params.id]
    }
}
export default connect(mapStateToProps)(StreamEdit)
