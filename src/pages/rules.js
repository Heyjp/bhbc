import React from 'react';
import Layout from '../components/layout.js';



const RuleBox = () => (
    <div className="column rule-wrap">
        <div className="box has-background-light">
            <h5 className="subtitle is-5">Rules</h5>
            <div className="content is-small">
                <ol type="1">
                    <li>
                        Within 7 days of a round commencing, the challenger (first name on the draw) should offer the opponent a 
                        minimum of three reasonable dates at least one of which must be a weekend. (This does not apply to the Drawn 
                        Mixed Triples)
                    </li>
                    <li>
                        Competitions may not be played on Club Nights.
                    </li>
                    <li>
                        In all Singles competitions, it is the challengers responsibility to arrange markers.
                        Except in the semi-finals and finals when markers are appointed by the Tournament committee.
                    </li>
                </ol>
            </div>
            <div>
                <p className="has-text-info">NB Please note the dress code for all club competitions - grey trousers / skirts and white / club tops must be worn. </p>
            </div>
        </div>
    </div>  
)

const Competitions = () => (
    <div className="column is-three-fifths comp-wrap">
        <h1 className="title title-spacer">Competitions</h1>
        <hr />
        <h3 className="subtitle is-4">Ladies Competitions</h3>
        <div className="divSpacer">
            <p><strong>Ladies Maynard Chamionship </strong></p>
            <p>Play to 21 shots, 4 woods each  (Rule 3 applies) </p>
        </div>
        <div className="divSpacer">
            <p><strong>Ladies Two Woods </strong></p>
            <p>Play to 21 ends, 2 woods each - Only woods within one yard of jack score  (Rule 3 applies)</p>
        </div>
        <h3 className="subtitle is-4">Mens Competitions</h3>
        <div className="divSpacer">
            <p><strong>Mens Championship</strong></p>
            <p>Play to 21 shots, 4 woods each  (Rule 3 applies)</p>
        </div>
        <div className="divSpacer">
            <p><strong>Mens Two Woods</strong></p>
            <p>Play to 21 ends, 2 woods each - Only woods within one yard of jack score  (Rule 3 applies)
            </p>
        </div>
        <h3 className="subtitle is-4">Mixed Competitions</h3>
        <div className="divSpacer">
            <p><strong>Mixed Handicap</strong></p>
            <p>Play to 21 shots plus the handicap difference, 4 woods each   (Rule 3 applies)
            </p>
        </div>
        <div className="divSpacer">
            <p><strong>Mixed Oldland</strong></p>
            <p>Play to 21 ends, 2 woods each - Only woods within one yard of jack score  (Rule 3 applies)
            </p>
        </div>
        <div className="divSpacer">
            <p><strong>Veterans Cup (Mixed)</strong></p>
            <p>Play to 100 points, 4 woods each - Minimum age 60, points allocated 5, 3, 1 for nearest woods to jack  (Rule 3 applies)
            </p>
        </div>
        <div className="divSpacer">
            <p><strong>Centenary Cup</strong></p>
            <p>Best of 3 x 7 end sets, 4 woods each - Open only to first Match losers in the Men's and Ladies Championships  (Rule 3 applies)
            </p>
        </div>
        <div className="divSpacer">
            <p><strong>Drawn Pairs (Mixed)</strong></p>
            <p>Play to 21 ends, 4 woods each - substitutes arranged by the tournament committee
            </p>
        </div>
        <div className="divSpacer">
            <p><strong>Married Pairs</strong></p>
            <p>Play to 21 ends, 4 woods each 
            </p>
        </div>
        <div className="divSpacer">
            <p><strong>Drawn Triples (Mixed)</strong></p>
            <p>Play to 18 ends, 3 woods each - Fixed dates (unless a date is agreed prior to the fixed date) - substitutes arranged by the tournament committee 
            </p>
        </div>
        <div className="divSpacer">
            <p><strong>Australian Pairs (Mixed)</strong></p>
            <p>
                Play to 18 ends, 4 woods each - Players alternate positions each end. woods played in a 2, then 4 then 2 sequence. substitutes arranged by the tournament committee
            </p>
        </div>
    </div>
)

export default () => (
    <Layout>
        <div className="container">
            <section className="content">
                    <div className="columns">
                        <Competitions />
                        <RuleBox />
                    </div>
            </section>
        </div>                                               
    </Layout>
)