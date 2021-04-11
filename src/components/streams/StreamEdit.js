import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
class StreamEdit extends React.Component {
    // when the Route component of react-router renders this component 
    // react-router-dom  passes many props to rendered component
    // console.log(props);
    // console.log(props.match.params.id);

    // when we directly goes to /streams/edit/3  redux store has no data 
    // so streams will be undefined at begin
    // Every component needs to fetch its own data ,,and should not rely on other component data
    // that one component has loaded data we can't use that data in other component

    // so to get data we need to call methods so that our component can get its own data 
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    render() {
        // console.log(this.props.stream);
        if (!this.props.stream) {
            return <div>loading..</div>
        }

        return (
            <div>
                {this.props.stream.title}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    // console.log(props);
    // getting the selected stream from store
    // state.streams is an object
    return {
        stream: state.streams[props.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream: fetchStream })(StreamEdit)
