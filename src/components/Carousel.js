import React, { useState } from 'react'

const Carousel = ({data}) => {
    const sliderData = data.slice(0, 4)
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current === sliderData.length - 1 ? 0 : current + 1)
    }

    const prev = () => {
        setCurrent(current === 0 ? sliderData.length - 1 : current -1)
    }

    if (!Array.isArray(data) || data.length <= 0) {
        return null
    }
    
  return (
    <div className="slider-news">
        <div className="flexslide">
            <ul className="slides">
                {sliderData?.map((slide, index) => {
                    return (<>
                        <li className={index === current ? "slide active":"slide"} key={index}>
                        {index === current && <><img alt={slide.slug} src={slide.image} />
                            <div className="slider-caption">
                                <a href={"/category/"+slide.category.label} className="category category-world">
                                    {slide.category.label}
                                </a>
                                <h2><a href={"/content/"+slide.slug}>{slide.title}</a></h2>
                                <p dangerouslySetInnerHTML={{__html:slide?.content.slice(0, 200) + "..."}}></p>
                            </div></>}
                        </li>
                    </>)
                })}
                <ol className="flex-control-nav flex-control-paging"></ol>
                <ul className="flex-direction-nav"><li><span className="flex-prev" onClick={prev}></span></li><li><span className="flex-next" onClick={next}></span></li></ul>
            </ul>
        </div>
    </div>
  )
}

export default Carousel