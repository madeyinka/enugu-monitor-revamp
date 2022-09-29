import { timeDiff } from "../util/Utils"
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const GridCard = ({data, layout}) => {
    return (
        <div className="row">
            {data?.map((card, index) => {
                return (<>
                    <div className={layout === 2 ? "col-sm-6": layout === 3 ? "col-sm-4": "col-sm-3"} key={index}>
                        <div className="news-post standart-post">
                            <div className="post-image">
                                <a href={"/content/"+card.slug}>
                                    <img src={card.image} alt="" className="grid-card" height="250px"/>
                                </a>
                                <a href={"/category/"+card.category.label} className="category category-food">{card.category.label}</a>
                            </div>
                            <h2><a href={"/content/"+card.slug}>{card.title.slice(0, 40)}{card.title.length > 40 ? "...":""}</a></h2>
                            <ul className="post-tags">
                                <li><i className="lnr lnr-user"></i>by <a href="#">{card.author}</a></li>
                                <li><a href="#"><i className="lnr lnr-clock"></i><span>{timeDiff(card.date_added)}</span></a></li>
                                {/* <li><i className="lnr lnr-eye"></i>872 Views</li> */}
                            </ul>
                            <p dangerouslySetInnerHTML={{__html:card?.content.slice(0, 125) + "..."}}></p>
                        </div>
                    </div>
                </>)
            })}
        </div>
    )
}

export const FeaturedCarousel = ({data}) => {
    const options = {
        loop: true,
        margin: 10,
        items: data.item_num,
        autoplay: true
      };
    return (
        <div className="owl-wrapper">
            {data.length > 0 && <OwlCarousel className="owl-carousel" {...options}>
                {data.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="news-post standart-post">
                                <div className="post-image">
                                    <a href={"/content/"+item.slug}>
                                        <img className="owl-height" src={item.image} alt="" height="150px"/>
                                    </a>
                                    <a href={"/category/"+item.category.label} className="category category-fashion">{item.category.label}</a>
                                </div>
                                <h2><a href={"/content/"+item.slug}>{item.title.slice(0, 45)}{item.title.length > 45 ? "...":""}</a></h2>
                                <ul className="post-tags">
                                    <li><i className="lnr lnr-user"></i>by <a href="#">{item.author}</a></li>
                                    {/* <li><a href="#"><i class="lnr lnr-book"></i><span>23 comments</span></a></li> */}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </OwlCarousel>}
        </div>
    )
}

export const CarouselWidget = ({data}) => {
    const options = {
        loop: true,
        // margin: 10,
        items: 1,
        autoplay: true
      };
    return (
        <>
            <div className="owl-wrapper">
                <ul className="slides">
                    {data.length > 0 && <OwlCarousel className="owl-carousel" {...options}>
                        {data.map((item, index) => {
                            return (
                                <>
                                    <li className="slide-widget active">
                                        <img alt={item.slug} src={item.image} />
                                        <div className="slider-caption">
                                            <a href={"/category/"+item.category.label} className="category category-tech">{item.category.label}</a>
                                            <h2><a href={"/content/"+item.slug}>{item.title.slice(0, 30)}{item.title.length > 30 ? "...":""}</a></h2>
                                            <ul className="post-tags">
                                                <li><i className="lnr lnr-user"></i>by <a href="author-link">{item.author}</a></li>
                                                <li><a href="comment-link"><i className="lnr lnr-clock"></i><span>{timeDiff(item.date_added)}</span></a></li>
                                                {/* <li><i className="lnr lnr-eye"></i>872 Views</li> */}
                                            </ul>
                                        </div>
                                    </li>
                                </>
                            )
                        })}
                    </OwlCarousel>}
                </ul>
            </div>
        </>
    )
}

export const ListCard = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div className="news-post article-post">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="post-image">
                                    <a href={"/content/"+item.slug}>
                                        <img src={item.image} alt="" />
                                    </a>
                                    <a className="category category-travel" href={"/category/"+item.category.label}>{item.category.label}</a>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <h2><a href={"/content/"+item.slug}>{item.title.slice(0, 50)}{item.title.length > 50 ? "...":""}</a></h2>
                                <ul className="post-tags">
                                    <li><i className="lnr lnr-user"></i>by <a href="#">{item.author}</a></li>
                                    <li><a href="#"><i className="lnr lnr-clock"></i><span>{timeDiff(item.date_added)}</span></a></li>
                                </ul>
                                <p dangerouslySetInnerHTML={{__html:item?.content.slice(0, 200) + "..."}}></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )    
}

export const TileCard = ({data}) => {
    return (
        <>
            <ul className="small-posts">
                {data.map((item, index) => {
                    return (
                        <li>
                            <a href="single-post.html" key={index}>
                                <img src={item.image} alt={item.slug} />
                            </a>
                            <div className="post-cont">
                                <h2><a href={"/content/"+item.slug}>{item.title.slice(0, 30)}{item.title.length > 30 ? "...":""}</a></h2>
                                <ul className="post-tags">
                                    <li><i className="lnr lnr-user"></i>by <a href="/">{item.author}</a></li>
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}