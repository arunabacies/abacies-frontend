import React, {Fragment, useState, useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


const SliderThree = [
    {
        img: 'img_05',
        icon: 'icon_15',
        desc: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue there live the blind texts separated.`,
        name: 'Martin Jonas',
        desig: 'Head of marketing, Inter inc.'
    }, {
        img: 'img_06',
        icon: 'icon_15',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost you have looked.`,
        name: 'Carolyna Tylor',
        desig: 'Senior Developer, Abacies inc.'
    }, {
        img: 'img_07',
        icon: 'icon_15',
        desc: `It’s a great exprience to work with Abacies. They’r vey humble and expert & the service has been excellent. The author is very quick and nice when it comes to support.`,
        name: 'Rebecca Jones',
        desig: 'Senior UX Designer, Hamina_Themes.'
    }
]

const settings3 = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
};
const TestimonialThree = () => {
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
            <Slider className="feedback_slider_three" {...settings3}>
                {content.map((val, i) => (
                    <div key={i} className="item">
                        <div className="feedback-block-three d-md-flex">
                            <div className="img-meta">
                                <img src={`images/media/${val.img}.jpg`} alt=""/>
                            </div>
                            <div className="text-wrapper">
                                <div className="icon d-flex justify-content-center align-items-center"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                                <p>{removeHtmlTags(val.content)}</p>
                                <div className="name">
                                    <h6>{val.post_meta['author_name']}</h6>
                                    <span>{val.desig}</span>
                                </div>
                                {/* /.name */}
                            </div>
                            {/* /.text-wrapper */}
                        </div>
                        {/* /.feedback-block-three */}
                    </div>
                ))}
            </Slider>
            {/* /.feedback_slider_three */}
        </Fragment >
    )
}

export default TestimonialThree