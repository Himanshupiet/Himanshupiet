import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogSingleContentStyle from './BlogSingleContent.module.css'
import Link from 'next/link';

const BlogSingleContent = (props) => {
  console.log(props.data)
  const {title,bannerImageUrl,blogData,metaKeyword,altTag,createdBy} = props.data;
  return(
    <>
      <div className={BlogSingleContentStyle.feature_image}>
        <img alt={altTag} src={bannerImageUrl} width='1000' height='800' className='img-fluid' />
      </div>
      <div className={BlogSingleContentStyle.title_box}>
        <h2>{metaKeyword}</h2>
        <div className={BlogSingleContentStyle.meta_info}>
          <span>April 30, 2021</span> <span>|</span> <span>{createdBy}</span>
        </div>
      </div>
      <div className={BlogSingleContentStyle.content_box}>
        <p>{blogData}</p>


        {/*<h3>5 Ways MarraStone Revolutionizes the Brick Oven</h3>*/}
        {/*<ul>*/}
        {/*  <li>Strength and design</li>*/}
        {/*  <li>The right aluminum content = better cooking results</li>*/}
        {/*  <li>Better Porosity = Better Finish = Better Brick Oven</li>*/}
        {/*  <li>Higher temperatures & consistency</li>*/}
        {/*  <li>Temperature Retention</li>*/}
        {/*</ul>*/}

        {/*<img alt='5 Ways MarraStone Revolutionizes The Brick Oven' src={'https://blog.marraforni.com/wp/wp-content/uploads/2021/04/P1899046-min-1024x768.jpeg'} width='1000' height='800' className='img-fluid' />*/}

        {/*<p>We no longer need to cook in brick ovens out of necessity as our ancestors once did. Since using these types of ovens is a luxury, it is important to be able to get the best results and most versatility possible, and the right type of brick can ensure just that.   Marra Stone ® are the proprietary custom refractory bricks used for Marra Forni brick ovens.</p>*/}

        {/*<h3>Strength And Design</h3>*/}
        {/*<p>Enzo Marra started using what he refers to as “mattoncini” or small bricks because they looked more attractive and were more chip-resistant during shipping. “We tested many and tried them all -both American and Italian bricks– but we found that the most ideal one was this because this type of brick which can support high temperatures but without burning the pizza or other food being cooked in it,” says Enzo.  “I try to use bricks that aren’t too big.” The leftover brick pieces are ground into cement which can then be used in creating the oven floor and in the overall structure. All of the cut pieces are ground up and put underneath on the cooking base or in the dome to make it more resistant.</p>*/}
        {/*<img alt='5 Ways MarraStone Revolutionizes The Brick Oven' src={'https://blog.marraforni.com/wp/wp-content/uploads/2021/04/P1233171-min-1024x577.jpeg'} width='1000' height='800' className='img-fluid' />*/}

        {/*<h3>The Right Aluminum Content = Better Cooking Results</h3>*/}
        {/*<p>Over time, Enzo learned that one of the key components of the bricks’ composition could play a major role in the effectiveness of ovens.  Bricks that contain a high aluminum content can make the pizzas burn quickly.  Another reason why our bricks are unique is the specific amounts of aluminum that they contain.  Our bricks come from Italian caves which possess the proper amount of aluminum in the soil.</p>*/}
        {/*<img alt='5 Ways MarraStone Revolutionizes The Brick Oven' src={'https://blog.marraforni.com/wp/wp-content/uploads/2021/04/Marra-Stone-min-1024x576.jpg'} width='1000' height='800' className='img-fluid' />*/}
        {/*<p>This is an important aspect to consider because too high of aluminum content in the soil will cause food to burn, yet some aluminum is needed so that the bricks will cook the pizza quickly without burning it, “so we have to find the right balance” says Enzo.</p>*/}

        {/*<h3>Better Porosity = Better Finish = Better Brick Oven</h3>*/}
        {/*<img alt='5 Ways MarraStone Revolutionizes The Brick Oven' src={'https://blog.marraforni.com/wp/wp-content/uploads/2021/04/P1288582-min-1024x577.jpeg'} width='1000' height='800' className='img-fluid' />*/}
        {/*<p>We did our research and found the stone that will help ovens maintain temperature and get to a high temperature, but not burn the pizza. They are porous and so that when you put the pizza on top, the oven floor can absorb some of the excess moisture in the dough. The high porosity also allows for greater heat absorption and transfer resulting in temperature consistency and retention for cooking efficiency, and thermal recovery.  If you are cooking a pizza, or a steak, for example, says Enzo Marra, the porous nature of the bricks will help to absorb the excess moisture in the dough or the meat which creates a better-finished product.</p>*/}
        {/*<p>The texture of the bricks used in ovens can also make a big difference in their overall performance. Too smooth of a surface will cause moisture to crystalize at the bottom of the oven, but bricks like ours, which are porous enough to help absorb the proper amount of moisture without burning the food and can produce better results and maintain a constant temperature for a longer time.</p>*/}

        {/*<h3>Higher Temperatures & Consistency</h3>*/}
        {/*<img alt='5 Ways MarraStone Revolutionizes The Brick Oven' src={'https://blog.marraforni.com/wp/wp-content/uploads/2021/04/Pizza-Cooking-in-DBRT-min-1024x663.jpg'} width='1000' height='800' className='img-fluid' />*/}
        {/*<p>Marra Forni bricks are made by excavating the natural soil from caves in Italy. The soil is then pressed and put into our “mattoncino,” or “little brick” stamp. Next, it spends time in large ovens which heat them for maximum efficacy. Our bricks enable customers to cook everything from traditional hearth bread at lower temperatures to proteins and vegetables at medium-high temperatures and pizza at 950F degrees. Even though our ovens reach 2,000 degrees Fahrenheit, we don’t recommend cooking anything at that extreme temperature because it would burn. Many of our clients enjoy turning their ovens off and slow-cooking meats and other dishes overnight just as they did in olden times.</p>*/}

      {/*  <h3>Temperature Retention</h3>*/}
      {/*  <p>Marra Forni brick ovens are handmade, built “brick by brick,” using the same methods and techniques that were perfected by Italian brick masons centuries ago.  From the minute that our ovens are constructed, they maintain their internal temperatures, they don’t waste heat, and are much more effective than other ovens” says Enzo Marra. A pizza that is cooked for 5 minutes in other ovens can be done in 2 ½ minutes in brick ovens, the same things go for proteins. An ideal brick that can cook pizza well can cook all types of foods.</p>*/}
      {/*  <img alt='5 Ways MarraStone Revolutionizes The Brick Oven' src={'https://blog.marraforni.com/wp/wp-content/uploads/2021/04/P1022210-min-1024x768.jpeg'} width='1000' height='800' className='img-fluid' />*/}
      {/*  <p>“In addition to our bricks, I am proud of our Integrated Exhaust Hood, says Enzo Marra. Enclosed in the structure of the exterior dome, our “eyebrow” hood provides for the efficient exhaust of grease, smoke, and odor from the inner cooking chamber without having to add a large capture hood to the oven itself.  All Marra Forni ovens can be directly vented using Marra Forni’s own turnkey direct ventilation systems.</p>*/}
      {/*  <img alt='5 Ways MarraStone Revolutionizes The Brick Oven' src={'https://blog.marraforni.com/wp/wp-content/uploads/2021/04/P1899052-min-1024x768.jpeg'} width='1000' height='800' className='img-fluid' />*/}
      {/*  <p>“Everything we do, we try to personalize with our brand,” says Enzo Marra.  “Since we developed this type of brick we wanted it to have our name on it. It is ideal for our ovens. “That said, I am continuously working for any way that we can make our bricks and our ovens even more effective. If I come up with a better solution, I will implement it for the sake of our clients who deserve the most efficient ovens possible.” In the words of Thomas Edison, “There is a way to do it better. Find it.” At Marra Forni, we are committed to keep looking.</p>*/}
      </div>
      <div className={BlogSingleContentStyle.social_box}>
        <Row>
          <Col sm={6}>
            <div className={BlogSingleContentStyle.tags_outer}>
              <h6>Tags: </h6>
              <div className={BlogSingleContentStyle.alltags}>
                <Link href="/"><a title='Brick Oven'><u>Brick Oven</u>, </a></Link>
                <Link href="/"><a title='Brick Oven'><u>Brick Oven</u></a></Link>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={BlogSingleContentStyle.social_outer}>
              <Link href="https://www.facebook.com/marraforni">
                <a target="_blank" rel="noopener" title="Facebook"><span><FontAwesomeIcon icon={faFacebookF} /></span></a>
              </Link>
              <Link href="https://twitter.com/MarraForni">
                <a target="_blank" rel="noopener" title="Twitter"><span><FontAwesomeIcon icon={faTwitter} /></span></a>
              </Link>
              <Link href="https://www.linkedin.com/company/marraforni/">
                <a target="_blank" rel="noopener" title="Linkedin"><span><FontAwesomeIcon icon={faLinkedinIn} /></span></a>
              </Link>
              <Link href="https://www.pinterest.com/marraforni/">
                <a target="_blank" rel="noopener" title="Pinterest"><span><FontAwesomeIcon icon={faPinterestP} /></span></a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
   )
  }


export default BlogSingleContent