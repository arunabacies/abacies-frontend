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

const Consultation = (slug) => {
    const slugValue = slug.slug.replace('/', '').replace('/', '')
    console.log(slugValue)
    const [content, setContent] = useState([])
    const getConsultationView = () => {
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
        getConsultationView()
    }, [])
    console.log(content)
    
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
                        <InnerBanner intro={content.title} currpage={content.title}/>
                        <img src={content.image_1} alt="" className="shapes shape-one"/>
                        <img src={content.image_2} alt="" className="shapes shape-two"/>
                    </div>
                    {/* /.theme-inner-banner */}

                    <div className="fancy-feature-twentyFour">
                        <div className="container">
                            <FancyFeature24/>
                        </div>
                    </div>
                    {/* /.fancy-feature-twentyFour */}

                    <div className="fancy-feature-nineteen position-relative pt-160 lg-pt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-5 col-lg-6 col-md-7">
                                    <FancyFeatureNineteen/> 
                                    {/* /.block-style-thirteen */}
                                </div>
                            </div>
                        </div>
                        {/* /.container */}
                        <div className="illustration-holder" data-aos="fade-left">
                            <img src={content.image_3} alt="" className="w-100 main-illustration"/>
                            <img src={content.image_4} alt="" className="shapes shape-one"/>
                            <img src={content.image_5} alt="" className="shapes shape-two"/>
                            <img src={content.image_6} alt="" className="shapes shape-three"/>
                            <img src={content.image_7} alt="" className="shapes shape-four"/>
                            <img
                                src={content.image_8}
                                alt=""
                                className="shapes shape-five"
                                data-aos="fade-down"
                                data-aos-delay={200}
                                data-aos-duration={2000}/>
                            <img
                                src={content.image_9}
                                alt=""
                                className="shapes shape-six"
                                data-aos="fade-down"
                                data-aos-delay={100}
                                data-aos-duration={2000}/>
                            <img
                                src={content.image_10}
                                alt=""
                                className="shapes shape-seven"
                                data-aos="fade-down"
                                data-aos-duration={2000}/>
                        </div>
                        {/* /.illustration-holder */}
                        <div className="shapes oval-one"/>
                        <div className="shapes oval-two"/>
                        <img src={content.image_11} alt="" className="shapes bg-shape-two"/>
                    </div>
                    {/* /.fancy-feature-nineteen */}

                    <div className="feedback-section-five bg-white pt-200 pb-95 lg-pt-100 lg-pb-40">
                        <div className="container">
                            <div className="title-style-three text-center" data-aos="fade-up">
                                <div className="sc-title">Testimonials</div>
                                <h2 className="main-title">Words from <span>Client</span>
                                </h2>
                            </div>
                            {/* /.title-style-three */}
                            <TestimonialFive/> {/* /.feedback_slider_four */}
                        </div>
                        <img
                            src={content.image_12}
                            alt=""
                            className="shapes avatar-one"
                            width={45}
                            height={45}
                            style={{
                            outlineWidth: '6px'
                        }}/>
                        <img
                            src={content.image_13}
                            alt=""
                            className="shapes avatar-two"
                            width={85}
                            height={85}
                            style={{
                            outlineWidth: '10px'
                        }}/>
                        <img
                            src={content.image_14}
                            alt=""
                            className="shapes avatar-three"
                            width={85}
                            height={85}
                            style={{
                            outlineWidth: '10px'
                        }}/>
                        <img
                            src={content.image_15}
                            alt=""
                            className="shapes avatar-four"
                            width={50}
                            height={50}
                            style={{
                            outlineWidth: '5px'
                        }}/>
                    </div>
                    {/* /.feedback-section-five */}

                    <div className="fancy-short-banner-five">
                        <div className="container">
                            <div className="bg-wrapper">
                                <BannerFive/>
                            </div>
                            {/* /.bg-wrapper */}
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.fancy-short-banner-five */}

                    <div className="footer-style-four space-fix-one theme-basic-footer">
                        <div className="container">
                            <div className="inner-wrapper">
                                {/* <div className="subscribe-area">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="title-style-four sm-pb-20">
                                                <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                            </div> */}
                                            {/* /.title-style-four */}
                                        {/* </div> */}
                                        {/* <div className="col-md-6">
                                            <div className="subscribe-form">
                                            <NewsLetterForm />
                                                <p>We only send interesting and relevant emails.</p>
                                            </div> */}
                                            {/* /.subscribe-form */}
                                        {/* </div> */}
                                    {/* </div>
                                </div> */}
                                {/* /.subscribe-area */}
                                <FooterFour />
                                <div className="bottom-footer">
                                    <CopyRightFour />
                                </div>
                            </div>
                            {/* /.inner-wrapper */}
                        </div>
                    </div>
                    {/* /.footer-style-four */}

                </div>
            }
        </Fragment>
    )
}

export default Consultation