import React from 'react';
import Layout from "../components/layout"

const Hero = () => (
    <section className="hero">
        <div className="hero-body">
            <div className="container">
                <img alt="Burgess Hill Cred"  src="http://btckstorage.blob.core.windows.net/site9514/Header/New_Crest_2006_006%5B1%5D.jpg" />
                <h1 className="title">
                    Burgess Hill Bowls Club
                </h1>
            </div>
        </div>
    </section>
)

const Main = () => (
    <section className="section">
        <div className="container">
            <p>Burgess Hill Bowls Club, is the only Lawn Bowls Club in our town and is tucked away in West Hill Drive, just off Royal George Road. The club has over one hundred and fifty playing and social members and has six rinks and a modern licensed clubhouse, used on match days and for social events</p>
            <p>Our playing season begins in late April and runs through the summer months to the middle of September. The majority of our fixtures throughout the season are friendly matches with other clubs in the area, and are played on weekday and weekend afternoons.These games are a relaxed and easy way to learn, improve and play bowls. </p>
            <p>For those players wishing to play in a more competitive arena the club enters teams in two leagues as well as players in both National and County competitions. On Monday afternoons and Friday nights there are ‘Turn up and Bowl’ drives, and during the season a number of Fun drives are held such as the Candlelight match, Club Triples day, End of Season drive and others. Most of these events raise money for our chosen charity.  A number of social events take place throughout the year, Quiz nights, Bingo, Club Barbeques, Jazz Nights and a Christmas Party. Throughout the winter months the Bar is open most Friday evenings and some other nights.  The club now has two darts teams playing in the local leagues every Wednesday throughout the winter months and the darts board is available for casual play at times when the club is open. </p>
            <p>Our Green is open to members of the public, but advance booking is required and the appropriate Green Fee payable.</p> 
            <p>Please note that we welcome touring sides who are visiting Sussex, please use the contact form if you are interested in playing us.</p>         
        </div>
    </section>
)

export default () => (
    <Layout>
        <Hero></Hero>
        <Main></Main>
    </Layout>
)