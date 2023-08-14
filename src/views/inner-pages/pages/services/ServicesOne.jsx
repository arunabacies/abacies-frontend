import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../../components/header/TopNavFour';
import InnerBanner from '../../../../components/page-title/InnerBanner';
import FancyFeature24 from '../../../../components/feature/FancyFeature24';
import FancyFeatureNineteen from '../../../../components/feature/FancyFeatureNineteen';
import TestimonialFive from '../../../../components/testimonial/TestimonialFive';
import BannerFive from '../../../../components/short-banner/BannerFive';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';
import NewsLetterForm from '../../../../components/form/NewsLetterForm';
import TopNavOne from '../../../../components/header/TopNavOne'

import apiConfig from '../../../../configs/apiConfig'
import { toast} from 'react-hot-toast'
import axios from "axios"

import BannerImages from '../../../../components/images/bannerImg';
import FancyFeatImages from '../../../../components/images/fancyFeatImg';
// import TestimonialImages from '../../../../components/images/testimonialImg';
import FooterImages from '../../../../components/images/footerImg';

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

const ServicesOne = (slug) => {
    const slugValue = slug.slug.replace('/', '').replace('/', '')
    //console.log(slugValue)
    const [content, setContent] = useState([])
    const getServicesOneView = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/view-page/${slugValue}`
        }
        axios(config)
        .then(function (response) {
            //console.log(response)
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
          //console.log(error)
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
        getServicesOneView()
    }, [])
    //console.log(content)
    
    return (
        <Fragment>
            {content && Object.keys(content).length !== 0 &&
                <div className="main-page-wrapper">
                    <Helmet>
                        <title>{content.post_meta['contenttitle']}</title>
                    </Helmet>
                    {/* helmet end */}

                    <TopNavOne/> 
                    {/* <TopNavFour/>  */}
                    {/* theme-menu-four */}

                    <div className="theme-inner-banner">
                        <InnerBanner intro={content.banner_title ? content.banner_title : content.title} currpage={content.banner_title ? content.banner_title : content.title}/>
                        <BannerImages />
                    </div>
                    {/* /.theme-inner-banner */}

                    <div className="fancy-feature-twentyFour">
                        <div className="container">
                            <FancyFeature24/>
                        </div>
                    </div>
                    {/* /.fancy-feature-twentyFour */}

                    {/* <div className="fancy-feature-nineteen position-relative pt-160 lg-pt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-5 col-lg-6 col-md-7">
                                    <FancyFeatureNineteen/> 
                                </div>
                            </div>
                        </div>
                        <FancyFeatImages />
                    </div> */}
                    {/* /.fancy-feature-nineteen */}

                    <div className="feedback-section-five bg-white pt-100 pb-75 lg-pt-100 lg-pb-40">
                        <div className="container">
                            <div className="title-style-three text-center" data-aos="fade-up">
                                <div className="sc-title">Testimonials</div>
                                <h2 className="main-title">Words from <span>Client</span>
                                </h2>
                            </div>
                            {/* /.title-style-three */}
                            <TestimonialFive/> {/* /.feedback_slider_four */}
                        </div>
                        {/* <TestimonialImages /> */}
                    </div>
                    {/* /.feedback-section-five */}

                    <div className="footer-style-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            {/*<div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="email" placeholder="Enter your email"/>
                                                <button className="ripple-btn tran3s">Subscribe</button>
                                            </form>
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.subscribe-area */}
                            <FooterFour />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                    <FooterImages />
                </div>
                {/* /.footer-style-four */}

                </div>
            }
        </Fragment>
    )
}

export default ServicesOne