import React, {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import TopNavOne from '../../../../components/header/TopNavOne';
import CircularProgress from '../../../../components/skill/CircularProgress';
import BlockStyle15 from '../../../../components/blockStyle/BlockStyle15';
import BannerFive from '../../../../components/short-banner/BannerFive';
import NewsLetterForm from '../../../../components/form/NewsLetterForm';
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

const ServicesDetails = (slug) => {
    console.log(slug.slug)
    // const slugValue = slug.slug.replace('/', '')
    // console.log(slugValue)
    const [content, setContent] = useState([])
    const [services, setServices] = useState([])
    
    const getServicesDetailsView = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/post/${slug.slug}`
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
    // const replace = 'http://localhost/abacies/'
    const replace = 'https://abacies.bettertomorrow.green/'
    
   
    const getServices = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/services`
        }
        axios(config)
        .then(function (response) {
            console.log(response)
            if (response.status === 200) {
                setServices(response.data)
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
        getServices()
        getServicesDetailsView()
    }, [])
    console.log(content)

    function removeHtmlTags(html) {
        const regex = /(<([^>]+)>)/gi;
        return html.replace(regex, '');
    }
    
    return (
        <Fragment>
            {content && Object.keys(content).length !== 0 &&
                <div className="main-page-wrapper">
                    <Helmet>
                        <title>{content.post_meta['contenttitle']}</title>
                        {/* <title>Service Details || Abacies - Data Science & Analytics React Template</title> */}
                    </Helmet>
                    {/* helmet end */}

                    <TopNavOne/> {/* theme-menu-four */}

                    <div className="theme-inner-banner">
                        <div className="container">
                            <h2 className="intro-title">{content.post.post_title} <span>Details</span>
                            </h2>
                            <ul className="page-breadcrumb style-none d-flex">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="current-page">{content.post.post_title}</li>
                            </ul>
                        </div>
                        <img src="images/assets/ils_20.svg" alt="" className="shapes illustration-two"/>
                    </div>
                    {/* /.theme-inner-banner */}

                    <div
                        className="service-details position-relative mt-160 mb-150 lg-mt-100 lg-mb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-8 order-lg-1">
                                    <div className="service-details-meta ps-lg-5 ms-xxl-4">
                                        <h2 className="main-title">{content.post_meta['main-title']}</h2>
                                        <p>{removeHtmlTags(content.post.post_content)}</p>
                                        <img src="images/media/img_13.jpg" alt="" className="main-img-meta"/>
                                        <h3 className="sub-title">{content.post_meta['sub-title1']}</h3>
                                        <p>{content.post_meta['sub-title1-des']}</p>
                                        <div>
                                            <BlockStyle15/>
                                        </div>
                                        <div className="mt-75 lg-mt-50">
                                            <div className="row gx-xxl-5">
                                                <div className="col-lg-6">
                                                    <h3 className="sub-title">{content.post_meta['sub-title2']}</h3>
                                                    <ul className="style-none list-item md-mb-40">
                                                        <li>{content.post_meta['sub-title2-list1']}</li>
                                                        <li>{content.post_meta['sub-title2-list2']}</li>
                                                        <li>{content.post_meta['sub-title2-list3']}</li>
                                                        <li>{content.post_meta['sub-title2-list4']}</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h3 className="sub-title">{content.post_meta['sub-title3']}</h3>
                                                    <p>{content.post_meta['sub-title3-ptag']}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-60 mb-20 lg-mt-40 lg-mb-10">
                                            <div className="row gx-xxl-5">
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="block-style-fifteen mb-30">
                                                        <div className="d-flex align-items-center">
                                                            <div className="text">
                                                                <h6 className="sub-title4">{content.post_meta['sub-title4']}</h6>
                                                                <p>{content.post_meta['sub-title4-ptag']}</p>
                                                                <a href="#" className="details-btn">Details</a>
                                                            </div>
                                                            {/* /.text */}
                                                            <div className="circle_percent" data-percent={86}>
                                                                <div className="circle_inners position-relative">
                                                                    {/* <div className="round_per"/>
                                                                    */}
                                                                    <CircularProgress number="86"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* /.block-style-fifteen */}
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="block-style-fifteen mb-30">
                                                        <div className="d-flex">
                                                            <div className="text">
                                                                <h6 className="sub-title5">{content.post_meta['sub-title5']}</h6>
                                                                <p>{content.post_meta['sub-title5-ptag']}</p>
                                                                <a href="#" className="details-btn">Details</a>
                                                            </div>
                                                            {/* /.text */}
                                                            <div className="circle_percent">
                                                                <div className="circle_inners position-relative">
                                                                    {/* <div className="round_per"/> */}
                                                                    <CircularProgress number="44"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* /.block-style-fifteen */}
                                                </div>
                                            </div>
                                        </div>
                                        <p>{content.post_meta['p-tag']}</p>
                                    </div>
                                    {/* /.service-details-meta */}
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
                                    <div className="service-sidebar md-mt-60">
                                        <div className="service-category mb-40">
                                            <ul className="style-none">
                                            {services.map((val, i) => (
                                                <li className={val.title === content.post.post_title ? "current-page" : "current-page-item"}>
                                                {/* <li className="current-page"> */}
                                                    <a href={`${val.url.replace(replace, '/')}`}>{val.title}</a>
                                                </li>
                                            ))}
                                            </ul>
                                        
                                        </div>
                                        {/* /.service-category */}
                                        <div className="sidebar-quote mb-50">
                                            <ul className="style-none d-flex justify-content-center rating">
                                                <li><i className="bi bi-star-fill"/></li>
                                                <li><i className="bi bi-star-fill"/></li>
                                                <li><i className="bi bi-star-fill"/></li>
                                                <li><i className="bi bi-star-fill"/></li>
                                                <li><i className="bi bi-star-fill"/></li>
                                            </ul>
                                            <p>{content.post_meta['sidebar-quote-ptag']}</p>
                                            <div className="name">{content.post_meta['sidebar-quote-name']}
                                                <span>{content.post_meta['sidebar-quote-span']}</span>
                                            </div>
                                        </div>
                                        {/* /.sidebar-quote */}
                                        <div className="download-btn-group">
                                            <a href="#" className="d-flex tran3s mb-15">
                                                <i className="bi bi-file-earmark-pdf"/>
                                                <span>{content.post_meta['download-btn-group-span']}</span>
                                            </a>
                                            <a href="#" className="d-flex tran3s mb-15">
                                                <i className="bi bi-file-earmark-text"/>
                                                <span>{content.post_meta['company-report-span']}</span>
                                            </a>
                                        </div>
                                    </div>
                                    {/* /.service-sidebar */}
                                </div>
                            </div>
                        </div>
                        <img src="images/shape/shape_48.svg" alt="" className="shapes bg-shape"/>
                    </div>
                    {/* /.service-details */}

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

                    <div className="footer-style-one theme-basic-footer">
                        <div className="container">
                            <div className="inner-wrapper">
                                <div className="subscribe-area">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="title-style-four sm-pb-20">
                                                <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                            </div>
                                            {/* /.title-style-four */}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="subscribe-form">
                                                <NewsLetterForm />
                                                <p>We only send interesting and relevant emails.</p>
                                            </div>
                                            {/* /.subscribe-form */}
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
                        <img src="images/shape/shape_44.svg" alt="" className="shapes shape-one"/>
                        <img src="images/shape/shape_45.svg" alt="" className="shapes shape-two"/>
                    </div>
                    {/* /.footer-style-four */}

                </div>
            }
        </Fragment>
    )
}

export default ServicesDetails