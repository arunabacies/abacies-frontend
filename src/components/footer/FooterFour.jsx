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
                        <Link to="/"><img src="images/logo/abacies-white-desktop-logo.png" alt="" width={250}/></Link>
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
                                <a href={val.routerPath}><i className={val.icon}/></a>
                            </li>
                        ))}
                    </ul>
                        
                </div>
                <div className="col-lg-2 col-sm-4 ms-auto mb-30">
                    <h5 className="footer-title">Links</h5>
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
                    <h5 className="footer-title">Solutions</h5>
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
                    <h5 className="footer-title">Products</h5>
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