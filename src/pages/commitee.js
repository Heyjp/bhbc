import React from 'react';
import Layout from '../components/layout.js';

export default () => (
    <Layout>
        <section className="content commmittee-wrap">
            <div className="container ">
                <div className="columns is-centered"> 
                    <div className="column is-four-fifths ">
                        <h1 className="title is-4 has-text-centered">Your Officers and GMC 2018</h1>
                        <div className="columns">
                            <div className="column">
                                <CommitteeTable />
                            </div>
                            <div className="column">
                            
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
    </Layout>      
)

const CommitteeTable = () => (
    <table>
        <thead>
            <tr color="primary">
                <td>Position</td>
                <td>Held By</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan="2" >Officers</td>
            </tr>
            <tr>
                <td>Chairman</td>
                <td>Gary Player</td>
            </tr>
            <tr>
                <td>Secretary</td>
                <td>Roy Evans</td>
            </tr>
            <tr>
                <td>Treasurer</td>
                <td>Basil Larkins</td>
            </tr>
            <tr>
                <td>Match Secretary</td>
                <td>David Antliff</td>
            </tr>
            <tr>
                <td>Membership Secretary</td>
                <td>Christine Salter</td>
            </tr>
            <tr>
                <td>Men's Captain</td>
                <td>Malcolm Mackenzie</td>
            </tr>
            <tr>
                <td>Ladies Captain</td>
                <td>Hazel Jordan</td>
            </tr>
        </tbody>
    </table>
)