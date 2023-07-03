import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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

const SocialContent = [
    {
        icon: 'fab fa-facebook-f',
        routerPath: '#'
    }, {
        icon: 'fab fa-twitter',
        routerPath: '#'
    }, {
        icon: 'fab fa-linkedin-in',
        routerPath: '#'
    }
];
const PageContent = [
    {
        name: 'Home',
        routerPath: '/'
    }, {
        name: 'Pricing',
        routerPath: '/price'
    }, {
        name: 'About us',
        routerPath: '/about-two'
    }, {
        name: 'Service',
        routerPath: '/service-one'
    }, {
        name: 'Blog',
        routerPath: '/blog-grid'
    }
];
const ServiceContent = [
    {
        name: 'Artificial Intelligence',
        routerPath: '/service-details'
    }, {
        name: 'Data Analytics',
        routerPath: '/service-details'
    }, {
        name: 'Data Visualization',
        routerPath: '/service-details'
    }, {
        name: 'Deep Learning',
        routerPath: '/service-details'
    }, {
        name: 'Statistical Modeling',
        routerPath: '/service-details'
    }
];
const LegalContent = [
    {
        name: 'Terms of use',
        routerPath: '/faq'
    }, {
        name: 'Terms &amp; conditions',
        routerPath: '/faq'
    }, {
        name: 'Privacy policy',
        routerPath: '/faq'
    }, {
        name: 'Cookie policy',
        routerPath: '/faq'
    }
];

const FooterFour = () => {
    const [content, setContent] = useState([])
    const [menus, setMenus] = useState([])
    
    const getFooter = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/footer-widget`
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

    // const replace = 'http://localhost/abacies/'
    const replace = 'https://abacies.bettertomorrow.green/'
    const getMenus = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/header-menu`
        }
        axios(config)
        .then(function (response) {
            console.log(response)
            if (response.status === 200) {
                setMenus(response.data)
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
        getFooter()
        getMenus()
    }, [])
    console.log(content)
    console.log(menus)
    function removeHtmlTags(html) {
        const regex = /(<([^>]+)>)/gi;
        return html.replace(regex, '');
      }
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-4 footer-intro mb-40">
                    <div className="logo">
                        {/* <Link to="/"><img src="images/logo/abacies-white-desktop-logo.png" alt="" width={250}/></Link> */}

                        <Link to="/"><img src="data:image/png;base64,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" 
                        
                        alt="" width={250}/></Link>
                    </div>
                    {content.map(value=>(
                        <>
                    {value.widget_area === 'sidebar-1' &&
                        <p>{removeHtmlTags(value.widget_content)}</p>
                    }</>
                    ))}
                    <ul className="d-flex social-icon style-none">
                        {SocialContent.map((val, i) => (
                            <li key={i}>
                                <a href={val.routerPath} style={{backgroundColor: '#ed1f24'}}><i className={val.icon} style={{color: '#fff'}}/></a>
                            </li>
                        ))}
                    </ul>
                        
                </div>
                <div className="col-lg-2 col-sm-4 ms-auto mb-30">
                    <h5 className="footer-title" style={{color: '#ed1f24'}}>Links</h5>
                    <ul className="footer-nav-link style-none">
                        {content.map((value) => (
                            <>
                            {value.widget_area === 'sidebar-2' &&
                                <>
                                {value.widget_content.map((val, i) => (
                                    <>
                                    {menus.map(menuItems => (
                                        <>
                                        {menuItems.title === val.content && 
                                            <li key={i}>
                                                <Link to={menuItems.url.replace(replace, '/')}>{val.content}</Link>
                                            </li>
                                            }
                                        </>
                                    ))}
                                    </>
                                ))}
                                </>
                            }
                            </>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-4 ms-auto mb-30">
                    <h5 className="footer-title" style={{color: '#ed1f24'}}>Solutions</h5>
                    <ul className="footer-nav-link style-none">
                        {content.map((value) => (
                            <>
                            {value.widget_area === 'sidebar-3' &&
                                <>
                                {value.widget_content.map((val, i) => (
                                    <>
                                    {menus.map(menuItems => (
                                        <>
                                        {menuItems.title === val.content && 
                                            <li key={i}>
                                                <Link to={menuItems.url.replace(replace, '/')}>{val.content}</Link>
                                            </li>
                                            }
                                        </>
                                    ))}
                                    </>
                                ))}
                                </>
                            }
                            </>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-4 ms-auto mb-30">
                    <h5 className="footer-title" style={{color: '#ed1f24'}}>Products</h5>
                    <ul className="footer-nav-link style-none">
                        {content.map((value) => (
                            <>
                            {value.widget_area === 'sidebar-4' &&
                                <>
                                {value.widget_content.map((val, i) => (
                                    <>
                                    {menus.map(menuItems => (
                                        <>
                                        {menuItems.title === val.content && 
                                            <li key={i}>
                                                <Link to={menuItems.url.replace(replace, '/')}>{val.content}</Link>
                                            </li>
                                            }
                                        </>
                                    ))}
                                    </>
                                ))}
                                </>
                            }
                            </>
                        ))}
                    </ul>
                </div>
                {/* <div className="col-lg-3 col-sm-4 mb-30">
                    <h5 className="footer-title">Services</h5>
                    <ul className="footer-nav-link style-none">
                        {ServiceContent.map((val, i) => (
                            <li key={i}>
                            <Link to={val.routerPath}>{val.name}</Link>
                        </li>
                        ))}
                    
                    </ul>
                </div> */}
                {/* <div className="col-xl-2 col-lg-3 col-sm-4 mb-30">
                    <h5 className="footer-title">Legal</h5>
                    <ul className="footer-nav-link style-none">
                        {LegalContent.map((val, i) => (
                            <li key={i}>
                            <Link to={val.routerPath}>{val.name}</Link>
                        </li>
                        ))}
                    </ul>
                </div> */}
            </div>
        </Fragment>
    )
}

export default FooterFour