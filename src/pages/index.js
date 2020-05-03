import React from 'react'
import Helmet from 'react-helmet'
import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import image00 from '../assets/images/downdog.jpg'
import image01 from '../assets/images/downdog1.jpg'
import Map from '../components/Map.js'
import MyForm from '../components/Contact.js'
import Scroll from '../components/Scroll';

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Down Dog Yoga 1',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Down Dog Yoga 2',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Down Dog Yoga 3',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Down Dog Yoga 4',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Down Dog Yoga 5',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Down Dog Yoga 6',
  },
]

const HomeIndex = () => {
  const siteTitle = 'Down Dog Yoga Studio London'
  const siteDescription = 'Down Dog Yoga Studio London  - Yoga classes in London'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h1>
              Down Dog Yoga Studio London
            </h1>
          </header>
          <p>
            Down Dog Yoga Studio is based in Wapping - East London (10 minutes from Wapping Overground, Shadwell DLR or Overground). We offer friendly, accessible group yoga classes, private one-to-ones and 
            workshops. For something special, we also run yoga retreats in the UK and Spain. Check <a href="#onepointthree">here</a> for our upcoming retreats.
          <br />
          <br />
            We hold classes in a variety of levels and different styles such as Vinyasa Flow, Ashtanga and Yin.
          </p>
          <img className="section-image" src={image00} alt="" />
          <ul className="actions">
            <li>
              <Scroll type="id" element="onepointone">
              <a href="#onepointone" className="button">
                Find out more
              </a>
              </Scroll>
            </li>
          </ul>
        </section>
        <section id="onepointone">
          <header className="major">
              <h2>
                Prices and Class Timetable
              </h2>
          </header>
            <p>
              <p>
              Try your first class for free! Just drop us a <Scroll type="id" element="three"><a href="#three">message</a></Scroll> or give  us a call to book.
              </p>
              <h3>Prices</h3>
              <ul>
                <ul>Drop-ins: £7</ul>
                <ul>5 class pack: £32</ul>
                <ul>10 class pack: £60</ul>
              </ul>
              <h3>Classes</h3>
              <ul>
                <ul>7pm-8pm, Monday - Ashtanga (L2)</ul>
                <ul>7pm-8pm, Tuesday - Vinyasa Flow (L1 beginners welcome)</ul>
                <ul>7pm-8pm, Wednesday - Yin (L1 beginners welcome)</ul>
                <ul>7pm-8pm, Thursday - Ashtanga (L2)</ul>
                <ul>7pm-8pm, Friday - Vinyasa Flow (L1 beginners welcome)</ul>
              </ul>
            </p>
        </section>
        <section id="onepointtwo">
          <header className="major">
              <h2>
                Workshops
              </h2>
          </header>
              <h3>Beginner Yoga Workshop</h3>
                <p><b>2nd May 2020, Saturday 10am-12pm</b> 
                <br />
                <i>Spend more time and attention to learn the basics so that you can have confidence and a good foundation to build on as you progress in your postures and practice.
                  Click <Scroll type="id" element="three"><a href="#three">here</a></Scroll> to book.
                </i>
                </p>
              <h3>Master your Handstands Workshop</h3> 
                <p><b>2nd May 2020, Saturday 10am-12pm</b>
                <br />
                <i>Have you always wanted to master your handstand? We provide great exercises and tips and personal advice in this masterclass.
                  Click <Scroll type="id" element="three"><a href="#three">here</a></Scroll> to book.
                </i>
                </p>
        </section>
        <section id="onepointthree">
          <header className="major">
              <h2>
                Retreats
              </h2>
            </header>
              <h3>Yoga Retreat in Conil de La Frontera, South of Spain</h3>
              <h4>6th -12th June 2020</h4>
                <p>
                Come and spend a week with us in this beautiful Finca in Spain.
                All inclusive accomodation, classes, freshly cooked healthy nutritious vegan food and drink.
                If you are interested, send us a <Scroll type="id" element="three"><a href="#three">message</a></Scroll> to enquire for more information.
                <ul>
                  <li>Daily yoga classes and meditation for all levels</li>
                  <li>Facilities include - wifi, gym, swimming pool, sauna, hot tub</li>
                  <li>Walking distance from the beach</li>
                  <li>Spa treatments and massages available</li>
                  <li>Experience Spanish countryside, beautiful views and sunsets</li>
                  <li>Quiet, relaxing, homely environment to focus on your practice</li>
                  <li>Learn to surf</li>
                  <li>Friendly, experienced, fun instructors</li>
                  <li>Likeminded people</li>
                  <li>Transfers from Sevilla or Malaga can be arranged for an additional £100</li>
                  <li>Single person supplements available for £100</li>
                </ul>  
                </p>
                <img className="section-image" src={image01} alt="" />
        </section>
        <section id="onepointfour">
          <header className="major">
              <h2>
                Find Us
              </h2>
            </header>
            <p>
              Address: 2nd Floor, The Warehouse, Wapping, London, E1W
              <br />
              Directions: 10 minutes walk from Wapping Overground, Shadwell Overground or Shadwell DLR. 
              Street parking is available near the studio.
              <br />
            </p>
            <Map/>             
        </section>
        <section id="two">
          <header className="major">
            <h2>
              About
            </h2>
            </header>
            <p>Hi, we're a friendly local Yoga Studio based in Wapping, East London. 
              Our aim is to provide a calming, peaceful, relaxing sanctuary, you can come to escape the stresses of the busy city 
              and give some always much needed quality time to focus on yourself.
              We are extremely friendly and accessible and offer yoga and meditation classes in a variety different styles and levels.
             <br />
             <br />
              Come and join our yoga family!
             <br />
             <br /> 
             Facilities:
            <ul>
              <li>Showers, towels and lockers are available</li>
              <li>We provide yoga mats and blocks</li>
            </ul>
            </p>
          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption
              })
            )}
          />
        </section>

        <section id="three">
         <header className="major">
            <h2>Get In Touch</h2>
          </header>
          <p>
            If you have ay questions, please don't hesitate to contact us using the form below. 
            We will aim to get back to you within the next working day.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <MyForm/>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Wapping
                  <br />
                  London
                  <br />
                  E1W
                  <br />
                  UK
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +44(0)7780664822
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">contact@downdogyoga.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
