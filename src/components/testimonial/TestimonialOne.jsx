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
// const TestimonialContent = [
//     {
//         logo: 'Plogo-1',
//         icon: 'icon_05',
//         desc: `Certainly from my perspective quis been a great success with due WP giving us
//         that enterprises level assured quality.`,
//         text: 'Qulaity & Cost:',
//         price: '5.00',
//         logo2: 'Plogo-5',
//     },
//     {
//         logo: 'Plogo-2',
//         icon: 'icon_05',
//         desc: `Certainly from my perspective quis been a great success with due WP giving us
//         that enterprises level assured quality.`,
//         text: 'Qulaity & Cost:',
//         price: '35.00',
//         logo2: 'Plogo-5',
//     },
//     {
//         logo: 'Plogo-3',
//         icon: 'icon_05',
//         desc: `Certainly from my perspective quis been a great success with due WP giving us
//         that enterprises level assured quality.`,
//         text: 'Qulaity & Cost:',
//         price: '19.00',
//         logo2: 'Plogo-5',
//     },
//     {
//         logo: 'Plogo-4',
//         icon: 'icon_05',
//         desc: `Certainly from my perspective quis been a great success with due WP giving us
//         that enterprises level assured quality.`,
//         text: 'Qulaity & Cost:',
//         price: '15.00',
//         logo2: 'Plogo-5',
//     },
// ]

const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

const TestimonialOne = () => {
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
            <Slider className="feedback_slider_one" {...settings1}>
                {content.map((val, i)=>(
                    <div key={i} className="item">
                    <div className="feedback-block-one margin-2">
                        <div className="top-header d-flex align-items-center justify-content-between">
                            <div>
                                {/* <img src={`images/logo/${val.logo}.png`} alt=""/> */}
                                <h6>{val.post_meta['author_name']}</h6>
                                <ul className="style-none d-flex rating pt-15">
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                    <li><i className="bi bi-star-fill"/></li>
                                </ul>
                            </div>
                            <img src={`images/icon/${val.icon}.svg`} alt="" width={50}/>
                        </div>
                        {/* /.top-header */}
                        <p>{removeHtmlTags(val.content)}</p>
                    </div>
                    {/* /.feedback-block-one */}
                </div>
                ))}
            </Slider>
            {/* /.feedback_slider_one */}
        </Fragment>
    )
}

export default TestimonialOne