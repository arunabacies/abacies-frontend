import React, {Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast} from 'react-hot-toast'
import axios from "axios"

import ClockLoader from "react-spinners/ClockLoader";

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

    let [uploadFile, setUploadFile] = useState('');
    let [loading, setLoading] = useState(false);

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
        /*files: Yup
        .mixed()
        .test('fileType', 'File is Required', (value) => {
            if (value && value[0]) {
            return value[0].type === 'application/pdf';
            }
            return false;
        })
        .required('PDF file is Required'),*/
    });

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const formOptions = {
        resolver: yupResolver(validationSchema)
    };
    // get functions to build form with useForm() hook
    const {register, handleSubmit, setValue, reset, formState} = useForm(formOptions);
    const {errors} = formState;

    const sendMessage = (dt) => {
        if (uploadFile && uploadFile) {
            setLoading(true)
            let passData = new FormData()
            passData.append('to', 'smijith@abacies.com')
            passData.append('uploadFile', uploadFile)
            passData.append('name', dt.name)
            passData.append('email', dt.email)
            passData.append('message', dt.sendMessage)
            const config = {
                method: 'post',
                headers: {'Content-Type' : 'multipart/form-data'},
                url: `${apiConfig.api.url}v2/mail-carrier`,
                data: passData
            }
            axios(config)
            .then(function (response) {
                //console.log(response)
                if (response.status === 200) {
                    reset()
                    setUploadFile('')
                    toast.success(
                        <ToastContent message="Successfully submitted!. Thanks for contacting us" />,
                        {duration:5000}             
                    )
                } else {
                    toast.error(
                        <ToastContent message={response.data.message} />,
                        {duration:3000}             
                    )
                } setLoading(false)
            })
            .catch(error => {
            //console.log(error)
             if (error && error.message) {
                toast.error(
                <ToastContent message={error.message} />,
                { duration:2000 }
                )
            } else {
                toast.error(
                 <ToastContent message="Error!. Please try again later." />,
                 {duration:3000}             
                )
             } setLoading(false)
            })
        } else {
            //console.log("errrr")
            toast.error(
                <ToastContent message="Please Upload a file to submit" />,
                { duration:2000 }
            )
        }
    }

    function onSubmit(data, e) {
        //display form data on success
        //console.log("Message submited: " + JSON.stringify(data));
        sendMessage(data)
        // e.target.reset();
    }

    const handleMessage = (e) => {
        //console.log("asdasd")
        //console.log(e)
        setValue("sendMessage", e.target.value)
    }

    const handleFile = (e) => {
        //console.log(e)
        setUploadFile(e.target.files[0])
    }

    return (
        <Fragment>
            {loading &&
            <div className='loaderWrap'>
                <ClockLoader
                    color={'#ed1f24'}
                    cssOverride={override}
                    size={70}
                />
            </div>
            }
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
                            <input onChange={handleFile} type="file" id='files' name="files" accept=".doc, .docx, .pdf" /> 
                        <span> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+0lEQVR4nO2Za2/TMBSG31ZsgLgIEAgmkAaijZ3AuKyM66ASY6NabacI5QsXAQKqcRMbAgFlrPvp6NhpktF2bSM1SbU8Ur40reOnPvXxOQVycnJycuLieIdhiSUwtQYmW+ZSa7DFkr43Edjykj/57T5XC8ydQ6axxAK4ausJW/IFLHkBjjetL+aeBxPP9D39nrRlZqsHwNSRrteZuhFIcFHt+3lbPQhXpsc4ieB4J8DVBrj6hWp1X08JSywOHIe5ZmVs9QgpSXwzExAvARRiSRAUcib8PiBRrrrHYMl1ExLqjY55gov5QIJCZlhKtf3+WH+Qykpw+QqV5lT3Ssh7I41Z6ojIFlKV4I1KbAmi1LiYXGiNSwIo6N+Y+fxDTKgE9NZsxv2NK8uHkLxEPZRg7t1YY1tiMUiIjnKQaYlS7RS4FJirH+8rQRtF8hKRLXaQxGV5Gkz98LP7fPIS/fKEra4HEmX3/sCVYOK7P8bzIPOTfEeiXL+ZS+xKvhIjhJMlFpDqSgw6AEYlqPbIJfbsSjh98kRUgos7Q+cJKo46EtE8QceYFM5OVighbw8vEflhJyex0luCJhJUfAOS3VAS9cqYGwXyS5dEtCbg4iOAYnYlCCae+g97v0OCoIebySlkWsJZPePHfwul2tGu++WG7Zebr+NLRA6GY4OLFT+klnveP+cd1MU/vef/2oA/mQkkolts4hKE6btuo1w/i0HNMr1yFIaUC5QCl3+zIUFw+dN8237S601BN8m42urq0Vqikb4EwdSmfjDa/XekDpY4qSdLlR3V1PzxTOReihJE5yhCx5K4pC5BMOWZScTMtpmQIKhtbybyadeEl2kJQxFcfh65ERY9xY61UTAK1PXmYsv/ZqtBB703xTD3qLY+FWcKrntSZnvl7jswxVCphMcV2p7132V+3qEcUnavIZPY9XJYW+sjxyaY+gou14PkZ1ZiA/bqLDKN403rfi2XzbDh1gkj+Ra2urXjX6iJoNKc0sUWtTWjYZaTk4Os8w8dPqBpQ0lC5QAAAABJRU5ErkJggg=="
                        alt=""  className="shapes shape-one" style={{height: '25px', position: 'absolute', width: '25px', top: "50%", left: "2%"}}/> </span>
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