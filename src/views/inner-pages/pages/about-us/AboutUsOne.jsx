import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
 
import TopNavOne from '../../../../components/header/TopNavOne'
import InnerBanner from '../../../../components/page-title/InnerBanner';
import AboutFour from '../../../../components/about/AboutFour';
import FancyFeatureTwentyTwo from '../../../../components/feature/FancyFeatureTwentyTwo';
import CommonCounter from '../../../../components/counter/CommonCounter';
import Skill from '../../../../components/skill/Skill';
import Team from '../../../../components/team/Team';
import TestimonialThree from '../../../../components/testimonial/TestimonialThree';
import BrandSix from '../../../../components/brand/BrandSix';
import AdressOne from '../../../../components/adress/AdressOne';
import Info from '../../../../components/adress/Info';
import FooterTwo from '../../../../components/footer/FooterTwo';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';

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

const AboutUsOne = (slug) => {
    const slugValue = slug.slug.replace('/', '').replace('/', '')
    console.log(slugValue)
    const [content, setContent] = useState([])
    const getAboutUsView = () => {
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
        getAboutUsView()
    }, [])
    console.log(content)
    return (
        <Fragment>
            {content && Object.keys(content).length !== 0 &&
                <div className="main-page-wrapper">

                    <Helmet>
                        <title>{content.post_meta['contenttitle']}</title>
                        {/* <title>About Us One || Abacies - Data Science & Analytics React Template</title> */}
                    </Helmet>

                    <TopNavOne/> {/* theme-menu-one */}

                    <div className="theme-inner-banner">
                        <InnerBanner intro='About Company' currpage={content.title}/>
                        <img src={content.image_1} alt="" className="shapes shape-one"/>
                        <img src={content.image_2} alt="" className="shapes shape-two"/>
                    </div>
                    {/* /.theme-inner-banner */}

                    <div className="fancy-feature-two position-relative mt-140 lg-mt-100">
                        <div className="container">
                            <div className="row"> 
                                <div className="col-xxl-5 col-lg-6 col-md-7 ms-auto">
                                    <AboutFour post_meta={content.post_meta}/> {/* /.block-style-two */}
                                </div>
                            </div>
                        </div>
                        {/* /.container */}
                        <div className="illustration-holder-two sm-mt-40">
                            <img src={content.image_3} alt="" className="main-illustration w-100"/>
                            <img src={content.image_4} alt="" className="shapes shape-one"/>
                            <img
                                src={content.image_4}
                                alt=""
                                className="shapes shape-two"
                                data-aos="fade-up"
                                data-aos-anchor=".fancy-feature-two"
                                data-aos-delay={100}
                                data-aos-duration={2000}/>
                            <img
                                src={content.image_4}
                                alt=""
                                className="shapes shape-three"
                                data-aos="fade-up"
                                data-aos-anchor=".fancy-feature-two"
                                data-aos-delay={150}
                                data-aos-duration={2000}/>
                            <img src={content.image_5} alt="" className="shapes shape-four"/>
                            <img src={content.image_6} alt="" className="shapes shape-five"/>
                        </div>
                        {/* /.illustration-holder-two */}
                    </div>
                    {/* /.fancy-feature-two */}

                    <div className="fancy-feature-twentyTwo mt-100 lg-mt-60">
                        <div className="container">
                            <FancyFeatureTwentyTwo/>
                        </div>
                    </div>
                    {/* /.fancy-feature-twentyTwo */}

                    <div className="counter-section-one">
                        <div className="inner-container bg-color style-two rounded-0 w-100">
                            <div className="container">
                                <CommonCounter/>
                            </div>
                            {/* <img src={content.image_7} alt="" className="shapes shape-three"/>
                            <img src={content.image_8} alt="" className="shapes shape-four"/> */}
                        </div>
                        {/* /.inner-container */}
                    </div>
                    {/* /.counter-section-one */}

                    <div className="fancy-feature-five position-relative mt-50">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-4 col-lg-5 col-md-6">
                                    <div className="block-style-five pt-60 md-pt-20" data-aos="fade-right">
                                        <div className="title-style-one">
                                            <div className="sc-title-four">{content.post_meta['sc-title-2']}</div>
                                            <h2 className="main-title">{content.post_meta['main-title-2']}</h2>
                                        </div>
                                        {/* /.title-style-one */}
                                        <p className="pt-10 pb-70">{content.post_meta['p-tag-2']}</p>
                                        <Skill/> {/* /.skills-progress */}
                                    </div>
                                    {/* /.block-style-five */}
                                </div>
                                <div className="col-xxl-8 col-lg-7 col-md-6 text-end">
                                    <div className="illustration-holder d-inline-block position-relative xs-mt-20">
                                        <img src={content.image_9} alt="" className="main-illustration w-100"/>
                                        <img src={content.image_10} alt="" className="shapes shape-one"/>
                                        <img src={content.image_11} alt="" className="shapes shape-two"/>
                                        <img
                                            src={content.image_12}
                                            alt=""
                                            className="shapes shape-three"
                                            data-aos="fade-down"
                                            data-aos-duration={1800}/>
                                        <img
                                            src={content.image_13}
                                            alt=""
                                            className="shapes shape-four"
                                            data-aos="fade-left"
                                            data-aos-duration={1800}/>
                                        <img src={content.image_14} alt="" className="shapes shape-five"/>
                                    </div>{/*  /.illustration-holder */}
                                </div>
                            </div>
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.fancy-feature-five */}

                    {/* <div
                        className="team-section-one mt-110 pt-110 pb-170 lg-mt-80 lg-pt-80 lg-pb-80">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <div
                                        className="title-style-one text-center text-sm-start xs-pb-20"
                                        data-aos="fade-right">
                                        <div className="sc-title-four">OUR TEAM</div>
                                        <h2 className="main-title">Our Members</h2>
                                    </div>
                                    {/* /.title-style-one */}
                                {/* </div>
                                <div
                                    className="col-sm-6 ms-auto d-flex justify-content-center justify-content-sm-end"
                                    data-aos="fade-left">
                                    <Link to="/team-member" className="btn-one xs ripple-btn">See all members
                                        <i className="fas fa-chevron-right"/></Link>
                                </div>
                            </div>
                            <Team/>
                        </div>
                        <img src="images/shape/shape_42.svg" alt="" className="shapes shape-one"/>
                        <img src="images/shape/shape_43.svg" alt="" className="shapes shape-two"/>
                    </div> */} 
                    {/* /.team-section-one */}

                    <div
                        className="feedback-section-three style-two mt-100 lg-mt-90"
                        data-aos="fade-up">
                        <div className="container">
                            <div className="slider-wrapper">
                                <TestimonialThree/> {/* /.feedback_slider_three */}
                            </div>
                            {/* /.slider-wrapper */}
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.feedback-section-three */}

                    <div className="partner-section-two mt-130 lg-mt-70 lg-pb-20">
                        <div className="container">
                            <div className="title-style-one text-center" data-aos="fade-up">
                                <div className="sc-title-four">over 150k+ client</div>
                                <h2 className="main-title md">Join 27,000+ companies who’ve reached
                                </h2>
                            </div>
                            {/* /.title-style-one */}
                            <div className="row">
                                <div className="col-12 m-auto">
                                    <BrandSix/>
                                </div>
                            </div>
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.partner-section-two */}

                    <div className="address-section-one" style={{marginBottom: '50px'}}>
                        <div className="container">
                            <div className="inner-content" data-aos="fade-up" data-aos-delay={100}>
                                <div className="row g-0">
                                    <div className="col-md-6 d-flex" style={{margin: 'auto', backgroundColor: '#fff8f8', borderRadius: '6px'}}>
                                    <AdressOne 
                                            address_title={content.post_meta['address-title-h4']} 
                                            address_p_tag={content.post_meta['address-p-tag']} />{/* /.address-block-one */}
                                    </div>
                                    {/* <div className="col-md-6 d-flex">
                                    <Info 
                                            contact_title={content.post_meta['contact-title']} 
                                            contact_p_tag={content.post_meta['contact-p-tag']} 
                                            contact_num={content.post_meta['contact-num']}/>{/* /.address-block-one */}
                                    {/* </div> */} 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.address-section-one */}

                    <div className="footer-style-one bg-color theme-basic-footer">
                        <div className="container">
                            <div className="inner-wrapper">
                                <FooterFour />
                                <div className="bottom-footer">
                                        <CopyRightFour />
                                </div>
                            </div>
                            {/* /.inner-wrapper */}
                        </div>
                        <img src="images/shape/shape_44.svg" alt="" className="shapes shape-one"/>
                        <img src="images/shape/shape_45.svg" alt="" className="shapes shape-two"/>
                    </div>
                    {/* /.footer-style-one */}

                </div>
            }

        </Fragment>
    )
}

export default AboutUsOne