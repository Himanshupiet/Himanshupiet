import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsStyle from './Testimonials.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

/**
* @author
* @function Testimonials
**/

const Testimonials = ({background}) => {
  let T_SliderSettings = {
    infinite: true,
    speed: 800,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const bg_color = background=='red' ? TestimonialsStyle.red_section_outer : '';

  return(
    <section className={`${TestimonialsStyle.section_outer} ${bg_color}`}>
      <Container>
      <ScrollAnimation duration={2} animateIn="fadeInUp" animateOnce={true}>
        <Slider {...T_SliderSettings} className={TestimonialsStyle.slider_outer}>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Caliente Pizza & Draft House</h4>
            <p><i>❝ As a member of the World Pizza Champions Team I wanted the perfect pizza Oven for my home. Not just so my friends and family can enjoy the fruits of my labor but also so that I can practice for competitions that take place all over the world. I would highly recommend a Marra Forni to anyone, a fellow World Pizza Champion or the Backyard Novice. Not only is the oven perfect but so is this world-class company.❞</i></p>
            <p className={TestimonialsStyle.author}>Nick Bogacz</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>2 Amys</h4>
            <p><i>❝ We purchased a Marra Forni wood fired ( gas is for the lazy person ) oven a few months ago. The whole team went out of their way to get us the model we wanted in the color we wanted in a very tight time frame. The oven does a fabulous job cooking Neapolitan style pies, and in the morning we use the residual heat to bake bread. It is by far the best bread baking pizza oven in the market. Thanks You Marra Forni !!!❞</i></p>
            <p className={TestimonialsStyle.author}>Peter 2Amys</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Pizza Antica</h4>
            <p><i>❝ I just wanted to send a quick note praising Anthony Pilla.  I am meeting with my architect at 5:30pm West Coast time and needed a few questions answered and Anthony called me right away to guide me through our planning.  He’s always been incredibly responsive and deserves that to be acknowledged.❞</i></p>
            <p className={TestimonialsStyle.author}>Robert Smith</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Old Scratch Pizza</h4>
            <p><i>❝ The Marra Forni team has been fantastic and incredibly responsive in the design and construction of our ovens.  Looking forward to using these beautiful ovens when they arrive.❞</i></p>
            <p className={TestimonialsStyle.author}>Eric Soller</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Anthony Cerimele</h4>
            <p><i>❝ Francesco, Enzo, Jeff, Anthony, and Mika are some of the best people I have ever worked with. I have to be honest, I think they have been in touch with me more since I purchased the oven then before when I was considering buying one. That alone tells me how much they care.❞</i></p>
            <p className={TestimonialsStyle.author}>Anthony Cerimele</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Leo varchetta</h4>
            <p><i>❝ We recently purchased a rotating pizza oven, a mixer, a slicer and other equipment for our new restaurant.  They were delightful to work with. The oven is extremely simple to operate and works to perfection.  Support has been quick and efficient every time needed.❞</i></p>
            <p className={TestimonialsStyle.author}>Leo varchetta</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Kyle Schutte</h4>
            <p><i>❝ Jeff and his team at Marra Forni have been great to work with since day one. We started our project in Beverly Hills 18 months ago and have thoroughly enjoyed working with Marra Forni throughout the project.❞</i></p>
            <p className={TestimonialsStyle.author}>Kyle Schutte</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Gaby Mannino</h4>
            <p><i>❝ They are willing to do whatever they can to please the way you want your oven built. We had an absolute wonderful experience! This is a top notch factory ran by intelligent engineers. The work is amazing! We will be  doing more business in the future. Grazie!❞</i></p>
            <p className={TestimonialsStyle.author}>Gaby Mannino</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>PizzaFire</h4>
            <p><i>❝ It has been a pleasure working with Anthony Pilla and his team at Marra Forni. We loved having Anthony with us at our latest opening in Fairlawn, OH. We value the partnership and support!❞</i></p>
            <p className={TestimonialsStyle.author}>Michele D. Miller</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Fiamma Italian Grill</h4>
            <p><i>❝ We had an old Acunto oven that was in bad condition so we called Marra Forni right away. He replaced the entire deck of the oven in one day. He left the place spotless and the oven looked brand new. We would recommend Marra to anyone who needs to replace or repair a Neapolitan pizza oven. ❞</i></p>
            <p className={TestimonialsStyle.author}>Brittany Polizzi</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Steve Germano</h4>
            <p><i>❝ The advantage is their decks expand / contract, and retain heat better than any Neapolitan deck out there.   Marra Forni electrical control panel is also the most user friendly, best operating interface in the pizza business.   Whether its wood burning, gas, or a rotator your operation is interested in, I would encourage you to check this line  of ovens and related equipment.❞</i></p>
            <p className={TestimonialsStyle.author}>Steve Germano</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Jeff Draeger</h4>
            <p><i>❝ Marra Forni does a great job going above and beyond to answer any and all questions! Highly recommended to anyone in search of a wood-fired pizza oven.❞</i></p>
            <p className={TestimonialsStyle.author}>Jeff Draeger</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Kelli Fitzsimmons</h4>
            <p><i>❝ Anthony was extremely helpful, knowledgeable, and patient! Our oven is working perfectly now..  	highly recommend for home or business use !!❞</i></p>
            <p className={TestimonialsStyle.author}>Kelli Fitzsimmons</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>Mercury Pizzaco</h4>
            <p><i>❝ Highly recommend the company and ovens. Our first event was 250 pizzas and it was super smooth on a brand new oven that we had never done an event with. Zero learning curve with the oven.❞</i></p>
            <p className={TestimonialsStyle.author}>Garrett Marlin</p>
          </div>
          <div className={TestimonialsStyle.slider_inner}>
            <h4>PIZZACO</h4>
            <p><i>❝ The ease of use will save you ten fold on training and expertise. The speed at which we can do high volume while maintaining quality is amazing.❞</i></p>
            <p className={TestimonialsStyle.author}>Declan Mahar</p>
          </div>
        </Slider>
      </ScrollAnimation>
      </Container>
    </section>
   )
  }


export default Testimonials;