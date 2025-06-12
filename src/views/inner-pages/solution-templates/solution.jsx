import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import TopNavFour from '../../../components/header/TopNavFour';
import TopNavOne from '../../../components/header/TopNavOne'
import InnerBanner from '../../../components/page-title/InnerBanner';
import BannerOne from '../../../components/short-banner/BannerOne';
import BannerFive from '../../../components/short-banner/BannerFive';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import BlockStyleSixteen from '../../../components/blockStyle/BlockStyleSixteen';

import apiConfig from '../../../configs/apiConfig';
import { toast} from 'react-hot-toast'
import axios from "axios"

import BannerImages from '../../../components/images/bannerImg';
import FooterImages from '../../../components/images/footerImg';

import Spinner from "../../../components/Spinner"

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


const images = ["/images/gallery/img_21.jpg", "/images/gallery/img_19.jpg", "/images/gallery/img_18.jpg",];

const CaseStudy = ({slug}) => {
    //console.log(slug)
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(false)

    const getCaseStudyView = () => {
        setLoading(true)
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/post/${slug}`
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
            } setLoading(false)
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
            } setLoading(false)
        })
    }
    
    useEffect(() => {
        getCaseStudyView()
    }, [slug])
    //console.log(content)

    return (
        <Fragment>
            
             {!!isOpen && (<Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}/>)}
        {content && Object.keys(content).length !== 0 &&
            <div className="main-page-wrapper">
                <Helmet>
                    <title>{content.post['post_title']}</title>
                </Helmet>
                {/* helmet end */}

                <TopNavOne/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro={content.post['post_title']} currpage={content.post['post_title']}/>
                    <BannerImages />
                </div>
                {/* /.theme-inner-banner */}

                {content.content &&
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

                {(content.sub_title || content.main_title) &&
                <div className="pr-details-one mt-120 lg-mt-90">
                    <div className="container">
                        <div className="wrapper ps-xxl-4 pe-xxl-4 ms-xxl-5 me-xxl-5">
                            <div className="row gx-xxl-5">
                                <div className="col-xs-12">
                                    <div className="title-style-five">
                                        <div className="upper-title">{content.sub_title}</div>
                                        <h2 className="main-title">{content.main_title}</h2>
                                    </div>
                                    <div className="text-wrapper pageContent pt-30 md-pt-20">
                                        <div className="htmlContent" style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: content.main_content}} />
                                    </div>
                                </div>
                                {/* <div className="col-lg-6">
                                    <div className="project-info ps-xl-5">
                                        <div className="row gx-xxl-5">
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">{content.post_meta['pt-title1']}</div>
                                                <div className="pt-text">{content.post_meta['pt-text1']}</div>
                                            </div>
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">{content.post_meta['pt-title2']}</div>
                                                <div className="pt-text">{content.post_meta['pt-text2']}</div>
                                            </div>
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">{content.post_meta['pt-title3']}</div>
                                                <div className="pt-text">{content.post_meta['pt-text3']}</div>
                                            </div>
                                            <div className="col-sm-6 mb-25">
                                                <div className="pt-title">{content.post_meta['pt-title4']}</div>
                                                <div className="pt-text">{content.post_meta['pt-text4']}</div>
                                            </div>
                                        </div>
                                        <ul className="d-flex social-icon style-none mt-20">
                                            <li>
                                                <a href="#"><i className="fab fa-pinterest"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-twitter"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-linkedin-in"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="portfolio-block-two mt-40 mb-80 lg-mt-20 lg-mb-40">
                                <div className="img-meta">
                                    <img src="images/gallery/img_21.jpg" alt="" className="w-100"/>
                                    <div className="hover-state tran3s">
                                        <a
                                            className="fancybox tran3s"
                                            data-fancybox
                                            title="Click for large view"
                                            href="#"
                                            onClick={() => setIsOpen(!isOpen)}
                                            tabIndex={0}><i className="bi bi-plus"/></a>
                                    </div>
                                </div>
                            </div> */}
                            {/* /.portfolio-block-two */}
                            {/* <BlockStyleSixteen /> */}
                            <div
                                className="mt-80 pt-80 pb-40 mb-60 lg-mt-50 lg-pt-50 lg-pb-20 lg-mb-40 border-top border-bottom">
                                <div className="row gx-xxl-5">
                                    <div className="col-lg-6">
                                        {/* <h3 className="sub-title">{content.challenge_editor}</h3> */}
                                        <div className="htmlContent" style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: content.challenge_editor}} />
                                    </div>
                                    <div className="col-xl-5 col-lg-6 ms-auto">
                                        <div className="htmlContent" style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: content.goal_editor}} />
                                        {/* <ul className="style-none list-item">
                                            <li>{content.post_meta['block-two-list1']}</li>
                                            <li>{content.post_meta['block-two-list2']}</li>
                                            <li>{content.post_meta['block-two-list3']}</li>
                                            <li>{content.post_meta['block-two-list4']}</li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            <div className="htmlContent" style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: content.result_editor}} />
                        </div>
                        {/* /.wrapper */}
                    </div>
                </div>
                }
                {/* /.pr-details-one */}

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
                                            <NewsLetterForm /> */}
                                            {/* <p>We only send interesting and relevant emails.</p>
                                        </div> */}
                                        {/* /.subscribe-form */}
                                    {/* </div>
                                </div>
                            </div> */}
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
                {/* /.footer-style-one */}
                
            </div>
        }
        {loading && <Spinner />}
        </Fragment>
    )
}

export default CaseStudy