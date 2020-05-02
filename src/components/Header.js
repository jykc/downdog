import React from 'react'
import Scroll from './Scroll'
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
      Welcome to
        <strong> Down Dog Yoga</strong>
      </h1>
      <p>Come and try our friendly, accessible yoga classes in London.</p>
      <ul>
        <ul><Scroll type="id" element="onepointone"><a href="#one">Classes</a></Scroll></ul>
        <ul><Scroll type="id" element="onepointtwo"><a href="#onepointtwo">Workshops</a></Scroll></ul>
        <ul><Scroll type="id" element="onepointthree"><a href="#onepointthree">Retreats</a></Scroll></ul>
        <ul><Scroll type="id" element="onepointfour"><a href="#onepointfour">Find Us</a></Scroll></ul>
        <ul><Scroll type="id" element="two"><a href="#two">About</a></Scroll></ul>
        <ul><Scroll type="id" element="three"><a href="#three">Contact</a></Scroll></ul>
        

      </ul>
    </div>
    <Footer />
  </header>
)

export default Header
