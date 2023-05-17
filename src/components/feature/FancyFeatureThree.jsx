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


// const ProcessContent = [
//     {
//         num: '1',
//         title: 'Data Automation Solution.',
//         desc: `Learn content by interacting quis expert lesson a video.`,
//         fadeUp: 'fade-up',
//         dataDelay: ''
//     },
//     {
//         num: '2',
//         title: 'Analytics Business.',
//         desc: `Practice what you realistic SAT test questions.`,
//         fadeUp: 'fade-up',
//         dataDelay: '150'
//     },
//     {
//         num: '3',
//         title: 'A New Breed Of AI.',
//         desc: `Review your practice and learn how to improve.`,
//         fadeUp: 'fade-up',
//         dataDelay: '300'
//     },
// ]

const FancyFeatureThree = () => {
    const [content, setContent] = useState([])
    
    const getProcesscontent = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/processcontent`
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
        getProcesscontent()
    }, [])
    console.log(content)
    function removeHtmlTags(html) {
        const regex = /(<([^>]+)>)/gi;
        return html.replace(regex, '');
    }
    return (
        <Fragment>
            <div className="row justify-content-center gx-xxl-5">
                {content.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-sm-6 d-flex" data-aos={val.post_meta['fadeUp']} data-aos-delay={val.post_meta['dataDelay']}>
                    <div className="block-style-three mb-25">
                        <div className="numb">{val.post_meta['num']}</div>
                        <h6>{val.title}</h6>
                        <p>{removeHtmlTags(val.content)}</p>
                    </div>
                    {/* /.block-style-three */}
                </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeatureThree