import React, {useEffect, useState} from 'react'
import useContent from '../util/useContext'
import DisqusComments from '../components/Disqus'
import { useParams } from 'react-router-dom'
import { dateFormatter } from '../util/Utils'
import { FeaturedCarousel } from '../components/Cards'
import Widget from '../components/Widget'
import Head from './Head/head'

function Post() {
    const {content} = useContent()
    const {slug} = useParams()
    const [post, setPost] = useState({})
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (content.length > 0) {
            const result = content?.find((item) => item.slug === slug)
            setPost(result)
        }  
    },[content, slug])

    useEffect(() => {
        content?.find((_item) => {
            if (_item.slug === slug) {
                const result = content.filter((item) => item.category.value === _item.category.value && item.id !== _item.id && item.status).slice(0,5)
                setRelated(result)
            }
        })
    }, [content, slug])

    
    
  return (
    <>
        <Head   
            title={post?.seo?.title ? post.seo.title : "Enugu Monitor"}
            desc={post?.seo?.description ? post.seo.description : ""}
            image="https://www.hightowerandhightower.com/wp-content/uploads/2019/06/hightower-lawyers-1-256x256.png"
            url={`${"https://enugu-monitor-revamp.vercel.app/content"+post?.slug}`}
            type="Website"
        />
        <div className="row">
            <div className="col-lg-8">
                 <div className="single-post">
                    <h1>{post.title}</h1>
                    <ul className="post-tags">
						<li><i className="lnr lnr-user"></i>by <a href="#">{post.author}</a></li>
						<li><i className="lnr lnr-clock"></i><span>{dateFormatter(post.date_added)}</span></li>
					</ul>
                    <div className="share-post-box">
					    <ul className="share-box">
						    <li><a className="facebook" href={`${"https://www.facebook.com/dialog/share?app_id=967748097491075&display=popup&href=https://enugumonitor.com/content/"+post.slug+"&redirect_uri=https://enugu-monitor-revamp.vercel.app/content/"+post.slug}`}><i className="fa fa-facebook"></i><span>Share on Facebook</span></a></li>
							<li><a className="twitter" href="#"><i className="fa fa-twitter"></i><span>Share on Twitter</span></a></li>
							<li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
							<li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
							<li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li>
						</ul>
					</div>
                    <img src={post.image} alt={post.slug} />
                    <div className="text-boxes">
                        <p dangerouslySetInnerHTML={{__html:post.content}}></p>
                    </div>
                </div>
                <div className="advertisement">
				    <a href="#"><img src="../assets/upload/addsense/620x80grey.jpg" alt="" /></a>
				</div>
                <div className="posts-block featured-box">
                    <div className="title-section">
						<h1>You Might also Like</h1>
					</div>
                    {related.length > 0 && <FeaturedCarousel data={related} item_num={3}/>}
                    {related.length === 0 && <center style={{"padding":"10px"}}><img src="../assets/images/bx_loader.gif" alt="" /></center>}
                    <div className="comment-area-box">
                        <div className="title-section">
							<h1><span>Comments</span></h1>
						</div>
                        <DisqusComments data={post} />
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <Widget />
            </div>
        </div>
    </>
  )
}

export default Post