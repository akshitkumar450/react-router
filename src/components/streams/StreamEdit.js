import React from 'react'
import { connect } from 'react-redux'
import { formValues } from 'redux-form'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
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

    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        // console.log(this.props.stream);
        if (!this.props.stream) {
            return <div>loading..</div>
        }

        return (
            <div>
                {/*this.props.stream.title*/}
                <h3>Edit a stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    // for showing initial values in the form
                    // key values should be same as the name value in Field in redux form
                    // this.props.stream is object having title and description as key which is same as name property in Field component
                    // when the Field component is shown it will look at the name field 
                    // and if the name field has some initialValues of the name property passed from parent component and they will be shown
                    // initialValues={this.props.stream}  //dont pass the full stream object as it contains id and userId also
                    initialValues={
                        {
                            title: this.props.stream.title,
                            description: this.props.stream.description
                        }
                    }
                />
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
export default connect(mapStateToProps, {
    fetchStream: fetchStream,
    editStream: editStream
})(StreamEdit)
