import React, {useState, useEffect} from 'react'
import useContent from '../util/useContext'
import { useParams } from 'react-router-dom'
import { ListCard } from '../components/Cards'

function Category() {
    const {slug} = useParams()
    const {content} = useContent()
    const result = content?.filter((item) => item.category.value === slug && item.status).slice(0,10)

    // useEffect(() => {
    //     if (content.length >= 1) {
            
    //         setPosts(result.slice(0, 10))
    //     }
    // },[content, slug])
  return (
    <div className="row">
        <div className="col-lg-8">
            <div className="posts-block articles-box">
                <div className="title-section">
					<h1>{slug}</h1>
				</div>
                {result.length > 0 && <ListCard data={result} /> }
                {result.length === 0 && <center style={{"padding":"10px"}}><img src="../assets/images/bx_loader.gif" alt="" /></center>}
                {/* {result.length === 0 && <h6>No content to display</h6>} */}
            </div>
        </div>
    </div>
  )
}

export default Category