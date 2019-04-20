import React from 'react';
import Layout from "../components/layout"
import MyMap from "../components/map/map.js"
import Form from "../components/form/form.js"

import LocationOnIcon from 'material-react-icons/LocationOn'
import PhoneIcon from 'material-react-icons/Phone';

export default () => (
    <Layout>
        <section className="contact-section">
            <div className="columns is-centered"> 
                <div className="column is-four-fifths ">
                <div className="contact">
                    <h1 className="title is-4 has-text-centered">
                        Contact Burgess Hill Bowls Club
                    </h1>
                    <h4 className="subtitle is-5 has-text-centered">Visit or Drop us a line</h4>
                </div>
                <MyMap />
                <div className="contact-info-wrapper">
                    <div className="columns">
                        <div className="column is-one-third is-centered">
                            <div className="box">
                                <h2 className="subtitle">
                                    Club Address
                                </h2>
                                <hr />
                                <ul className="contact-address">
                                    <li><LocationOnIcon />Burgess Hill Bowling Club</li>
                                    <li>Westhill Drive</li>
                                    <li>Burgess Hill</li>
                                    <li>RH15 9PP</li>
                                    <br/>
                                </ul>
                                <ul className="contact-address">
                                    <li>
                                        <h4 className="subtitle is-6">
                                            <PhoneIcon />    Phone 
                                        </h4>
                                    </li>
                                    <li>01444 870533</li>
                                </ul>
                            </div>
                        </div>
                        <Form></Form>
                    </div> 
                </div>
                </div>
            </div>
        </section> 
    </Layout>
);