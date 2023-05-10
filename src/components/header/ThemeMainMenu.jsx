import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const HomeMenu = [
    {
        name: 'User Analysis',
        routerPath: '/'
    }, {
        name: 'Artificial Intelligence',
        routerPath: '/artificial-intelligence'
    }, {
        name: 'Data Science',
        routerPath: '/data-science'
    }, {
        name: 'ChatBoot',
        routerPath: '/chatboot'
    }, {
        name: 'Machine Learning',
        routerPath: '/machine-learning'
    }
];

const AboutMenu = [
    {
        name: 'About Us One',
        routerPath: '/about-one'
    }, {
        name: 'About Us Two',
        routerPath: '/about-two'
    }
];

const ServiceMenu = [
    {
        name: 'Consultation',
        routerPath: '/service-one'
    },{
        name: 'Bespoke Software development',
        routerPath: '/service-one'
    },{
        name: 'Data Analytics',
        routerPath: '/data-analytics'
    },{
        name: 'Integrations and automations',
        routerPath: '/service-one'
    },{
        name: 'SaaS',
        routerPath: '/software-service'
    },{
        name: 'Cloud',
        routerPath: '/cloud'
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
// const ServiceMenu = [
//     {
//         name: 'Service One',
//         routerPath: '/service-one'
//     }, {
//         name: 'Service Two',
//         routerPath: '/service-two'
//     }, {
//         name: 'Service Details',
//         routerPath: '/service-details'
//     }
// ];

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

const BlogMenu = [
    {
        name: 'Grid Layout',
        routerPath: '/blog-grid'
    }, {
        name: 'Grid With Sidebar',
        routerPath: '/blog-sidebar'
    }, {
        name: 'Blog Masonry',
        routerPath: '/blog-masonry'
    }, {
        name: 'Blog Standard',
        routerPath: '/blog-standard'
    }, {
        name: 'Blog Details',
        routerPath: '/blog-Details'
    }
];

const Miscellaneous = [
    {
        name: 'Testimonials',
        routerPath: '/testimonial'
    }, {
        name: 'Our Pricing',
        routerPath: '/price'
    }, {
        name: 'FAQ',
        routerPath: '/faq'
    }, {
        name: '404 Error',
        routerPath: '/error'
    }, 
];

const ThemeMainMenu = () => {

    return (
        <Fragment>
            <ul className="navbar-nav">
                <li className="d-block d-lg-none">
                    <div className="logo">
                        <Link to="/"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" role="button">Home {" "}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about-one" role="button">About US {" "}</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button">Services</a>
                    <ul className="dropdown-menu">
                        {ServiceMenu.map((val, i) => (
                            <li key={i}>
                                <Link to={val.routerPath} className="dropdown-item">
                                    <span>{val.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button">Solutions</a>
                    <ul className="dropdown-menu">
                        {Solutions.map((val, i) => (
                            <li key={i}>
                                <Link to={val.routerPath} className="dropdown-item">
                                    <span>{val.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button">Products</a>
                    <ul className="dropdown-menu">
                        {Products.map((val, i) => (
                            <li key={i}>
                                <Link to={val.routerPath} className="dropdown-item">
                                    <span>{val.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                {/* <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button">Home</a>
                    <ul className="dropdown-menu">
                        {HomeMenu.map((val, i) => (
                            <li key={i}>
                                <Link to={val.routerPath} className="dropdown-item">
                                    <span>{val.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li> */}
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button">Pages</a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-submenu dropdown">
                            <a className="dropdown-item dropdown-toggle" href="#">
                                <span>About Us</span>
                            </a>
                            <ul className="dropdown-menu">
                                {AboutMenu.map((val, i) => (
                                    <li key={i}>
                                        <Link to={val.routerPath} className="dropdown-item">
                                            <span>{val.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="dropdown-submenu dropdown">
                            <a className="dropdown-item dropdown-toggle" href="#">
                                <span>Services</span>
                            </a>
                            <ul className="dropdown-menu">
                                {ServiceMenu.map((val, i) => (
                                    <li key={i}>
                                        <Link to={val.routerPath} className="dropdown-item">
                                            <span>{val.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="dropdown-submenu dropdown">
                            <a className="dropdown-item dropdown-toggle" href="#">
                                <span>Our Team</span>
                            </a>
                            <ul className="dropdown-menu">
                                {TeamMenu.map((val, i) => (
                                    <li key={i}>
                                        <Link to={val.routerPath} className="dropdown-item">
                                            <span>{val.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {Miscellaneous.map((val, i)=>(
                            <li key={i}>
                            <Link to={val.routerPath} className="dropdown-item">
                                <span>{val.name}</span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </li> */}
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">Portfolio</a>
                    <ul className="dropdown-menu">
                        {PortfolioMenu.map((val, i) => (
                            <li key={i}>
                                <Link to={val.routerPath} className="dropdown-item">
                                    <span>{val.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li> */}
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">Blog</a>
                    <ul className="dropdown-menu">
                        {BlogMenu.map((val, i) => (
                            <li key={i}>
                                <Link to={val.routerPath} className="dropdown-item">
                                    <span>{val.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" role="button">Contact {" "}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/careers" role="button">Careers {" "}</Link>
                </li>
            </ul>
        </Fragment>
    )
}
export default ThemeMainMenu