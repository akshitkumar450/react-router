import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {

    renderInput(formProps) {
        // console.log(formProps);
        return <input
            {...formProps.input}
        // value={formProps.input.value}
        // onChange={formProps.input.onChange}
        />
    }
    render() {
        // console.log(this.props);
        return (
            <form>
                <Field
                    name='title'   //any name of the property (any) required
                    component={this.renderInput}
                />

                <Field name='description' component={this.renderInput} />

            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'  // key should be form and  value can be any thing (string)
})(StreamCreate)
