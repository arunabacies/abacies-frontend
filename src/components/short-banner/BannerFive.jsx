import React, {Fragment, useEffect, useState } from 'react';
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

const BannerFive = () => {
    const [content, setContent] = useState([])
    // const replaceValue = 'http://localhost/abacies/'
    const replaceValue = 'https://abacies.bettertomorrow.green/'
    let link = ''
    const getBannerFive = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/bannerfive`
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
        getBannerFive()
    }, [])

    //console.log(content)
    return ( 
        <Fragment>
            <div className="row align-items-center">
                {content && Object.keys(content).length !== 0 && content.map(contentItems => (
                    <>
                    {/* { link = contentItems.post_meta['text-center-link'].replace(replaceValue, '/')} */}
                    <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                        <h3 className="pe-xxl-5 md-pb-20">{contentItems.post_meta['text-center-h3']}</h3>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end" data-aos="fade-left">
                        <Link to={contentItems.post_meta['text-center-link']} className="msg-btn tran3s">{contentItems.post_meta['text-center-link-content']}</Link>
                        {/* <p>{link}</p> */}
                        {/* <Link to={contentItems.post_meta['text-center-link']} className="msg-btn tran3s">{contentItems.post_meta['text-center-link-content']}</Link> */}
                    </div>
                    </>
                ))}
            </div>
        </Fragment>
    )
}

export default BannerFive