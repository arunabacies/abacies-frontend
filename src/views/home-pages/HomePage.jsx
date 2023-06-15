import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import AboutThree from '../../components/about/AboutThree';
import AdressOne from '../../components/adress/AdressOne';
import Info from '../../components/adress/Info';
import Blog from '../../components/blog/Blog';
import BrandOne from '../../components/brand/BrandOne';
import CounterThree from '../../components/counter/CounterThree'
import FancyFeatureOne from '../../components/feature/FancyFeatureOne'
import FancyFeatureThree from '../../components/feature/FancyFeatureThree'
import TopNavOne from '../../components/header/TopNavOne'
import HeroBannerOne from '../../components/hero-banner/HeroBannerOne'
import PortfolioGallery from '../../components/portfolio/PortfolioGallery'
import PricingTab from '../../components/pricing/pricetab/PricingTab';
import TestimonialOne from '../../components/testimonial/TestimonialOne';
import FooterTwo from '../../components/footer/FooterTwo';
import FooterFour from '../../components/footer/FooterFour';
import FooterThree from '../../components/footer/FooterThree';
import CopyRightFour from '../../components/footer/CopyRightFour';


import apiConfig from '../../configs/apiConfig'
import { toast} from 'react-hot-toast'
import axios from "axios"

const ToastContent = ({ message = null }) => (
    <>
    {message !== null && (
      <div className='d-flex'>
        <div className='me-1'>
        </div>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-between'>
            <span>{message}</span>
          </div>
        </div>
      </div>
    )}
    </>
)
 
