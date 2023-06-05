import React,{Fragment, useState, useEffect} from 'react';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

const TestimonialContent = [
    {
        img: 'icon_34',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.`,
        name: 'Hasan Mahmud',
        desig: 'React Developer'
    }, {
        img: 'icon_34',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.`,
        name: 'Rashed Kabir',
        desig: 'Designer'
    }, {
        img: 'icon_34',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.`,
        name: 'Zubayer Hasan',
        desig: 'Sr. Frontend Developer'
    }
]

const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const TestimonialFive = () => {
    const [content, setContent] = useState([])
    
    const getCounter = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/testimonials`
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
        getCounter()
    }, [])
    console.log(content)
    function removeHtmlTags(html) {
        const regex = /(<([^>]+)>)/gi;
        return html.replace(regex, '');
      }
    return ( 
    <Fragment> 
        <Slider className="feedback_slider_four pt-70 lg-pt-50" {...settings} data-aos="fade-up">
            {content.map((val, i) => (
                <div key={i} className="item">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                            <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                                <img src={`images/icon/${val.img}.svg`} alt="avatar" className="m-auto"/>
                                <p>{removeHtmlTags(val.content)}</p>
                                <div className="cp-info">
                                    <h6>{val.post_meta['author_name']}</h6>
                                    <span>{val.desig}</span>
                                </div>
                            </div>
                            {/* /.feedback-block-four */}
                        </div>
                    </div>
                </div>
            ))}
        </Slider> 
    </Fragment>
  )
}


export default TestimonialFive