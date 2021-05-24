import React, {useEffect} from 'react'
import BlogContentStyle from './BlogContent.module.css' 
import Link from 'next/link';
import {Container} from 'react-bootstrap'


const BlogContent = (props) => {

	function resizeGridItem(item){
		let grid = document.getElementsByClassName("blog_outer")[0];
		let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
		let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
		let rowSpan = Math.ceil((item.querySelector('.blog_inner_main').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
			item.style.gridRowEnd = "span "+rowSpan;
	}
	function resizeAllGridItems(){
		let allItems = document.getElementsByClassName("blog_inner");
		for(let x=0;x<allItems.length;x++){
			resizeGridItem(allItems[x]);
		}
	}
	useEffect(()=>{
		resizeAllGridItems();
		window.addEventListener("resize", resizeAllGridItems);
	},[])

  return(
		<Container fluid className='mb-5 mt-5'>
      <div className={'blog_outer'}>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/blog/5-ways-marrastone-revolutionizes-the-brick-oven'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/04/Marra-Stone-min.jpg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Marra Innovations</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/blog/5-ways-marrastone-revolutionizes-the-brick-oven'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>5 Ways MarraStone Revolutionizes The Brick Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/04/Sous-Vide-Blog-2.png`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>CookingVersatility</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>All You Need To Know About Sous Vide To Brick Oven Cooking</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/03/Rep-Chef-Blog.png`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Awesome Chefs</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>7 Ways Rep Chefs Make Purchasing The Best Kitchen Solutions Easy</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/12/cookie-blog-13-scaled.jpg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>CookingVersatility</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>Italian Holiday Cookies Made Easy With Electric Brick Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/01/It-En-US-Man-copy.png`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Marra Innovations</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>History Of The Modern Brick Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/12/Cover.png`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>CookingVersatility</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>5 Ways To Master Roasted Chicken With Marraforni Brick Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/11/Almost-Done-Both-POST-1-e1605804671396.png`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>CookingVersatility</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>How To Roast The Perfect Turkey In 10 Easy Steps With Best In Class Brick Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/12/lamb-blog-13-scaled.jpg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>CookingVersatility</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>5 Tips To Effortless & Succulent Lamb Chops In Brick Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/11/DBNP165G2.png`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Marra Innovations</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>Creative Commercial Brick Oven Cooking Solutions That Bridge BOH And FOH</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/09/Ali-Haider-Blog-Post.jpg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Awesome Chefs</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>Marraforni Wood Fired Brick Oven User Highlight: Pizzaiolo Ali Haider</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/10/salad-1-scaled.jpg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>CookingVersatility</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>Fired Up Powerful Salad With Marraforni Pizza Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/10/Enzo-Highlight-Final-Master.png`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Team Marra</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>Getting Results With Enzo Marra</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2021/04/Marra-Stone-min.jpg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Marra Innovations</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>5 Ways MarraStone Revolutionizes The Brick Oven</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/07/Screen-Shot-2020-07-21-at-8.50.56-AM.jpg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Team Marra</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>Benvenuto In Famiglia! Marra Forni</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'blog_inner'}>
					<div className={'blog_inner_main'}>
						<Link href='/'>
							<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
								<div className={BlogContentStyle.blog_image}>
									<img src={`https://blog.marraforni.com/wp/wp-content/uploads/2020/08/37842DA3-D185-4FD0-AA9D-DB8F0F8181C7-scaled-e1598036034569.jpeg`} alt={'5 Ways MarraStone Revolutionizes The Brick Oven'} width="1920" height="1080" className="img-fluid" />
									<div className={BlogContentStyle.blogimg_hover}>
										<div className={BlogContentStyle.blog_tag}>Marra Innovations</div>
									</div>
								</div>
							</a>
						</Link>
						<div className={BlogContentStyle.blog_info}>
							<Link href='/'>
								<a title='5 Ways MarraStone Revolutionizes The Brick Oven'>
									<h2>MS Series Brick Ovens – The Ultimate Solution For BOH Kitchen Spaces</h2>
								</a>
							</Link>
							<div className={BlogContentStyle.blog_date}>April 30, 2021</div>
							<p>Food enthusiasts have been fired up about brick ovens since the beginning of written history. Did you know that sundried bricks are the first known manufactured material?</p>
							<div className={BlogContentStyle.meta_box}>
								<img alt='Author' width='42' height='42' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatar.png`} />
								<span>By Admin</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
   )
  }


export default BlogContent