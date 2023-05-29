import React, {Fragment, useEffect, useState} from 'react';

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

const WorkProcessContent = [
    {
        number: '1',
        title: 'Research',
        desc: `Collect data and ger ready for research.`,
    },
    {
        number: '2',
        title: 'Identify Problem',
        desc: `Then we find the problem with our ai.`,
    },
    {
        number: '1',
        title: 'Resolve Problem',
        desc: `Now it’s time to fix the issue by advance ai`,
    },
]

const BlockStyleSixteen = () => {
    const [content, setContent] = useState([])
   
    const getSolutions = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/solutions`
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
        getSolutions()
    }, [])
    console.log(content)
    function removeHtmlTags(html) {
        const regex = /(<([^>]+)>)/gi;
        return html.replace(regex, '');
      }
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {content.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-sm-6">
                    <div className="block-style-sixteen d-flex mt-30 md-mt-20">
                        <div className="numb tran3s">{val.post_meta['number']}</div>
                        <div className="text">
                            <h6>{val.title}</h6>
                            <p>{removeHtmlTags(val.content)}</p>
                        </div>
                    </div>
                    {/* /.block-style-sixteen */}
                </div>
                ))}
            </div>
        </Fragment>
    )
}

export default BlockStyleSixteen