import React, { Fragment, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

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

const HeroBannerOne = () => {
    const hasFetched = useRef(false);
    const [content, setContent] = useState([])
    
    const getBanner = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/banner`
        }
        axios(config)
        .then(function (response) {
            //console.log(response)
            if (response.status === 200) {
                setContent(response.data)
            } else {
               toast.error(
                <ToastContent message={response.data.message} />,
                { duration:3000 }        
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
       if (!hasFetched.current) {
         getBanner();
         hasFetched.current = true;
       }
     }, []);

    //console.log(content)

    return (
        <Fragment>
            {content && Object.keys(content).length !== 0 && content.map(contentItems => (
                <div className="hero-banner-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                {/* <a href="pricing.html" className="slogan"><strong>{contentItems.post_meta['slogan_bold']}</strong> {contentItems.post_meta['slogan_text']} <i className="fas fa-chevron-right" /></a> */}
                                <h1 className="hero-heading">{contentItems.post_meta['hero-heading']}</h1>
                                <p className="text-lg mb-60 lg-mb-40">{contentItems.post_meta['text-lg']}</p>
                                <ul className="style-none button-group d-lg-flex align-items-center">
                                    <li className="me-4"><Link to={contentItems.post_meta['ripple-btn-1-link']} className="btn-one ripple-btn">{contentItems.post_meta['ripple-btn-1']}</Link></li>
                                    {/* <li className="help-btn">{contentItems.post_meta['help-btn']}<Link to=`{${}}`>{contentItems.post_meta['help-btn-link-content']}</Link></li> */}
                                    {/* <li className="help-btn">{contentItems.post_meta['help-btn']}<Link to={contentItems.post_meta['help-btn-link']}>{contentItems.post_meta['help-btn-link-content']}</Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div className="illustration-holder">
                        <img src={contentItems.image_1} alt="" className="main-illustration ms-auto" />
                        <img src={contentItems.image_2} alt="" className="shapes bg-shape" />
                        <img src={contentItems.image_3} alt="" className="shapes shape-one" />
                        <img src={contentItems.image_4} alt="" className="shapes shape-two" />
                        <img src={contentItems.image_5} alt="" className="shapes shape-three" />
                        <img src={contentItems.image_6} alt="" className="shapes shape-four" />
                        <img src={contentItems.image_7} alt="" className="shapes shape-five" />
                        <img src={contentItems.image_8} alt="" className="shapes shape-six" />
                        <img src={contentItems.image_9} alt="" className="shapes shape-seven" />
                        <div className="card-one shapes">
                            <div className="icon"><i className="bi bi-check-lg" /></div>
                            <h6>{contentItems.post_meta['card-one_shapes_h6']}</h6>
                            <span className="info">{contentItems.post_meta['card-one_shapes_span_info']}</span>
                        </div> 
                        {/* <div className="card-two shapes">
                            <div className="icon"><i className="bi bi-check-lg" /></div>
                            <h6>{contentItems.post_meta['card-two_shapes']}</h6>
                        </div>  */}
                    </div> 
                </div>
            ))}
        </Fragment>
    )
}

export default HeroBannerOne