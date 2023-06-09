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
 
const ThemeMainMenu = () => {
    
    const [menus, setMenus] = useState([])
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
        getMenus()
    }, [])
    console.log(menus)
    console.log(replace)
    return (
        <Fragment>
            <ul className="navbar-nav">
                <li className="d-block d-lg-none">
                    <div className="logo">
                        <Link to="/"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                    </div>
                </li>
                {menus && menus.map(menuItems => (
                    <>
                        {menuItems.menu_item_parent === '0' && menuItems.children.length === 0 &&
                        <li className="nav-item">
                            <Link className="nav-link" to={menuItems.url.replace(replace, '/')} role="button">{menuItems.title}</Link>
                        </li>
                        }
                        {menuItems.menu_item_parent === '0' && menuItems.children.length > 0 &&
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button">{menuItems.title}</a>
                                    <ul className="dropdown-menu">
                                        {menuItems.children.map((val, i) => (
                                            <li key={i}>
                                                <Link to={val.url.replace(replace, '/')} className="dropdown-item">
                                                    <span>{val.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                            </li>
                        
                        }
                    </>
                    ))
                }
            </ul>
        </Fragment>
    )
}
export default ThemeMainMenu