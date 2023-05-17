import React,{Fragment, useState, useEffect} from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


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

// const CountContent = [
//     {
//         mark: '',
//         num: 20,
//         text: 'mil',
//         desc: 'Human labor hours saved',
//         desc2: 'with help of AI',
//     },
//     {
//         mark: '',
//         num: 1.3,
//         text: 'b+',
//         desc: 'Generated revenue by',
//         desc2: 'AI Solutions',
//     },
//     {
//         mark: '$',
//         num: 15,
//         text: 'mil+',
//         desc: 'Saved operational costs',
//         desc2: 'due to AI',
//     }
// ]

const CommonCounter = () => {
    const [content, setContent] = useState([])
    
    const getCounter = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/counter`
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
    return ( 
    <Fragment> 
        <div className="row justify-content-center">
            {content.map((val, i)=>(
                <div
                key={i}
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={val.dataDelay}>
                <div className="counter-block-one text-center mb-20">
                    <div className="main-count">
                        <span className="counter">{val.post_meta['mark']}
                            <CountUp start={0} end={val.post_meta['num']} duration={1}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </span>{val.post_meta['text']}</div>
                    <p>{val.post_meta['desc']} <br/>{val.post_meta['desc2']}</p>
                </div>
            </div>
            ))}
        </div> 
    </Fragment>

    )}

export default CommonCounter