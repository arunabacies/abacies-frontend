import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {Link} from 'react-router-dom';


import TopNavFour from '../../../components/header/TopNavFour';
import TopNavOne from '../../../components/header/TopNavOne'
import InnerBanner from '../../../components/page-title/InnerBanner';
import BannerOne from '../../../components/short-banner/BannerOne';
import BannerFive from '../../../components/short-banner/BannerFive';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import BlockStyleSixteen from '../../../components/blockStyle/BlockStyleSixteen';
import PriceTwo from '../../../components/pricing/PriceTwo';

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


const images = ["/images/gallery/img_21.jpg", "/images/gallery/img_19.jpg", "/images/gallery/img_18.jpg",];

const CaseStudy = ({slug, menuItems}) => {
    //console.log(slug)
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    const [content, setContent] = useState([])

    const replace = 'https://abacies.bettertomorrow.green/'
    const getCaseStudyView = () => {
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
        getCaseStudyView()
    }, [slug, menuItems])
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
                <div className="feedback-section-three pageContent position-relative mt-120 lg-mt-100">
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

                {/*menuItems && menuItems.length > 0 && 
                <div className="feedback-section-three pageContent position-relative mt-120 lg-mt-100">
                    <div className="container">
                        {menuItems.map((val, i) => 
                        <Link to={val.url.replace(replace, '/')} className={val.children && val.children.length > 0 ? 'dropdown-item dropdown-toggle' : 'dropdown-item'}>
                            <span>{val.title}</span>
                        </Link>
                        )}
                    </div>
                </div>
                */}

                {menuItems && menuItems.length > 0 &&
                <div className="pricing-section-two position-relative mt-80 mb-110">
                    <div className="container">
                        <div className="pricing-table-area-two">
                            <div className="row">
                                <div className="col-xxl-12 m-auto">
                                    <PriceTwo content={menuItems} />
                                </div>
                            </div>
                        </div>
                        {/* /.pricing-table-area-two */}
                    </div>
                    <img src="images/shape/shape_34.svg" alt="" className="shapes shape-one"/>
                </div>
                }
                {/* /.fancy-feature-four */}

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
        </Fragment>
    )
}

export default CaseStudy