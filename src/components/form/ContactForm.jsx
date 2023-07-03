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
const ContactForm = () => {

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
                .required("Please, leave us a message.")
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
                    {/* <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Documents*</label>
                            <input type="file" id='files' name="files" {...register("files")}
                        className={`${errors.files ? "is-invalid" : ""}`}
                        /> 
                        {errors.name && (
                        <div className="invalid-feedback">{errors.files
                                ?.message}</div>
                    )}
                        </div>
                    </div> */}
                    <div className="col-12">
                        <button className="btn-eight ripple-btn">Send Message</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default ContactForm