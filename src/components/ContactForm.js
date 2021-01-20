import React, { useEffect, useState } from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        "fullName": '',
        "mobile": '',
        "email": '',
        "address": '',
    }
    var [values, setValues] = useState(initialFieldValues)
    //Populating the form when correction is pressed
    //Wehn there is a change in currentId, contactObjects this callback function will be called
    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])
    //The name attribute is used because it contains every single information in the initialFieldValues vars
    //We are able to use it because of our "name" in our "input" tag
    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        //The actual form and styling with the font-awesome icon from bootstrap
        //The values which are the const are in the var-values, which in return are int the form "value" param
        //On change is use to populate the rows with information,
        //"on Submit" function enables us to send information to firebase
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>

                    </div>

                </div>
                <input className="form-control" placeholder="Full Name" name="fullName"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>

                        </div>

                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>

                        </div>

                    </div>
                    <input className="form-control" placeholder="Email" name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </div>

            </div>

            <div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary block"></input>
            </div>

        </form>
    );
}

export default ContactForm;
//Submit button if its (?) empty string then it will be save if not then it will be update