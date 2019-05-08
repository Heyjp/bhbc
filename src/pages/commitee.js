import React from 'react';
import Layout from '../components/layout.js';

export default () => (
    <Layout>
        <div className="container ">
            <section className="content commmittee-wrap">
                    <div className="columns"> 
                        <div className="column ">
                            <h1 className="title is-3 has-text-weight-light">Your Officers and GMC 2019</h1>
                            <hr />
                            <div className="columns">
                                <div className="column is-two-fifths">
                                    <CommitteeTable />
                                </div>
                                <div className="column">
                                    <img alt="burgess hill bowls club commitee group" gatsrc="/static/Committee-edc591dd6fa7b0c638b0a1e5e896748b.JPG" />
                                </div>
                            </div>
                        </div>   
                    </div>
            </section>
        </div>
    </Layout>      
)

const CommitteeTable = () => (
    <table className="table is-bordered is-striped">
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
                <td>President</td>
                <td>Mick Pollard</td>
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
                <td>Paul Bremner</td>
            </tr>
            <tr>
                <td>Match Secretary</td>
                <td>Christine Salter</td>
            </tr>
            <tr>
                <td>Membership Secretary</td>
                <td>Anne Barnes</td>
            </tr>
            <tr>
                <td>Men's Captain</td>
                <td>Graham Corbitt</td>
            </tr>
            <tr>
                <td>Ladies Captain</td>
                <td>Hazel Jordan</td>
            </tr>
            <tr>
                <td rowSpan="3">Commitee Members</td>
                <td>Malcolm Mackenzie</td>
            </tr>
            <tr>
                <td>Jane Mckenzie</td>
            </tr>   <tr>
                <td>Carol Masters</td>
            </tr>
        </tbody>
    </table>
)