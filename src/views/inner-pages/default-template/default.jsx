import React, {Fragment, useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../components/header/TopNavOne';
import InnerBanner from '../../../components/page-title/InnerBanner';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';

import apiConfig from '../../../configs/apiConfig';
import { toast} from 'react-hot-toast'
import axios from "axios"

import BannerImages from '../../../components/images/bannerImg';
import FooterImages from '../../../components/images/footerImg';

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

const Saas = ({slug}) => {

    const [content, setContent] = useState([])
    const slugValue = Number.isInteger(slug) === false ? slug.replace('/', '').replace('/', '') : slug

    const getContent = () => {
        let url = `${apiConfig.api.url}view/v1/view-page/${slugValue}`
        if (Number.isInteger(slugValue)) url = `${apiConfig.api.url}view/v1/post/${slugValue}`
        const config = {
            method: 'get',
            url
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
        getContent()
    }, [slug])

    return (
        <Fragment>
            {content && Object.keys(content).length !== 0 &&
            <div className="main-page-wrapper">
                <Helmet>
                    <title>{content?.banner_title ? content?.banner_title : (Number.isInteger(slug) ? content?.post['post_title'] : content?.title)}</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour navFont={content?.featured_image ? ' nav-white' : ''} /> {/* theme-menu-four */}
                {content?.featured_image ?
                (<div className="theme-inner-banner featured"> {/* style={{backgroundImage: `url(${content?.featured_image})`, backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover", height: "100vh"}} */}
                    {//window.innerWidth < 992 && 
                        <img src={content?.featured_image} alt='Banner Image' style={{width: "100%", height: "auto"}} />
                    }
                </div>)
                :
                (<div className="theme-inner-banner">
                    <InnerBanner intro={content?.banner_title ? content?.banner_title : (Number.isInteger(slug) ? content?.post['post_title'] : content?.title)} currpage={content?.banner_title ? content?.banner_title : (Number.isInteger(slug) ? content?.post['post_title'] : content?.title)}/>
                    <BannerImages />
                </div>)
                }
                {/* /.theme-inner-banner */}

                {content?.content &&
                <div className="feedback-section-three pageContent position-relative mt-60 lg-mt-100">
                    <div className="container">
                        {/* <div className="title-style-one text-center">
                            <h2 className="main-title">Driving Digital Disruption With SaaS</h2>
                        </div> */}
                        <div className="inner-content mt-90 lg-mt-60">
                            <div className="htmlContent" style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: content.content}} />
                        </div>
                        {/* /.slider-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                }
                {/* /.feedback-section-three */}

                <div className="feedback-section-three pageContent position-relative mt-150 lg-mt-100" data-aos="fade-up">
                    <div className="container">
                        {/* <div className="title-style-one text-center">
                            <h2 className="main-title">Driving Digital Disruption With SaaS</h2>
                        </div> */}
                        <div className="inner-content mt-90 lg-mt-60">
                            {/* <div className="slider-wrapper">
                                <p>Disruption is the new reality of enterprises with ever-changing customer expectations and innovative business models. To thrive on disruption, enterprises must build value chains not only to achieve today’s goals but also to develop a revolutionary edge for the future.</p>
                                <p>Traditional IT models do not offer the flexibility and configurability required to create that operational edge while solving the current problems across the business—whether it is to improve customer experience, lower operational costs, or drive higher efficiency. </p>
                                <p>Moving to software-as-a-service (SaaS) models can be a game-changer for enterprises. SaaS is a cloud-based software delivery model in which software is centrally hosted on the Cloud, which is owned, managed, and maintained by cloud service providers. Shifting to an “as-a-service” model for their digital products and services allows enterprises to reduce the time to release new products, save on expensive IT hardware installations, and scale quickly with various integrations and other SaaS solutions. HCLTech and its close-knit partnership with Salesforce, Workday, Oracle and Blue Yonder provides a wide spectrum of offerings to our customers ready to adopt SaaS models.</p>
                            </div> */}
                            <div className="htmlContent" style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: content.content_editor}} />
                        </div>
                        {/* /.slider-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.feedback-section-three */}
               
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

export default Saas