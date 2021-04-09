import React from 'react'
import { Field, reduxForm } from 'redux-form'
class StreamCreate extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <form>
                <Field
                    name='title'   //any name of the property (any) required
                />

                <Field name='description' />

            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'  // key should be form and  value can be any thing (string )
})(StreamCreate)
