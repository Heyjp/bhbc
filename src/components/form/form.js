import React from 'react';

const Form = () => (
    <div className="column">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>
        </div>

        <div className="field">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div className="field is-grouped">
            <div className="control" style={{width: '100%'}}>
                <button className="button is-link is-fullwidth">Submit</button>
            </div>

        </div>     
    </div>
)

export default Form;