import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {

    renderInput(formProps) {
        // console.log(formProps);
        return (
            <div className='field'>
                <labe>{formProps.label}</labe>
                <input {...formProps.input} />
            </div>
        )
    }

    // will run when the form submit and the data of Fields will be available here
    onSubmit(formValues) {
        // e.preventDefault() // no need with redux form ,done automatically
        console.log(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                <Field
                    name='title'
                    label='enter title'
                    // as the renderInput calls it will pass a set of properties as a props to that fn
                    component={this.renderInput}
                />

                <Field name='description' label='enter description' component={this.renderInput} />
                <button className='ui button primary'>submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'  // key should be form and  value can be any thing (string)
})(StreamCreate)
