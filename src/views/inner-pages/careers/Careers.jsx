import React, {Fragment, useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import InnerBanner from '../../../components/page-title/InnerBanner';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import BannerFive from '../../../components/short-banner/BannerFive';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import ContactThree from '../../../components/contact/ContactThree';
import ContactForm from '../../../components/form/ContactForm';
import TopNavOne from '../../../components/header/TopNavOne'
import CareerForm from '../../../components/form/CareerForm';

import apiConfig from '../../../configs/apiConfig'
import { toast} from 'react-hot-toast'
import axios from "axios"

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    UncontrolledAccordion
  } from 'reactstrap';

import BannerImages from '../../../components/images/bannerImg';
import FooterImages from '../../../components/images/footerImg';

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

const Careers = (slug) => {
    const slugValue = slug.slug.replace('/', '').replace('/', '')
    //console.log(slugValue)
    const [content, setContent] = useState([])
    console.log(content)
    const  slugname = useParams();
    //console.log(slugname)
    const careerFormRef = useRef(null);
    const hasFetched = useRef(false);

    const getCareersView = () => {
        const config = {
            method: 'get',
            url: `${apiConfig.api.url}view/v1/view-page/${slugValue}`
        }
        axios(config)
        .then(function (response) {
            //console.log(response)
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
    if (!hasFetched.current) {
        getCareersView();
        hasFetched.current = true;
    }
    }, []);

    //console.log(content)
    return (
        <Fragment>
             {content && Object.keys(content).length !== 0 &&
            <div className="main-page-wrapper">
                <Helmet>
                    <title>{content.post_meta['contenttitle']}</title>
                </Helmet>
                {/* helmet end */}

                <TopNavOne/> 
                {/* <TopNavFour/>  */}
                {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Get in Touch" currpage="Careers"/>
                    <BannerImages />

                </div>
                {/* /.theme-inner-banner */}

                <div className="contact-section-one carrers-content lg-mb-120">
                    <div className="container curent-openings">
                    <h3 className='career-heading'>Current Openings</h3>
                    <UncontrolledAccordion>
                    <AccordionItem className='accordion-parent'>
                        <AccordionHeader targetId="1">
                        WordPress developer ( 2 – 5 years )
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                        <h4 className='accordion-title'>Job Description:</h4>
                        <p className='accordion-description'>We are seeking a WordPress developer with a minimum of two years advanced WordPress development experience. The ideal candidate is someone who is actively working in the WordPress realm and on plugin development and who is knowledgeable about the most recent WordPress releases and standards. Applicants should be passionate about WordPress. The perfect candidate meets these criteria:</p>
                        <ul className='accordion-list'>
                        <li>Excellent knowledge of WordPress, PHP, MySQL, CSS, HTML and jQuery</li>
                        <li>Expert at developing using WordPress standards</li>
                        <li>Good understanding of accessibility considerations and web standards</li>
                        <li>Experience creating custom WordPress plugins</li>
                        <li>Intimate understanding of Custom Post Types</li>
                        <li>Understanding of RESTful Web Services technologies such as JSON, SOAP, and HTTP</li>
                        <li>Works both independently and with other developers</li>
                        <li>Experience coding WordPress themes</li>
                        <li>Experience using SVN software a plus</li>
                        <li>Writes well-documented code</li>
                        <li>Ability to work on multiple projects at the same time and complete tasks in a timely manner</li>
                        <li>Entrepreneurial and innovative spirit</li>
                        </ul>
                        <p className='accordion-description'><strong className='accordion-description'>Please note:</strong> This is not a position for someone just learning how to develop in WordPress. Experienced programmers only.</p>
                        <p className='accordion-description'>Your job duties will include:</p>
                        <ul className='accordion-list'>
                        <li>Developing WordPress plugins and custom functionality</li>
                        <li>Developing and maintaining complex WordPress-based applications</li>
                        <li>Working closely with internal team to understand and formulate solutions to client needs, and interacting closely with external teams of developers</li>
                        <li>Supporting and interacting with clients in a fast-paced environment</li>
                        <li>Using bug tracking, project tracking and SVN software</li>
                        </ul>
                        <div className='d-flex justify-content-center mb-3'>
                        <Button type='submit' className='apply-btn' onClick={() => careerFormRef.current.scrollIntoView({ behavior: 'smooth' })}>Apply Now</Button>
                        </div>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='accordion-parent'>
                        <AccordionHeader targetId="2">
                        UI developers ( 1 – 3 years )
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                        <h4 className='accordion-title'>Job Description:</h4>
                        <p className='accordion-description'>We are looking for an UI developer who is motivated to combine the art of design with the art of programming. Responsibilities will include the translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.The person should be well versed in HTML5 and must have a good understanding of various digital gadgets used to access web. The person will be responsible for supporting the existing processes/infrastructure as well as developing/documenting new methodology. A candidate for this position must be able to work in a varied, fast paced environment. Flexibility and tolerance is a necessity.</p>
                        <p className='accordion-description'>Key Responsibilities:</p>
                        <ul className='accordion-list'>
                        <li>Develop new user-facing features</li>
                        <li>Build reusable code and libraries for future use</li>
                        <li>Ensure the technical feasibility of UI/UX designs</li>
                        <li>Optimize application for maximum speed and scalability</li>
                        <li>Assure that all user input is validated before submitting to back-end</li>
                        <li>Collaborate with other team members and stakeholders</li>
                        <li>The ideal candidate must be able to customize/implement JS plug-ins as per the requirement</li>
                        <li>Should be able to address the scope of the project</li>
                        <li>Must be proactive in listing needs/limitations etc. for a particular project</li>
                        <li>Must able to train and impart the knowledge within the team</li>
                        </ul>
                        <p className='accordion-description'>Skill Set:</p>
                        <ul className='accordion-list'>
                        <li>Css3 /HTML5/Bootstrap/Responsive web design</li>
                        <li>Knowledge in Figma Designs and Wireframing tools will be an added advantage</li>
                        <li>Design to Code conversions (Nice to have)</li>
                        <li>Proficient understanding of cross-browser compatibility issues and ways to work around them.</li>
                        <li>Fair understanding of JavaScript programming and DOM manipulation</li>
                        <li>Good understanding of SEO principles and ensuring that the application will adhere to them</li>
                        <li>Proficient understanding of code versioning tools, such as Git / Mercurial / SVN</li>
                        <li>Strong knowledge of web standards</li>
                        <li>Sound understanding of Web Standards (W3C)</li>
                        <li>Expertise in handling Cross browser issues and backward compatibility of the site</li>
                        <li>Good knowledge of JS Libraries (like jQuery, Angular Js, etc.)</li>
                        <li>Knowledge in PHP will be an added advantage</li>
                        </ul>
                        <div className='d-flex justify-content-center mb-3'>
                        <Button type='submit' className='apply-btn' onClick={() => careerFormRef.current.scrollIntoView({ behavior: 'smooth' })}>Apply Now</Button>
                        </div>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='accordion-parent'>
                        <AccordionHeader targetId="3">
                        Python Developers ( 2 – 5 years )
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                        <h4 className='accordion-title'>Job Description:</h4>
                        <p className='accordion-description'>We are looking for a Python Developer responsible for managing back-end services. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application. Therefore, a basic understanding of front-end technologies is necessary as well.</p>
                        <p className='accordion-description'>Key Responsibilities:</p>
                        <ul className='accordion-list'>
                        <li>Integration of user-facing elements developed by front-end developers</li>
                        <li>Solve complex performance problems and architectural challenges</li>
                        <li>Integration of data storage solutions</li>
                        <li>Customizing contributed modules and creating Custom modules</li>
                        </ul>
                        <p className='accordion-description'>Skill Set:</p>
                        <ul className='accordion-list'>
                        <li>Highly proficient in Python and frameworks like Django, Flask</li>
                        <li>Familiarity with Soap/ REST APIs  Familiarity with Serverless concept</li>
                        <li>Good knowledge working with AWS, GCP, Azure, and Heroku</li>
                        <li>Familiarity with Message brokers and Queuing mechanisms</li>
                        <li>Solid working knowledge of AJAX, XML, and jQuery</li>
                        <li>Ability to take up R&D activities and resolve issues</li>
                        <li>Strong experience in Customizing contributed modules and creating Custom modules</li>
                        <li>Team player, dependable and able to learn on the job</li>
                        </ul>
                        <div className='d-flex justify-content-center mb-3'>
                        <Button type='submit' className='apply-btn' onClick={() => careerFormRef.current.scrollIntoView({ behavior: 'smooth' })}>Apply Now</Button>
                        </div>
                        </AccordionBody>
                    </AccordionItem>
                    </UncontrolledAccordion>
                        {/* <ContactThree post_meta={content.post_meta}/> */}
                    </div>
                    <div className="mt-100 mb-50 lg-mt-70">
                        <div className="container">
                            <div className="row gx-xxl-5">
                                <div className="col-lg-6 d-flex order-lg-last">
                                    <div className="form-style-one"  style={{ "position": "relative" }} ref={careerFormRef}>
                                        <h3 className="form-title pb-40 lg-pb-20">Join Our Team.</h3>
                                        <CareerForm/>
                                    </div>
                                    {/* /.form-style-one */}
                                </div>
                                <div className="col-lg-6 d-flex order-lg-first">
                                    <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                                        <div className="mapouter">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.2582167947693!2d76.36281346951566!3d10.014143820054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc6d3a091e1%3A0x8da708cf730555e5!2sGreentouch%20spaces!5e0!3m2!1sen!2sin!4v1688377320799!5m2!1sen!2sin"
                                                style={{
                                                border: 0
                                            }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"/>
                                        </div>
                                    </div>
                                    {/* /.map-area-one */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {content.content &&
                    <div className="feedback-section-three pageContent position-relative mt-120 mb-50 lg-mt-100">
                        <div className="container"> */}
                            {/* <div className="title-style-one text-center">
                                <h2 className="main-title">Driving Digital Disruption With SaaS</h2>
                            </div> */}
                            {/* <div className="inner-content mt-90 lg-mt-60">
                                <div className="htmlContent" style={{width: "100%"}} dangerouslySetInnerHTML={{ __html: content.content}} />
                            </div> */}
                            {/* /.slider-wrapper */}
                        {/* </div> */}
                        {/* /.container */}
                    {/* </div>
                    } */}
                </div>
                {/* /.contact-section-one */}

                {/* <div className="fancy-short-banner-five">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerFive/>
                        </div> */}
                        {/* /.bg-wrapper */}
                    {/* </div> */}
                    {/* /.container */}
                {/* </div> */}
                {/* /.fancy-short-banner-five */}

                <div className="footer-style-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            {/* <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div> */}
                                        {/* /.title-style-four */}
                                    {/* </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <NewsLetterForm/>
                                            <p>We only send interesting and relevant emails.</p>
                                        </div> */}
                                        {/* /.subscribe-form */}
                                    {/* </div>
                                </div>
                            </div> */}
                            {/* /.subscribe-area */}
                            <FooterFour/>
                            <div className="bottom-footer">
                                <CopyRightFour/>
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                    <FooterImages />
                </div>
                {/* /.footer-style-four */}

            </div>
            }
        </Fragment>
    )
}

export default Careers