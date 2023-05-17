import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

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


const settings4 = {
    infinite: true,
    speed: 500,
    loop: true,
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
                slidesToScroll: 1
            }
        }
    ]
};

const FancyFeatureOne = () => {
    const [content, setContent] = useState([])
   
    const getServices = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/services`
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
        getServices()
    }, [])
    console.log(content)

    return (
        <Fragment>
            <Slider className="service_slider_one" {...settings4}>
                {content.map((val, i)=>(
                    <div key={i} className="item">
                    <div className="block-style-one text-center margin-lr">
                        <div
                            className="icon d-flex align-items-end justify-content-center mb-50 lg-mb-30"><img src={`images/icon/${val.post_meta['icon']}.svg`} alt="" className="m-auto"/></div>
                        <h5 className="mb-40">{val.title}</h5>
                        <Link to="/service-details" className="btn-two">{val.post_meta['learn_more']}
                            <i className={val.post_meta['arrow']}/></Link>
                    </div>
                    {/* /.block-style-one */}
                </div>
                ))}
                {/* /.item */}
            </Slider>
        </Fragment>
    )
}

export default FancyFeatureOne