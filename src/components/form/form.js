import React from 'react';

const Form = () => (
    <div className="column">
        <form action="https://formspree.io/jplayer@tuta.io" method="POST">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" name="name" type="text" placeholder="e.g Alex Smith" />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" name="_replyto" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea name="message" className="textarea" placeholder="Type message" />
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control" style={{width: '100%'}}>
                    <input type="submit" value="Submit" className="button is-link is-fullwidth" />
                </div>
            </div> 
        </form>    
    </div>
)

export default Form;