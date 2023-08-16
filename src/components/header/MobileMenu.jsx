import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {
    ProSidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    Menu,
    MenuItem,
    SubMenu
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

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
 

const ServiceMenu =[{
  name: 'Consultation',
  routerPath: '/service-one'
},{
  name: 'Bespoke Software development',
  routerPath: '/service-one'
},{
  name: 'Integrations and automations',
  routerPath: '/service-one'
},{
  name: 'SaaS',
  routerPath: '/software-service'
},{
  name: 'Cloud',
  routerPath: '/service-one'
},{
  name: 'AI',
  routerPath: '/artificial-intelligence'
},{
  name: 'Chatbots',
  routerPath: '/service-one'
},{
  name: 'ChatGPT Training',
  routerPath: '/service-one'
},{
  name: 'ChaptGPT Prompt Engineering',
  routerPath: '/service-one'
},{
  name: 'ChatGPT integration',
  routerPath: '/service-one'
}
];
const Solutions = [
  {
      name: 'Case Study',
      routerPath: '/portfolio-single'
  }, {
      name: 'White Paper',
      routerPath: '/portfolio-single'
  }
];
const Products = [
  {
      name: 'Decisions',
      routerPath: '/service-one'
  }, {
      name: 'Better Tomorrow',
      routerPath: '/service-one'
  }, {
      name: 'Telegram LMS',
      routerPath: '/service-one'
  }
];

const MobileMenu = () => {

    const [click, setClick] = useState(false);
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
            //console.log(response)
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
        getMenus()
    }, [])
    //console.log(menus)
    //console.log(replace)

   
    const handleClick = () => {
        setClick(!click);
    }

    function htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    }

    return (
        <Fragment>
            <div className="mobile-menu-wrapper">
            <div className="moblie-menu-toggler">
                            <button className={click ? "navbar-toggler active d-block d-lg-none": "navbar-toggler d-block d-lg-none"} type="button" onClick={handleClick}>
                                <span/>
                            </button>
                        </div>
                <ProSidebar
                    className={click
                    ? 'mobile-menu menu-open'
                    : 'mobile-menu'}>
                    <SidebarHeader>
                        <div className="mobile-logo">
                            <Link to="/"><img src="images/logo/abacies-dark-mobile-logo.png" alt=""/></Link>
                        </div>
                       <div className="close-menu" onClick={handleClick}>
                        <i class="bi bi-x-lg"></i>
                       </div>
                    </SidebarHeader>
                    <SidebarContent>
                      <Menu iconShape="square">
                      {menus && menus.map(menuItems => (
                      <>
                          {menuItems.menu_item_parent === '0' && menuItems.children.length === 0 && !menuItems.classes.includes("hidden_menu") &&
                            <MenuItem>
                                {""}
                                <Link to={menuItems.url.replace(replace, '/')} >{htmlDecode(menuItems.title)}</Link>
                            </MenuItem>
                          }
                          {menuItems.menu_item_parent === '0' && menuItems.children.length > 0 && !menuItems.classes.includes("hidden_menu") &&
                            <SubMenu title={menuItems.title}>
                              {menuItems.children.map((val, i)=>(
                                <MenuItem key={i}>
                                  <Link to={val.url.replace(replace, '/')}>{htmlDecode(val.title)}</Link>
                                </MenuItem>
                              ))}
                            </SubMenu>
                          }
                           </>
                           ))
                       }
                            {/* <SubMenu title="Pages">
                              <SubMenu title="About Us">
                                {AboutMenu.map((val, i)=>(
                                  <MenuItem key={i}>
                                    <Link to={val.routerPath}>{val.name}</Link>
                                  </MenuItem>
                                ))}
                              </SubMenu>

                              <SubMenu title="Services">
                                {ServiceMenu.map((val, i)=>(
                                  <MenuItem key={i}>
                                    <Link to={val.routerPath}>{val.name}</Link>
                                  </MenuItem>
                                ))}
                              </SubMenu>

                              <SubMenu title="Team">
                                {TeamMenu.map((val, i)=>(
                                  <MenuItem key={i}>
                                    <Link to={val.routerPath}>{val.name}</Link>
                                  </MenuItem>
                                ))}
                              </SubMenu>

                              <MenuItem>
                               {""}
                                <Link to="/testimonial">Testimonials</Link>
                              </MenuItem>

                              <MenuItem>
                                {""}
                                  <Link to="/price">Our Pricing</Link>
                              </MenuItem>

                              <MenuItem>
                                {""}
                                  <Link to="/faq">FAQ</Link>
                              </MenuItem>

                              <MenuItem>
                                {""}
                                  <Link to="/error">404 Error</Link>
                              </MenuItem>
                            </SubMenu> */}

                            {/* <SubMenu title="Portfolio">
                              {PortfolioMenu.map((val, i)=>(
                                  <MenuItem key={i}>
                                    <Link to={val.routerPath}>{val.name}</Link>
                                  </MenuItem>
                                ))}
                            </SubMenu> */}

                            {/* <SubMenu title="Blog">
                              {BlogMenu.map((val, i)=>(
                                  <MenuItem key={i}>
                                    <Link to={val.routerPath}>{val.name}</Link>
                                  </MenuItem>
                                ))}
                            </SubMenu> */}
                        </Menu>
                    </SidebarContent>

                    <SidebarFooter></SidebarFooter>
                </ProSidebar>
            </div>
        </Fragment>
    )
}

export default MobileMenu