import React from 'react'
import Link from 'next/link'
import BlogSidebarStyle from './BlogSidebar.module.css'

const BlogSidebar = (props) => {
  return(
    <>
			<div className={BlogSidebarStyle.searchbox}>
				<input type="search" name="blogsearch" placeholder="Search" />
				<button><i className="bx bx-search"></i></button>
			</div>
      <div className="card mb-3">
				<div className="card-body text-center">
					<h4 className="card-title">About Me</h4>
					<img alt='About me' height='157' width='157'
						src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-sidebar-img-1.png`}/>
					<h5 className="card-text pt-3">
						With supporting text below as a natural lead-in to additional
						content.
					</h5>
				</div>
      </div>
      <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
				<h4 className='text-center'>Categories</h4>
				<ul className='text-center m-0'>
					<li className="cat-item">
						<Link href="/"><a title='CookingVersatility'>CookingVersatility</a></Link>
					</li>
					<li className="cat-item">
						<Link href="/"><a title='Awesome Chefs'>Awesome Chefs</a></Link>
					</li>
					<li className="cat-item">
						<Link href="/"><a title='Marra Friends'>Marra Friends</a></Link>
					</li>
					<li className="cat-item">
						<Link href="/"><a title='Marra Innovations'>Marra Innovations</a></Link>
					</li>
					<li className="cat-item">
						<Link href="/"><a title='Pizza Industry News'>Pizza Industry News</a></Link>
					</li>
					<li className="cat-item">
						<Link href="/"><a title='Team Marra'>Team Marra</a></Link>
					</li>
				</ul>
      </div>
      {/* <div className="card mb-3">
          <div className="card-body text-center">
              <h4 className="card-title">Recent Stories</h4>
              <div className={`${BlogSidebarStyle.stories}`}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-8.jpg`}/>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-7.jpg`}/>
              </div>
              <div className={`${BlogSidebarStyle.stories} mt-1`}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-7.jpg`}/>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-img-8.jpg`}/>
              </div>
          </div>
      </div> */}
      <div className={`${BlogSidebarStyle.card_item} card mb-3 p-3`}>
				<h4 className='text-center'>Recent Highlight</h4>
				<ul className='text-center m-0'>
					<li className='cat-item mb-2'>
						<Link href="/"><a title='5 Ways MarraStone Revolutionizes the Brick Oven'>5 Ways MarraStone Revolutionizes the Brick Oven</a></Link>
					</li>	
					<li className='cat-item mb-2'>
						<Link href="/"><a title='All You Need to Know About Sous Vide to Brick Oven Cooking'>All You Need to Know About Sous Vide to Brick Oven Cooking</a></Link>
					</li>	
					<li className='cat-item mb-2'>
						<Link href="/"><a title='7 Ways Rep Chefs Make Purchasing The Best Kitchen Solutions Easy'>7 Ways Rep Chefs Make Purchasing The Best Kitchen Solutions Easy</a></Link>
					</li>	
					<li className='cat-item mb-2'>
						<Link href="/"><a title='History of the Modern Brick Oven'>History of the Modern Brick Oven</a></Link>
					</li>	
					<li className='cat-item mb-2'>
					<Link href="/"><a title='5 Ways to Master Roasted Chicken with Marraforni Brick Oven'>5 Ways to Master Roasted Chicken with Marraforni Brick Oven</a></Link>
					</li>
				</ul>
      </div>
      <div className="card mb-3">
				<div className="card-body text-center">
					<h4 className="card-title">Tags</h4>
					<div className='pl-2 pr-2'>
						<Link href='/'><a title='amy riolo'><u>amy riolo,</u> </a></Link>
						<Link href='/'><a title='banquet'><u>banquet,</u> </a></Link>
						<Link href='/'><a title='Brick Oven'><u>Brick Oven,</u> </a></Link>
						<Link href='/'><a title='Brick Oven Cooking'><u>Brick Oven Cooking,</u> </a></Link>
						<Link href='/'><a title='brick oven manufacturer'><u>brick oven manufacturer,</u> </a></Link>
						<Link href='/'><a title='Brick OVens'><u>Brick OVens,</u> </a></Link>
						<Link href='/'><a title='Brick Pizza Oven'><u>Brick Pizza Oven,</u> </a></Link>
						<Link href='/'><a title='campus foodcourt'><u>campus foodcourt,</u> </a></Link>
						<Link href='/'><a title='Commercial brick Oven'><u>Commercial brick Oven,</u> </a></Link>
						<Link href='/'><a title='Cooking Versatility'><u>Cooking Versatility,</u> </a></Link>
						<Link href='/'><a title='culinary'><u>culinary</u></a></Link>
					</div>
				</div>
      </div>
    </>
   )
  }


export default BlogSidebar