import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast} from 'react-hot-toast'
import axios from "axios"

import apiConfig from '../../configs/apiConfig'

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
const CareerForm = () => {

    const MAX_FILE_SIZE = 102400; //100KB

    const validFileExtensions = { files: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

    function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }

    //for validation
    const validationSchema = Yup
        .object()
        .shape({
            name: Yup
                .string()
                .required("Name is Required"),
            email: Yup
                .string()
                .required("Email is Required")
                .email("Entered value does not match email format"),
            sendMessage: Yup
                .string()
                .required("Please, leave us a message."),
            files: Yup
                .mixed()
                .required("Required")
                .test("is-valid-type", "Not a valid file type",
                  value => isValidFileType(value && value.name.toLowerCase(), "files"))
                .test("is-valid-size", "Max allowed size is 100KB",
                  value => value && value.size <= MAX_FILE_SIZE)
        });

    const formOptions = {
        resolver: yupResolver(validationSchema)
    };
    // get functions to build form with useForm() hook
    const {register, handleSubmit, setValue, formState} = useForm(formOptions);
    const {errors} = formState;

    const sendMessage = (dt) => {
        const config = {
            method: 'post',
            url: `${apiConfig.api.url}v2/send-mail`,
            data: { to: "smijith@abacies.com", subject: "From Abacies Contact Form", content: { name: dt.name, email: dt.email, message: dt.sendMessage } }
        }
        axios(config)
        .then(function (response) {
            console.log(response)
            if (response.status === 200) {
                console.log("2000")
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

    function onSubmit(data, e) {
        //display form data on success
        console.log("Message submited: " + JSON.stringify(data));
        sendMessage(data)
        // e.target.reset();
    }

    const handleMessage = (e) => {
        console.log("asdasd")
        console.log(e)
        setValue("sendMessage", e.target.value)
    }

    return (
        <Fragment>
            <form id="contact-form" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Name*</label>
                            <input type="text" placeholder="" name="name"{...register("name")}
                        className={`${errors.name ? "is-invalid" : ""}`}
                        /> 
                        {errors.name && (
                        <div className="invalid-feedback">{errors.name
                                ?.message}</div>
                    )}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Email*</label>
                            <input type="text" placeholder="" name="email" {...register("email")}
                        className={`${errors.email ? "is-invalid" : ""}`}
                        style={{padding: '7px'}}
                        /> 
                        {errors.name && (
                        <div className="invalid-feedback">{errors.email
                                ?.message}</div>
                    )}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Message*</label>
                            <textarea onChange={handleMessage} placeholder="" name="sendMessage" 
                        className={`${errors.sendMessage ? "is-invalid" : ""}`}
                        /> 
                        {errors.sendMessage && (
                        <div className="invalid-feedback">{errors.sendMessage
                                ?.message}</div>
                    )}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Documents*</label>
                            <input type="file" id='files' name="files" {...register("files")}
                        className={`${errors.files ? "is-invalid" : ""}`}
                        /> 
                        <span> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfElEQVR4nO2ZTWgUSRSAKyisfysiaBycvDeZ95rRgIrCXl1dcEEQD8oe1ov4F/9AFP//9qS7ot7Xg+BN2LOaoCCCh0Xci4ooXlSiEpN51Qka1FWTkZepTibjTDITkuke6A8aQlVSXV9X9XtdL8bExMTExIyTt83NjRb4rAA9sEh9eg3+DPxnF+ICUw9Y4N8s0nuLnCt9UZ+PvMlEGR95tyAP6IQFuD0L6V86G5fO1CuLtEqQrg32IQ+ELtODOKcbFiWK2y3yrgKJ0+X+XsA7FaxMqXFqQleSWIA7BLg3x/xDKQkLfHSscQTpel6Y/jJhSFikV/nJ0s2cMQ3ablPezmokFN1ybos9MrWkBzMpAXqRvznd7ZrXMkvbLdB2Qe537ScrHS+byfzoXv4PJpSVQL79JpGYUWIljlQzpjDPDt4TE6oEUOt4JRRJ8a8uKDw00ZDwDlc7bs6YBot0yz2EM6YeJRQNzS5gvOtMp+ebECR2DEvQofGM7SMfCxKiAG80UZYQ4BYButQLXrqchOadMCSGQuxYEn4yvUSAut3vbq+5RLk8IchbC/LE8dHGEPQWW+BOF43agsyv8oFEFmhvLDEa8UqU2U4vEKcVbycfeY8JcyX0Ba1Coj2WmOCV2FI3K9FVJk+MDLF8oNI8oYejIMSOyBNArTWX8IHXFUjsr1gC+EbNJXqbmEpJ6EQs0mv3dE9MgMSOSS0UWOBnxRKKNPEaN4nHOWOmVCjRVkKif1IlFAG66iTuF0ooenN3Srtsoizhp7xl+f1PfbKQk8X9gt4Gd7i5U4lEEJ2KJIY+DCcNQb7g9v/5Uv29yZa5evh3Ex1xNugGWlEg0R6ahJKvu3Ium2z+yYxRLNOJ5bchHdStJkCfIyGhCLKvN9ZypRnl/CxI5wT563c1WqAroUsoFvijhsWc+XmqGYNsKpPRyQrQ33qm7kFeHvQVSgjwNlNrxH2K6GfJeMcIXUIR5H/cFmmtWwnFove7E3kyWsKLtISik7dAT6sthBV+xU5qoaAaskirBemLqyP9EVTQy4kL8MWhlUDeaqKEzdek8uEV6F62idZ3JJPTg34Nz/rvsiDvaA6RVHqziSIW02st8NsgRwjQJ0F6LsAvBej/4Xbu8FPeShNlOgefvHfYIv83VDUcfqH/FfD2BQmwbniTSMzQw5aWNQu3WUxMjIk83wAGttDGU8tC7AAAAABJRU5ErkJggg==" 
                        alt=""  className="shapes shape-one" style={{height: '30px', position: 'absolute', width: '30px', top: "50%", left: "2%"}}/> </span>
                        {errors.name && (
                        <div className="invalid-feedback">{errors.files
                                ?.message}</div>
                    )}
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn-eight ripple-btn">Send Message</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default CareerForm