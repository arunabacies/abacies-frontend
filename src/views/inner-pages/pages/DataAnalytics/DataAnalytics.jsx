import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

import TopNavFour from '../../../../components/header/TopNavOne';
import InnerBanner from '../../../../components/page-title/InnerBanner';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';
import FancyFeature24 from '../../../../components/feature/FancyFeature24';

const DataAnalytics = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>DataAnalytics || Abacies - Data Science & Analytics React Template</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="DataAnalytics" currpage="DataAnalytics"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div
                    className="feedback-section-three position-relative mt-150 lg-mt-100"
                    data-aos="fade-up">
                    <div className="container">
                        <div className="title-style-one text-center">
                            <h2 className="main-title">Operationalize Your Data And Analytics Strategy With HCLTech</h2>
                        </div>
                        <div className="inner-content mt-90 lg-mt-60">
                            <div className="slider-wrapper">
                                <p>Data is the currency of today's digital economy, and enterprises across every industry are taking the next step in their journey toward data lifecycle management. For some, that next step is to establish data governance and make their data better accessible across the organization. For others, it’s infusing data into organizational operations and decision-making. Wherever you find yourself on the road to data maturity, HCLTech is here to help.</p>
                                <p>HCLTech's data and analytics capabilities enable our clients to become more intentional with how their data is collected, consumed, and applied to achieve better business outcomes. We understand that data landscapes vary widely both across and within organizations, and our human-centered consulting approach allows us to put ourselves in your shoes and devise data solutions that move your enterprise ahead on its data maturity initiatives.</p>
                                <h4 className="font-weight-bold text-primary mt-20 mb-10">Our approach to data & analytics:</h4>
                                <ul>
                                    <li><strong>Strategic differentiation: </strong>Our data and analytics leaders bring novel PoVs and original approaches to our customers.</li>
                                    <li><strong>Optimal execution: </strong>Complementing this strategic differentiation is our FENIX 2.0 framework, which helps us operationalize your data-driven transformations along the shortest and highest RoI pathways.</li>
                                    <li><strong>Delivery model:  </strong>Our unique service delivery model FENIX 2.0, supported by highly experienced engineers covers the complete information and insight lifecycle for customers and delivers your transformation in a collaborative, customer centric and agile manner.</li>
                                </ul>
                            </div>
                        </div>
                        {/* /.slider-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.feedback-section-three */}

                <div className="fancy-feature-twentyFour">
                    <div className="container">
                        <FancyFeature24/>
                    </div>
                </div>
                {/* /.feedback-section-four */}

                <div
                    className="feedback-section-five position-relative mt-10 pb-50 lg-mt-10 lg-pb-40">
                    <div className="container">
                        <div className="title-style-one text-center">
                            <h2 className="main-title">Embark On The SaaS Journey With Transformative Technology And Solutions</h2>
                        </div>
                        {/* /.title-style-one */}
                    </div>
                    {/* /.container */}
                    <div className="inner-content mt-90 lg-mt-60">
                        <div className="container">
                            <div className="slider-wrapper">
                                <p>Our SaaS solutions fall under three categories, each essential to building resilient digital enterprises:</p>
                                <h4 className="font-weight-bold text-primary mt-20 mb-10">Digital Business SaaS – CRM: </h4>
                                    <p className='mb-30'>Customer Relationship Management (CRM) is a solution that brings companies and customers together. An integrated CRM platform gives all your functional teams — including marketing, sales, commerce, and service — a single, shared view of every customer. As a Summit Consulting Partner for Salesforce along with other CRM cloud solutions on SugarCRM and Zendesk, HCLTech help accelerate business transformation on cloud across the enterprise by offering an integrated approach toward business processes, technology, and data. HCLTech is a market leader in the rapidly growing market space associated with Salesforce products, including Sales, Service, Marketing, Commerce, CPQ, Experiences (formerly Communities), Industry solutions, Platform, and AppExchange products. HCLTech Salesforce spectrum offers a comprehensive range of services, from advisory and system integration services to support services, enabling enterprises in achieving the full potential of Salesforce solutions to reshape business experiences.</p>
                                <h4 className="font-weight-bold text-primary mt-20 mb-10">Digital Business SaaS – HCM: </h4>
                                    <p className='mb-30'>Human Capital Management (HCM) focuses on the effective management of employees in an organization to enhance their work performance and deliver the best results. HCLTech with our strong capabilities in HCM solutions like Workday, Ultimate Kronos Group (UKG), and Cornerstone OnDemand (CSOD), enables organizations to simplify and automate workflows and systems, resulting in a strong organizational culture that promotes a highly structured work environment. Our HCM solutions help organizations empower HR professionals and build a self-directed culture of work, where every employee feels guided and valued. Our HCM Center of Excellence (CoE) team brings 12+ years of experienced in providing end-to-end HCM services like Advisory/Consulting, Implementation, Rollout, and Application Support and Managed Services(AMS). Capitalizing on the experience and expertise of the team, organizations can tailor the HCM solutions to their unique needs and objectives.</p>
                                <h4 className="font-weight-bold text-primary mt-20 mb-10">Digital Business SaaS – SCM: </h4>
                                    <p className='mb-30'>This SaaS platform solution addresses an organization’s overarching end-to-end supply chain and operations strategy to grow, optimize, and protect its operations. In today’s digital world, the digital supply chain applies to every aspect of the end-to-end supply chain. As a System Integrator (SI) for Anaplan, Blue Yonder, Coupa, Kinaxis, and o9 solutions, along with other SCM SaaS solutions such as Manhattan, Jagger, OMP, OMS, etc., we help customers adopt digital supply chain by offering an integrated SCM platform, critical design thinking approach, the best breed of technologies, practices, and proof of concepts. HCLTech's Supply Chain Management (SCM) practice provides robust solutions using artificial intelligence, big data, predictive analytics, and digital control towers to manage end-to-end supply chains with minimal human intervention. Process management, material flow, supply and demand planning, resource planning, inventory levels, cash flow, and strategy can all be managed dynamically with real-time, global information ready at hand. HCLTech supply chain SaaS spectrum offers a comprehensive range of services from advisory, implementation, customization, configuration, integration, migration, upgrade, end to end validation with QA and managed services to transform digital business experiences.</p>
                               </div>
                        </div>
                        {/* /.slider-wrapper */}
                    </div>
                    {/* /.inner-content */}
                </div>
                {/* /.feedback-section-five */}

                <div
                    className="feedback-section-six position-relative mt-10 pb-50 lg-mt-10 lg-pb-40">
                    <div className="container">
                        <div className="title-style-one text-center">
                            <h2 className="main-title">Business Process</h2>
                        </div>
                        {/* /.title-style-one */}
                    </div>
                    {/* /.container */}
                    <div className="inner-content mt-90 lg-mt-60">
                        <div className="container">
                            <div className="slider-wrapper">
                                <h4 className="font-weight-bold mt-10 mb-30">Unlock the full potential of processes and people:</h4>
                                <p>Modernize your business processes to reduce complexity, build resilience, and realize value faster with a wide range of innovative tools and solutions available to provide end-to-end coverage. Our SaaS solutions optimize and modernize the below business processes:</p>
                                <ul>
                                    <li>Market to order</li>
                                    <li>Forecast to plan</li>
                                    <li>Quote to order</li>
                                    <li>Procure to pay</li>
                                    <li>Order to cash</li>
                                    <li>Financial plan to report</li>
                                    <li>RMA-Sales return cycle</li>
                                    <li>Hire to retire</li>
                                    <li>Acquire to retire</li>
                                    <li>Issue resolution</li>
                                </ul>
                                </div>
                        </div>
                        {/* /.slider-wrapper */}
                    </div>
                    {/* /.inner-content */}
                </div>
                {/* /.feedback-section-six */}
               
                <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div>
                                        {/* /.title-style-four */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="email" placeholder="Enter your email"/>
                                                <button className="ripple-btn tran3s">Subscribe</button>
                                            </form>
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                        {/* /.subscribe-form */}
                                    </div>
                                </div>
                            </div>
                            {/* /.subscribe-area */}
                            <FooterFour />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
                {/* /.footer-style-four */}

            </div>
        </Fragment>
    )
}

export default DataAnalytics