import React from 'react';
import { Link } from 'gatsby';

export default () => (
    <footer className="footer has-background-grey-dark">
        <div className="content has-text-centered">
            <div className="level">
                <div className="level-item">
                    <p className=" has-text-white-ter">Burgess Hill Bowling Club,
                            Westhill Drive,
                            Burgess Hill,
                            RH15 9PP,
                            01444 870533
                        </p>
                </div>
            </div>
            <hr className="footer-divider has-background-white " />
            <div className="level">
                <div className="level-item">
                    <Link to="/" className="has-text-weight-semibold has-text-white">Home</Link>
                </div>
                <div className="level-item">s
                    <Link to="/history" className="has-text-weight-semibold has-text-white">About</Link>
                </div>
                <div className="level-item">
                 <Link to="/fixtures" className="has-text-weight-semibold has-text-white">Fixtures</Link>
                </div>
                <div className="level-item">
                  <Link to="/contact" className="has-text-weight-semibold has-text-white">Contact</Link>
                </div>
            </div>
        </div>
    </footer>
)