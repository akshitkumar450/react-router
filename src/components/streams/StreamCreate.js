import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {
    // showing error when user clicks input and clicks out without putting data in inputs
    renderError(meta) {
        if (meta.touched && meta.error) {
            return (
                // error message will not show now bcz semantic ui has display none for classes as error
                <div className='ui error message '>
                    <div className='header'>
                        {meta.error}
                    </div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        // console.log(formProps);
        // console.log(formProps.meta);  // for showing error
        return (
            <div className='field'>
                <labe>{formProps.label}</labe>
                <input {...formProps.input} autoComplete='off' />

                {this.renderError(formProps.meta)}
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
        // if we add className of error ,,then semantic ui will show all the error messages 
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error '>
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
// validation
// validation will occur when form in initially rendered or any interaction with form
const validate = (formValues) => {
    const errors = {}
    // error field name should be same as name in Field 
    if (!formValues.title) {
        errors.title = 'you must enter a title'
    }
    if (!formValues.description) {
        errors.description = 'you must enter a description'
    }
    return errors
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate  // key should be form and  value can be any thing (string)
})(StreamCreate)