const HomePage = (slug) => {
    console.log(slug)
    const [content, setContent] = useState([])
    const slugValue = 'home'
    // if(slug === '/'){
        // slugValue = 'home'
    // } 
    const getHomePageView = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/view-page/${slugValue}`
        }
        axios(config)
        .then(function (response) {
            console.log(response)
            if (response.status === 200) {
                setContent(response.data)
            } else {
               toast.error(
                <ToastContent message={response.data.message} />,
                {duration:3000}             
              )
            }
        })
        .catch(error => {
          console.log(error)
          if (error && error.status === 401) {
            toast.error(
              <ToastContent message={error.message} />,
              { duration:2000 }
            )
          } else if (error) {
            toast.error(
              <ToastContent message={error.message} />,
              { duration:2000 }
            )
          } 
        })
    }

    useEffect(() => {
        getHomePageView()
    }, [])
    console.log(content)
    // console.log(content.post_meta['contentTitle'][0])
    // console.log(content.post_meta['banner'][0])
    return (
        <Fragment>
                {content && Object.keys(content).length !== 0 &&
                    <div className="main-page-wrapper">
                       
                        <Helmet>
                            <title>{content.post_meta['contentTitle'][0]}</title>
                            {/* <title>Data Science || Abacies - Data Science & Analytics React Template</title> */}
                        </Helmet>
                        <TopNavOne/> {/* top-nav-one */}

                        {/* {content.post_meta['banner'][0]} */}
                        <HeroBannerOne/> 

                        <div className="fancy-feature-one position-relative mt-225 xl-mt-200 lg-mt-150">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="title-style-one">
                                            <div className="sc-title">{content.post_meta['sc-title']}</div>
                                            <h2 className="main-title">{content.post_meta['sc-main-title']}</h2>
                                        </div>
                                        <p className="sub-heading mt-25 mb-50 md-mb-20">{content.post_meta['sc-sub-heading']}</p>
                                        <div className="btn-three">{content.post_meta['sc-btn-three']}<Link to={content.post_meta['sc-btn-three-link']}>{content.post_meta['sc-btn-three-link-content']} <i className="fas fa-chevron-right"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.container */}
                            <div className="slider-wrapper">
                                <FancyFeatureOne/>
                            </div>
                            {/* /.slider-wrapper */}
                        </div>
                        {/* /.fancy-feature-one */}

                        <div className="fancy-feature-two position-relative mt-200 lg-mt-120">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-6 col-md-7 ms-auto">
                                        <AboutThree post_meta={content.post_meta}/> {/* /.block-style-two */}
                                    </div>
                                </div>
                            </div>
                            {/* /.container */}
                            <div className="illustration-holder sm-mt-20">
                                <img src={content.image_1} alt="" className="main-illustration w-100"/>
                                <img src={content.image_2} alt="" className="shapes shape-one"/>
                                <img src={content.image_2} alt="" className="shapes shape-two"/>
                                <img src={content.image_2} alt="" className="shapes shape-three"/>
                                <img
                                    src={content.image_3}
                                    alt=""
                                    className="shapes shape-four"
                                    data-aos="fade-up"
                                    data-aos-anchor=".fancy-feature-two"
                                    data-aos-delay={100}
                                    data-aos-duration={1500}/>
                                <img
                                    src={content.image_3}
                                    alt=""
                                    className="shapes shape-five"
                                    data-aos="fade-down"
                                    data-aos-anchor=".fancy-feature-two"
                                    data-aos-delay={200}
                                    data-aos-duration={1500}/>
                                <img
                                    src={content.image_4}
                                    alt=""
                                    className="shapes shape-six"
                                    data-aos="fade-down"
                                    data-aos-anchor=".fancy-feature-two"
                                    data-aos-delay={100}
                                    data-aos-duration={1500}/>
                                <img
                                    src={content.image_5}
                                    alt=""
                                    className="shapes shape-seven"
                                    data-aos="fade-up"
                                    data-aos-anchor=".fancy-feature-two"
                                    data-aos-delay={250}
                                    data-aos-duration={1500}/>
                            </div>
                            {/* /.illustration-holder */}
                        </div>
                        {/* /.fancy-feature-two */}

                        <CounterThree/> {/* CounterThree */}

                        <div className="fancy-feature-three position-relative">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="block-style-two pe-xxl-5" data-aos="fade-right">
                                            <div className="title-style-one">
                                                <div className="sc-title">{content.post_meta['wp-sc-title']}</div>
                                                <h2 className="main-title">{content.post_meta['wp-main-title']}</h2>
                                            </div>
                                            {/* /.title-style-one */}
                                            <p className="pt-20 pb-30 lg-pb-10">{content.post_meta['wp-p-tag']}</p>
                                            <div className="btn-three">{content.post_meta['wp-btn-three']} <Link to={content.post_meta['wp-btn-three-link']}>{content.post_meta['wp-btn-three-link-content']}<i className="fas fa-chevron-right"/></Link>
                                            </div>
                                        </div>
                                        {/* /.block-style-two */}
                                    </div>
                                    <div className="col-xl-6 col-lg-7 col-md-6 ms-auto text-end">
                                        <div className="illustration-holder position-relative d-inline-block sm-mt-50">
                                            <img src="images/assets/ils_03.svg" alt="" className="main-illustration w-100"/>
                                            <img src="images/assets/ils_03_1.svg" alt="" className="shapes shape-one"/>
                                            <img src="images/assets/ils_03_2.svg" alt="" className="shapes shape-two"/>
                                            <img src="images/assets/ils_03_2.svg" alt="" className="shapes shape-three"/>
                                            <img src="images/assets/ils_03_4.svg" alt="" className="shapes shape-four"/>
                                            <img
                                                src="images/assets/ils_03_3.svg"
                                                alt=""
                                                className="shapes shape-five"
                                                data-aos="fade-up"
                                                data-aos-delay={100}
                                                data-aos-duration={1500}/>
                                            <img
                                                src="images/assets/ils_03_3.svg"
                                                alt=""
                                                className="shapes shape-six"
                                                data-aos="fade-up"
                                                data-aos-delay={150}
                                                data-aos-duration={1500}/>
                                        </div>
                                        {/* /.illustration-holder */}
                                    </div>
                                </div>
                            </div>
                            {/* /.container */}
                            <div className="mt-100 lg-mt-70">
                                <div className="container">
                                    <FancyFeatureThree/>
                                </div>
                            </div>
                        </div>
                        {/* /.fancy-feature-three */}

                        {/* <div className="portfolio-gallery-one mt-150 lg-mt-110" data-aos="fade-up"> */}
                            {/* <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 col-md-7 col-sm-8">
                                        <div className="title-style-one text-center text-sm-start xs-pb-20">
                                            <h2 className="main-title">Check Some of Our Recent Work.</h2>
                                        </div> */}
                                        {/* /.title-style-one */}
                                    {/* </div>
                                </div>
                                <div className="slider-wrapper">
                                    <PortfolioGallery/>
                                </div> */}
                                {/* /.slider-wrapper */}
                            {/* </div> */}
                        {/* </div> */}
                        {/* /.portfolio-gallery-one */}

                        {/* <div className="pricing-section-one mt-150 lg-mt-110">
                            <div className="container" data-aos="fade-up">
                                <div className="row">
                                    <div className="col-xxl-7 col-xl-8 col-lg-7 col-md-9 m-auto">
                                        <div className="title-style-one text-center">
                                            <h2 className="main-title">Solo, Agency or Team? We’ve got you Covered</h2>
                                        </div> */}
                                        {/* /.title-style-one */}
                                    /
                            {/* /.container */}
                            {/* <div className="pricing-table-area-one" data-aos="fade-up" data-aos-delay={100}>
                                <div className="container">
                                    <div className="tab-content">
                                        <PricingTab/>
                                    </div> */}
                                    {/* /.tab-content */}
                                    {/* <div className="msg-note mt-80 lg-mt-50" data-aos="fade-up">If you Need any Custom or others Pricing System. <br/> Please <Link to="/contact">Send Message</Link>
                                    </div>
                                </div>
                            </div> */}
                            {/* /.pricing-table-area-one */}
                        {/* </div> */}
                        {/* /.pricing-section-one */}

                        <div className="feedback-section-one mt-100 lg-mt-100">
                            <div className="container">
                                <div className="title-style-one text-center" data-aos="fade-up">
                                    <div className="sc-title">{content.post_meta['tsnl-sc-title']}</div>
                                    <h2 className="main-title">{content.post_meta['tsnl-main-title']}</h2>
                                </div>
                                {/* /.title-style-one */}
                            </div>
                            {/* /.container */}
                            <div className="inner-content mt-150 lg-mt-80">
                                <div className="slider-wrapper">
                                    <div className="feedback_slider_one">
                                        <TestimonialOne/>
                                    </div>
                                    {/* /.feedback_slider_one */}
                                </div>
                                {/* /.slider-wrapper */}
                            </div>
                            {/* /.inner-content */}
                        </div>
                        {/* /.feedback-section-one */}

                        {/* <div className="partner-section-one">
                            <div className="container">
                                <div className="title-style-one text-center" data-aos="fade-up">
                                    <div className="sc-title">over 150k+ client</div>
                                    <h2 className="main-title md">Join 27,000+ companies who’ve reached
                                    </h2>
                                </div> */}
                                {/* /.title-style-one */}
                                {/* <div className="row">
                                    <div className="col-xxl-11 m-auto">
                                        <BrandOne/>
                                    </div>
                                </div>
                            </div> */}
                            {/* /.container */}
                        {/* </div> */}
                        {/* /.partner-section-one */}

                        {/* <div className="blog-section-one pt-100 pb-140 lg-pt-80 lg-pb-80">
                            <div className="container">
                                <div className="title-style-one text-center mb-50 lg-mb-20" data-aos="fade-up">
                                    <div className="sc-title">RECENT NEWS</div>
                                    <h2 className="main-title">Inside Story &amp; Blog</h2>
                                </div> */}
                                {/* /.title-style-one */}
                                {/* <Blog/>
                            </div>
                        </div> */}
                        {/* /.blog-section-one */}

                        <div className="address-section-one">
                            {/* <div className="container"> */}
                                {/* <div className="row">
                                    <div className="col-xl-8 col-lg-7 col-md-9 m-auto">
                                        <div className="title-style-one text-center mb-50" data-aos="fade-up">
                                            <div className="sc-title-two">{content.post_meta['address-sc-title']}</div>
                                            <h2 className="main-title">{content.post_meta['address-main-title']}</h2>
                                        </div>
                                        /.title-style-one
                                        <div className="text-center" data-aos="fade-up" data-aos-delay={150}>
                                            <Link to={content.post_meta['address-btn-four-link']} className="btn-four ripple-btn">{content.post_meta['address-btn-four']}<i className="fas fa-chevron-right"/></Link>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="inner-content-address container" style={{margin: 'auto', backgroundColor: '#fffafa', borderRadius: '6px'}} data-aos="fade-up" data-aos-delay={100}>
                                    <div className="row g-0">
                                        <div className="col-md-6 d-flex">
                                            <AdressOne 
                                            address_title={content.post_meta['address-title-h4']} 
                                            address_p_tag={content.post_meta['address-p-tag']} />
                                        </div>
                                        <div className="col-md-6 d-flex">
                                            <Info 
                                            contact_title={content.post_meta['contact-title']} 
                                            contact_p_tag={content.post_meta['contact-p-tag']} 
                                            contact_num={content.post_meta['contact-num']}/>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                            {/* <img src="images/assets/bg_05.svg" alt="" className="shapes shape-one"/>
                            <img src="images/shape/shape_01.svg" alt="" className="shapes shape-two"/>
                            <img src="images/shape/shape_02.svg" alt="" className="shapes shape-three"/>
                            <img src="images/shape/shape_02.svg" alt="" className="shapes shape-four"/>
                            <img src="images/shape/shape_03.svg" alt="" className="shapes shape-five"/> */}
                        </div>
                        {/* /.address-section-one */}

                        <div className="footer-style-one theme-basic-footer">
                            <div className="container">
                                <div className="inner-wrapper">
                                    <FooterFour />
                                    <div className="bottom-footer">
                                        <CopyRightFour />
                                    </div>
                                </div>
                                {/* /.inner-wrapper */}
                            </div>
                        </div>
                        {/* /.footer-style-one */}

                    </div>
                }
            
        </Fragment>
    )
}

export default HomePage