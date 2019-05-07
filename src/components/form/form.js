import React from 'react';
import { Form, Field } from 'react-final-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const onSubmit = (values) => {
    return axios.post(
        "https://formcarry.com/s/vgDw9lD0H2M", 
        values, 
        {headers: {"Accept": "application/json"}}
    )
    .catch(function (error) {
        console.log(error);
    });
};

const FinalForm = () => (
    <div className="column">
        <ToastContainer />
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, reset }) => (
                <form onSubmit={event => {
                    handleSubmit(event).then(() => {
                        form.reset();
                        toast('Message sent successfully');
                    });

                    }
                }>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <Field 
                                component="input"
                                className="input" 
                                name="name" 
                                type="text" 
                                placeholder="e.g Alex Smith"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <Field 
                                component="input"
                                className="input" 
                                name="_replyto" 
                                type="email" 
                                placeholder="e.g. alexsmith@gmail.com"
                                />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <Field 
                            name="message" 
                            component="textarea" 
                            className="textarea"
                            placeholder="Enter message" 
                            />
                    </div>
                    <div className="field is-grouped">
                        <div className="control" style={{width: '100%'}}>
                            <div className="buttons is-pulled-right">
                                <button
                                        className="button "
                                        type="button"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                    >
                                    Reset
                                    </button>
                                <button  
                                    className="button is-primary " 
                                    type="submit" 
                                    disabled={submitting || pristine}
                                    >
                                    Submit
                                </button>                               
                            </div>
                        </div>
                    </div> 
                </form>
        )}  />
    </div>
);

export default FinalForm;