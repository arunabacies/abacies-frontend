import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import InnerBanner from '../../../components/page-title/InnerBanner';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import BannerFive from '../../../components/short-banner/BannerFive';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import ContactThree from '../../../components/contact/ContactThree';
import ContactForm from '../../../components/form/ContactForm';
import TopNavOne from '../../../components/header/TopNavOne'
import CareerForm from '../../../components/form/CareerForm';

import apiConfig from '../../../configs/apiConfig'
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

const Careers = (slug) => {
    const slugValue = slug.slug.replace('/', '').replace('/', '')
    console.log(slugValue)
    const [content, setContent] = useState([])
    const  slugname = useParams();
    console.log(slugname)

    const getCareersView = () => {
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
        getCareersView()
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
                    <InnerBanner intro="Get in Touch" currpage="Contact"/>
                    <BannerImages />

                </div>
                {/* /.theme-inner-banner */}

                <div className="contact-section-one lg-mb-120">
                    <div className="container">
                        <ContactThree post_meta={content.post_meta}/>
                    </div>
                    <div className="mt-100 mb-50 lg-mt-70">
                        <div className="container">
                            <div className="row gx-xxl-5">
                                <div className="col-lg-6 d-flex order-lg-last">
                                    <div className="form-style-one" style={{"position": "relative"}}>
                                        <h3 className="form-title pb-40 lg-pb-20">Join Our Team.</h3>
                                        <CareerForm/>
                                    </div>
                                    {/* /.form-style-one */}
                                </div>
                                <div className="col-lg-6 d-flex order-lg-first">
                                    <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                                        <div className="mapouter">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.2582167947693!2d76.36281346951566!3d10.014143820054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc6d3a091e1%3A0x8da708cf730555e5!2sGreentouch%20spaces!5e0!3m2!1sen!2sin!4v1688377320799!5m2!1sen!2sin"
                                                style={{
                                                border: 0
                                            }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"/>
                                        </div>
                                    </div>
                                    {/* /.map-area-one */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.contact-section-one */}

                {/* <div className="fancy-short-banner-five">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerFive/>
                        </div> */}
                        {/* /.bg-wrapper */}
                    {/* </div> */}
                    {/* /.container */}
                {/* </div> */}
                {/* /.fancy-short-banner-five */}

                <div className="footer-style-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            {/* <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div> */}
                                        {/* /.title-style-four */}
                                    {/* </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <NewsLetterForm/>
                                            <p>We only send interesting and relevant emails.</p>
                                        </div> */}
                                        {/* /.subscribe-form */}
                                    {/* </div>
                                </div>
                            </div> */}
                            {/* /.subscribe-area */}
                            <FooterFour/>
                            <div className="bottom-footer">
                                <CopyRightFour/>
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

export default Careers