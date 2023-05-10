import React, {Fragment, useState} from 'react';
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

const HomeMenu =[
  {
    name: 'User Analysis',
    routerPath: '/'
  },
  {
    name: 'Artificial Intelligence',
    routerPath: '/artificial-intelligence'
  },
  {
    name: 'Data Science',
    routerPath: '/data-science'
  },
  {
    name: 'ChatBoot',
    routerPath: '/chatboot'
  },
  {
    name: 'Machine Learning',
    routerPath: '/machine-learning'
  },
];

const AboutMenu =[
  {
    name: 'About Us One',
    routerPath: '/about-one'
  },
  {
    name: 'About Us Two',
    routerPath: '/about-two'
  }
];

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

const TeamMenu =[
  {
    name: 'Team Member',
    routerPath: '/team-member'
  },
  {
    name: 'Team Details',
    routerPath: '/team-details'
  }
];


const PortfolioMenu =[
  {
    name: 'Portfolio 3 Column',
    routerPath: '/portfolio-3'
  },
  {
    name: 'Portfolio 2 Column',
    routerPath: '/portfolio-2'
  },
  {
    name: 'Portfolio Masonry',
    routerPath: '/portfolio-masonry'
  },
  {
    name: 'Single Portfolio',
    routerPath: '/portfolio-single'
  },

];


const BlogMenu =[
  {
    name: 'Grid Layout',
    routerPath: '/blog-grid'
  },
  {
    name: 'Grid With Sidebar',
    routerPath: '/blog-sidebar'
  },
  {
    name: 'Blog Masonry',
    routerPath: '/blog-masonry'
  },
  {
    name: 'Blog Standard',
    routerPath: '/blog-standard'
  },
  {
    name: 'Blog Details',
    routerPath: '/blog-Details'
  },

];

const MobileMenu = () => {

    const [click, setClick] = useState(false);

   
    const handleClick = () => {
        setClick(!click);
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
                            <MenuItem>
                                {""}
                                <Link to="/">Home</Link>
                            </MenuItem>
                            <MenuItem>
                                {""}
                                <Link to="/about-one">About US</Link>
                            </MenuItem>
                            <SubMenu title="Services">
                              {ServiceMenu.map((val, i)=>(
                                <MenuItem key={i}>
                                  <Link to={val.routerPath}>{val.name}</Link>
                                </MenuItem>
                              ))}
                            </SubMenu>
                            <SubMenu title="Solutions">
                              {Solutions.map((val, i)=>(
                                <MenuItem key={i}>
                                  <Link to={val.routerPath}>{val.name}</Link>
                                </MenuItem>
                              ))}
                            </SubMenu>
                            <SubMenu title="Products">
                              {Products.map((val, i)=>(
                                <MenuItem key={i}>
                                  <Link to={val.routerPath}>{val.name}</Link>
                                </MenuItem>
                              ))}
                            </SubMenu>
                            <MenuItem>
                                {""}
                                <Link to="/contact">Contact</Link>
                            </MenuItem>
                            <MenuItem>
                                {""}
                                <Link to="/careers">Careers</Link>
                            </MenuItem>

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