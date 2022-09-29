import React from 'react'
import {FacebookShareButton} from 'react-share'

function SocialShare({post}) {
  return (
    <div className="share-post-box">
        <ul className="share-box">
            <li className="facebook">
                <FacebookShareButton 
                    url={'http://localhost:3000/content/'+post.slug}
                    title={post.title}
                />
                <i className="fa fa-facebook"></i>
            </li>
        </ul>
    </div>
  )
}

export default SocialShare