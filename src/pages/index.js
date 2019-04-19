import React from "react"
// import WeatherWidget from '../components/weather/weather.js';
import { Link, graphql } from "gatsby"
import App from './app.js';
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1 className="title">Hi people</h1>
//     <h2 className="subtitle">Welcome to Burgess Hill Bowls Club</h2>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

const Hero = () => (
  <section className="hero">
    <div className="container">
        <div className="hero-body">
            <div className="level">
              <div className="level-left">
                <div>
                  <h1 className="title">
                        Burgess Hill Bowls Club
                  </h1>
                  <h4 className="subtitle is-4">
                    Welcome to our website
                  </h4>
                </div>
              </div>
              <div className="level-right">
                <img alt="Burgess Hill Cred" src="http://btckstorage.blob.core.windows.net/site9514/Header/New_Crest_2006_006%5B1%5D.jpg" />
              </div>
            </div>
        </div>
      </div>
  </section>
)

const Main = () => (
  <section className="content has-background-light main-container">
    <div className="container">
        <h4 className="subtitle is-4 has-text-centered">About Our Club</h4>
        <div className="columns">
          <div className="column">
            <p>Burgess Hill Bowls Club, is the only Lawn Bowls Club in our town and is tucked away in West Hill Drive, just off Royal George Road. The club has over one hundred and fifty playing and social members and has six rinks and a modern licensed clubhouse, used on match days and for social events</p>
            <p>Our playing season begins in late April and runs through the summer months to the middle of September. The majority of our fixtures throughout the season are friendly matches with other clubs in the area, and are played on weekday and weekend afternoons.These games are a relaxed and easy way to learn, improve and play bowls. </p>
          </div>
          <div className="column">
            <p>For those players wishing to play in a more competitive arena the club enters teams in two leagues as well as players in both National and County competitions. On Monday afternoons and Friday nights there are ‘Turn up and Bowl’ drives, 
              and during the season a number of Fun drives are held such as the Candlelight match, Club Triples day, End of Season drive and others. 
              Most of these events raise money for our chosen charity. 
            </p>
            {/* Throughout the winter months the Bar is open most Friday evenings and some other nights. The club now has two darts teams playing in the local leagues every Wednesday throughout the winter months and the darts board is available for casual play at times when the club is open. */}
            <p>
              Please note that we welcome touring sides who are visiting Sussex, please use the contact form if you are interested in playing us.
            </p>    
            </div>
        </div>
      </div>
    </section>
)


const Content = () => (
  <section className="content box-container">
      <div className="container">
        <div className="columns">
          <div className="column box-column">
            <div className="box box-vertical ">
                <h4 className="subtitle ">Club History</h4>
                <p>Find out more about our club and get to know our commitee.</p>
                <Link to="/history" className="button is-fullwidth has-background-success has-text-light">History</Link>
            </div>
          </div>
          <div className="column box-column">
            <div className="box box-vertical">
            <h4 className="subtitle">Events</h4>
                  <p>A number of social events take place throughout the year, Quiz nights, Bingo, Club Barbeques, Jazz Nights and a Christmas Party. </p>
                  <Link to="/events" className="button is-fullwidth has-background-success has-text-light">Find our Events</Link>
              </div>
            </div>
          <div className="column box-column">
            <div className="box box-vertical">
            <h4 className="subtitle">Find Us</h4>
                  <p>Our Green is open to members of the public, but advance booking is required and the appropriate Green Fee payable.</p> 
                  <Link to="/contact" className="button is-fullwidth has-background-success has-text-light">Contact Us</Link>
              </div>
            </div>
        </div>
      </div>
    </section>
)

const Membership = () => (
  <section className="content membership-container">
    <div className="container">
      <h2 className="subtitle is-3 has-text-centered">Join Us</h2>
      <div className="columns is-5 " style={{"marginTop": "1rem"}}>
        <div className="column" >
          <h4 className="has-text-centered">Membership</h4>
          <p>
              Should you feel like taking up a new hobby or just moving from another area or club you will be made most welcome. You don't need to be super fit, just willing to join in and enjoy yourself.
          </p>
          <p>
              If you are new to bowling don’t despair, we hold Beginners nights from May with a great coach to show you the ropes.
              The club also hold a couple of Open Days during the year and everyone is made welcome and encouraged to ‘have a go’
          </p>
        </div>
        <div className="column">
            <h4 className="has-text-centered">Annual Subscriptions - 2018</h4>
            <p>
                There are currently three types are Membership: Playing, Junior and Social. 
            </p>
            <ul>
                <li> 
                    Playing Member Subscription is: £80.00 per year
                </li>  
                <li>        
                    Junior Member Subscription is £10.00 per year
                </li>
                <li> 
                    Social Member Subscription is £16.00 per year
                </li> 
            </ul>
            <p>The Membership year is from 1st April</p>
            <p>Our Green is open to members of the public, but advance booking is required and the appropriate Green Fee payable. </p>
        </div>
      </div>
    </div>
  </section>
)

const Sponsors = () => (
  <section className="sponsor-container has-background-light">
      <h2 className="subtitle has-text-centered">Sponsors</h2>
      <div className="columns is-centered">
        <div className="column is-half level">  
          <figure className="image is-128x128 container">
            <Link to="http://www.karrenharriswm.co.uk">
              <img alt="sponsor logo" src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F3%2F6%2F4%2F6%2F1386463-1-eng-GB%2Fsjp.jpg%3Fv1?width=700&source=ftadviser" />
            </Link>
          </figure>
        </div>
      </div>
  </section>
)

// const Visiting = () => (
//   <section>
//       <div className="container">
//           <div>
            
//           </div>
//           <div>
//                 Our Green is open to members of the public, but advance booking is required and the appropriate Green Fee payable. 

//                Please note that we welcome touring sides who are visiting Sussex, please use the contact form if you are interested in playing us.
//           </div>
//       </div>
//   </section>
// )

const Articles = (props) => {  
  return (
        <ul>
          {props.articles.edges.map(doc => (
            <li key={doc.node.id}>
              <h2 className="subtitle is-2">
                {doc.node.title}
              </h2>
              <p>{doc.node.content}</p>
            </li>
          ))}
        </ul>
      )
    }

const IndexPage = ({data}) => {
  return (
    <Layout>
        <Hero></Hero>
        <Main></Main>
        <Content></Content>
        <hr />
        {/* <Articles articles={data.allStrapiArticle} /> */}
        <Membership></Membership>
        <Sponsors></Sponsors>
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`