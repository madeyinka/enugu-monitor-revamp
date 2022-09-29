import React from 'react'
import { FeaturedCarousel, GridCard, ListCard } from '../components/Cards'
import Carousel from '../components/Carousel'
import Widget from '../components/Widget'
import useContent from '../util/useContext'

function Home() {
    const {content} = useContent()
    const slider = content?.filter((item) => item.post_settings.slider && item.status)
    const latest = content?.filter((item) => item.status).slice(0, 6)
    const featured = content?.filter((item) => item.post_settings.featured && item.status).slice(0, 5)
    const world = content?.filter((item) => item.category.value === 'world' && item.status).slice(0, 5)
  return (<>
    <div className="row">
        <div className="col-lg-8">
            {slider.length > 0 && <Carousel data={slider}/>}
            {slider.length === 0 && <center style={{"padding":"10px"}}><img src="../assets/images/bx_loader.gif" alt="" /></center>}
            <div className="advertisement">
				<a href="#"><img src="../assets/upload/addsense/620x80grey.jpg" alt="" /></a>
			</div>
            <div className="posts-block standard-box">
                <div className="title-section">
                    <h1>Latest News</h1>
                </div>
                <GridCard data={latest} layout={2} />
                {latest.length === 0 && <center style={{"padding":"10px"}}><img src="../assets/images/bx_loader.gif" alt="" /></center>}
            </div>
            <div className="posts-block featured-box">
                <div className="title-section">
					<h1>Featured</h1>
				</div>
                <FeaturedCarousel data={featured} item_num={3}/>
                {featured.length === 0 && <center style={{"padding":"10px"}}><img src="../assets/images/bx_loader.gif" alt="" /></center>}
            </div>
            <div className="advertisement">
				<a href="#"><img src="../assets/upload/addsense/620x80grey.jpg" alt="" /></a>
			</div>
            <div className="posts-block articles-box">
                <div className="title-section">
					<h1>World News</h1>
				</div>
                <ListCard data={world} />
                {world.length === 0 && <center style={{"padding":"10px"}}><img src="../assets/images/bx_loader.gif" alt="" /></center>}
            </div>
        </div>
        <div className="col-lg-4">
            <Widget />
        </div>   
    </div>
    
    </>)
}

export default Home