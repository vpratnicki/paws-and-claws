import React from "react";
import {BiCheck} from 'react-icons/bi'

function Services () {
    return (
    <section>
      <h5 className="services-h5">What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container-2col">
        <article className="service">
          <div className="service__head">
            <h3>Nail Trimmed and/or Files</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$25 for the first pet</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$15 for each additional dog/cat.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Additional Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$10 - Paw pads trimmed.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$15 - Feet tidied (paw pads & toe hair trimmed).</p>
            </li>
          </ul>
        </article>
        </div>
        <div className="container services__container-1col">

        <article className="service">
          <div className="service__head">
            <h3>What to Expect</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We use different strategies and techniques to find the best method for trimming for your dog and cats nails.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We work with your pets wherever they are less stressed and more comfortable, whether that’s inside your home or in my mobile grooming vehicle.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some pets do better when there family is out of the room, thus we may ask you to leave the room until there nails are trimmed.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We will discuss the proper nail care routine for your pet.</p>
            </li>
            
          </ul>
        </article>
          
      </div>
    </section>
    );
}

export default Services;