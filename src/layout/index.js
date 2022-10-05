import React, { useEffect } from 'react'
import { TileCard } from '../components/Cards'
import Pages from '../route'
import Axios from '../util/Axios'
import useContent from '../util/useContext'
import { sortByDate } from '../util/Utils'
import Head from './Head/head'

function Layout() {
	const { content, setContent } = useContent()
    const _date = new Date().toDateString()
	const popular = content?.filter((item) => item.post_settings.popular && item.status).slice(0,3)
	useEffect(() => {
		let isMounted = true
		const controller = new AbortController()

		const fetchPosts = async () => {
			try {
				const response = await Axios.get('/content/posts?user=630e657fee2f73b0dd7f440b',{
					signal:controller.signal
				})
				const result = response.data?.data.posts.filter((item) => item.status)
				isMounted && setContent(result.sort(sortByDate))
			} catch (err) {
				console.log(err.message)
			}
		}
		fetchPosts()

		return () => {
            isMounted = false
            controller.abort()
        }		

	},[setContent])
  return (
    <>
		<Head title="Homepage" />
        <header className="clearfix style-4">
		<div className="top-line">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-sm-9">
							<ul className="info-list">
								<li>
									<span className="live-time"><i className="fa fa-calendar-o"></i>{_date}</span>
								</li>
							</ul>
						</div>	
						<div className="col-md-4 col-sm-3">
							<ul className="social-icons">
								<li><a className="facebook" href="www.facebook.com"><i className="fa fa-facebook"></i></a></li>
								<li><a className="twitter" href="www.twitter.com"><i className="fa fa-twitter"></i></a></li>
								<li><a className="google" href="www.google.com"><i className="fa fa-google-plus"></i></a></li>
								<li><a className="linkedin" href="www.google.com"><i className="fa fa-linkedin"></i></a></li>
								<li><a className="instagram" href="www.google.com"><i className="fa fa-instagram"></i></a></li>
							</ul>
						</div>	
					</div>
				</div>
			</div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<a className="navbar-brand" href="/">
						<img src="../assets/images/logo-1.png" alt="" height="39px" width="auto" />
						{/* <p>Newspaper &amp; Editorial HTML5 Magazine</p> */}
					</a>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="/category/politics">Politics</a>
							</li>
							<li className="nav-item">
								<a className="nav-link features" href="/category/education">Education</a>
							</li>
							<li className="nav-item">
								<a className="nav-link world" href="/category/world">World</a>
							</li>
							<li className="nav-item">
							  <a className="nav-link sport" href="/category/lifestyle">Lifestyle</a>
							</li>
							<li className="nav-item">
							  <a className="nav-link tech" href="/category/business">Business</a>
								
							</li>
							<li className="nav-item">
							  <a className="nav-link fashion" href="/category/sport">Sport</a>
							</li>
							<li className="nav-item drop-link">
								<a className="nav-link food" href="/category/technology">Technology</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search for..." aria-label="Search" />
							<button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
						</form>
					</div>
				</div>
			</nav>
        </header>

        <section id="content-section">
            <div className="container">
                <Pages />
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="up-footer">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget text-widget">
								<h1><a href="/"><img src="../asset/images/logo.png" alt="" /></a></h1>
								<p>Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								<ul className="social-icons">
									<li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
									<li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
								</ul>
							</div>
                        </div>
                        <div className="col-lg-3 col-md-6">
							<div className="footer-widget popular-widget">
								<h1>Popular News</h1>
								<TileCard data={popular} />
							</div>
						</div>
                        <div className="col-lg-3 col-md-6">
							<div className="footer-widget featured-widget">
								<h1>Featured Post</h1>
								<div className="news-post standart-post">
									<div className="post-image">
										<a href="single-post">
											<img src="../assets/upload/blog/s15.jpg" alt="" />
										</a>
										<a href="#" className="category">Tennis</a>
									</div>
									<h2><a href="single-post.html">Visiting antic countries is John Doe hobby.</a></h2>
								</div>

							</div>
						</div>
                        <div className="col-lg-3 col-md-6">
							<div className="footer-widget tags-widget">
								<h1>Tags</h1>
								<ul className="tags-list">
									<li><a href="#">Football</a></li>
									<li><a href="#">Basketball</a></li>
									<li><a href="#">Tennis</a></li>
									<li><a href="#">Athletic</a></li>
									<li><a href="#">Winter Sports</a></li>
									<li><a href="#">Handball</a></li>
									<li><a href="#">Rugby</a></li>
								</ul>
							</div>
						</div>
                    </div>
                </div>
                <div className="down-footer">
				<p>&copy; Copyright Enugu Monitor 2022<a href="#" className="go-top"><i className="fa fa-caret-up" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Layout