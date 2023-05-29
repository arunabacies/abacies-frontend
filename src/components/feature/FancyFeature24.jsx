import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

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

const FancyFeature24 = () => {
    const [content, setContent] = useState([])
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
            <div className="row gx-xxl-5">
                {content.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6 mb-40 xs-mb-30 d-flex"
                        data-aos={val.fade}
                        data-aos-delay={val.datadelay}>
                        <div className="block-style-four">
                            <div className="icon d-flex align-items-end justify-content-center"><img src={`images/icon/${val.post_meta['icon']}.svg`} alt=""/></div>
                            <Link to={`${val.url.replace(replace, '/')}`}>
                                <h5>{val.title}</h5>
                            </Link>
                            <p>{val.desc}</p>
                            <Link to="/service-details" className="more-btn"><img src="images/icon/icon_13.svg" alt="" className="tran3s"/></Link>
                        </div>
                        {/* /.block-style-four */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeature24