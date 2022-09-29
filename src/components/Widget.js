import React from 'react'
import { CarouselWidget, TileCard } from './Cards'
import useContent from '../util/useContext'

function Widget() {
	const {content} = useContent()
	const popular = content?.filter((item) => item.post_settings.popular && item.status).slice(0,5)
	const editor = content?.filter((item) => item.post_settings.editor && item.status).slice(0,5)
  return (
    <div className="sidebar theiaStickySidebar">
        {/* <div className="search-widget widget">
            <form>
				<input type="search" placeholder="Search for..."/>
				<button type="submit">
					<i className="fa fa-search"></i>
				</button>
			</form>
        </div> */}
		<div className="widget social-widget">
			<h1>Stay Connected </h1>
			<p>Do you want to be informed everytime with our latest news?</p>
				<ul className="social-share">
					<li>
						<a href="#" className="rss">
							<i className="fa fa-rss"></i>
							<span>345</span>
						</a>
					</li>
					<li>
						<a href="#" className="facebook">
							<i className="fa fa-facebook"></i>
							<span>3,460</span>
						</a>
					</li>
					<li>
						<a href="#" className="twitter">
							<i className="fa fa-twitter"></i>
							<span>5,600</span>
						</a>
					</li>
					<li>
						<a href="#" className="google">
							<i className="fa fa-google-plus"></i>
							<span>659</span>
						</a>
					</li>
				</ul>
		</div>
        <div className="widget slider-widget">
			<h1>Editor's Pick</h1>
			<CarouselWidget data={editor} />
		</div>
        <div className="widget news-widget">
			<h1>Popular Today</h1>
			<TileCard data={popular} />
		</div>
        <div class="advertisement">
			<a href="#"><img src="../assets/upload/addsense/300x250.jpg" alt="" /></a>
		</div>
        <div class="widget tags-widget">
			<h1>Tags</h1>
			<ul class="tags-list">
				<li><a href="#">Food</a></li>
				<li><a href="#">Sport</a></li>
				<li><a href="#">Lifestyle</a></li>
				<li><a href="#">Fashion</a></li>
				<li><a href="#">World</a></li>
				<li><a href="#">Politic</a></li>
				<li><a href="#">Travel</a></li>
				<li><a href="#">Tech</a></li>
				<li><a href="#">Music</a></li>
				<li><a href="#">Economy</a></li>
				<li><a href="#">Business</a></li>
				<li><a href="#">Photos</a></li>
				<li><a href="#">Company</a></li>
				<li><a href="#">Traditional</a></li>
				<li><a href="#">New</a></li>
				<li><a href="#">Future</a></li>
				<li><a href="#">Culture</a></li>
			</ul>
		</div>
    </div>
  )
}

export default Widget