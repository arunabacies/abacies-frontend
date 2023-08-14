import React, {Fragment, useState, useEffect} from 'react';

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

const VisionContent = [
    {
        title: 'Our History',
        desc: `Convert data noise to intelligent insights for competitive differention
        qulaity check.`,
        fade: 'fade-up',
        dataDelay: ''
    }, {
        title: 'Our Mission',
        desc: `Except to obtain some advantage from it? But who has any right to find fault with a consequences for competitive differention qulaity.`,
        fade: 'fade-up',
        dataDelay: '100'
    }, {
        title: 'Our Vission',
        desc: `Except to obtain some advantage from it? But who has any right to find fault with a consequences data noise to intelligent insights.`,
        fade: 'fade-up',
        dataDelay: '200'
    }
]

const FancyFeatureTwentyTwo = () => {
    const [content, setContent] = useState([])
    
    const getVisionContent = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/visionContent`
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
        getVisionContent()
    }, [])
    //console.log(content)
    function removeHtmlTags(html) {
        const regex = /(<([^>]+)>)/gi;
        return html.replace(regex, '');
    }

    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {content.map((val, i) => (
                    <div
                        key={i}
                        className="col-lg-4 col-sm-6 d-flex"
                        data-aos={val.fade}
                        data-aos-delay={val.dataDelay}>
                        <div className="block-style-fourteen mt-35">
                            <h5>{val.title}</h5>
                            <p>{removeHtmlTags(val.content)}</p>
                        </div>
                        {/* /.block-style-fourteen */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureTwentyTwo