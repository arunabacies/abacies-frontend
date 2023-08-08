import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";


//All Home Page Routes
import UserAnalysis from '../views/home-pages/UserAnalysis';
import ArtificialIntelligence from '../views/home-pages/ArtificialIntelligence';
import HomePage from '../views/home-pages/HomePage';
import ChatBoot from '../views/home-pages/ChatBoot';
import MachineLearning from '../views/home-pages/MachineLearning';

//All Inner Page Routes

//All DropDown Page Routes

//All About Page Routes
import AboutUsOne from '../views/inner-pages/about-us/AboutUsOne';
// import AboutUsTwo from '../views/inner-pages/pages/about-us/AboutUsTwo';

//All Service Page Routes
import ServicesOne from '../views/inner-pages/pages/services/ServicesOne';
import Consultation from '../views/inner-pages/pages/services/Consultation';
import TelegramLMS from '../views/inner-pages/pages/services/TelegramLMS';
import BetterTomorrow from '../views/inner-pages/pages/services/BetterTomorrow';
import Decisions from '../views/inner-pages/pages/services/Decisions';
import ChatGPTIntegration from '../views/inner-pages/pages/services/ChatGPTIntegration';
import ChatGPTtraining from '../views/inner-pages/pages/services/ChatGPTtraining';
import ChaptGPTPromptEngineering from '../views/inner-pages/pages/services/ChaptGPTPromptEngineering';
import Chatbots from '../views/inner-pages/pages/services/Chatbots';
import IntegrationsAutomations from '../views/inner-pages/pages/services/IntegrationsAutomations';
import BespokeSoftwareDevelopment from '../views/inner-pages/pages/services/BespokeSoftwareDevelopment';
import ServicesTwo from '../views/inner-pages/pages/services/ServicesTwo';
import ServicesDetails from '../views/inner-pages/pages/services/ServicesDetails';

//All Team Page Routes
import TeamMember from '../views/inner-pages/pages/team/TeamMember';
import TeamDetails from '../views/inner-pages/pages/team/TeamDetails';


// Testimonial Page Routes
import Testimonial from '../views/inner-pages/pages/Testimonial';
import OurPricing from '../views/inner-pages/pages/OurPricing';
import FAQ from '../views/inner-pages/pages/FAQ';
import Error from '../views/inner-pages/pages/Error';

// All Portfolio Page Routes
import Portfolio3Column from '../views/inner-pages/portfolio/Portfolio3Column';
import Portfolio2Column from '../views/inner-pages/portfolio/Portfolio2Column';
import PortfolioMasonry from '../views/inner-pages/portfolio/PortfolioMasonry';
import PortfolioSingle from '../views/inner-pages/portfolio/PortfolioSingle';
import CaseStudy from '../views/inner-pages/portfolio/CaseStudy';
import WhitePaper from '../views/inner-pages/portfolio/WhitePaper';

import ProductTemplate from '../views/inner-pages/product-templates/product';
import ServiceTemplate from '../views/inner-pages/service-templates/service';
import SolutionTemplate from '../views/inner-pages/solution-templates/solution';

// All Blog Page Routes
import GridLayout from '../views/inner-pages/blog/GridLayout';
import GridWithSidebar from '../views/inner-pages/blog/GridWithSidebar';
import BlogMasonry from '../views/inner-pages/blog/BlogMasonry';
import BlogStandard from '../views/inner-pages/blog/BlogStandard';
import BlogDetails from '../views/inner-pages/blog/BlogDetails';

// Saas Page
import Saas from '../views/inner-pages/pages/Saas/Saas';
// DataAnalytics Page
import DataAnalytics from '../views/inner-pages/pages/DataAnalytics/DataAnalytics';
// AI Page
import AI from '../views/inner-pages/pages/ai/AI';
// Cloud Page
import Cloud from '../views/inner-pages/pages/cloud/Cloud';
// Contact Page Routes
import Contact from '../views/inner-pages/contact/Contact';

import Careers from '../views/inner-pages/careers/Careers'

// Not Found Page
import NotFound from "../views/NotFound";

import apiConfig from '../configs/apiConfig'
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

const AppRouter = () => {
  const replace = 'https://abacies.bettertomorrow.green/'
  const [menus, setMenus] = useState([])
  const [product, setProduct] = useState([])
  const [solutions, setSolutions] = useState([])
  const [services, setServices] = useState([])
  
  // const replace = 'http://localhost/abacies/'
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
      } 
    })
  }

  const getProducts = () => {
    const config = {
        method: 'get',
        url: `${apiConfig.api.url}view/v1/products`
    }
    axios(config)
    .then(function (response) {
        console.log(response)
        if (response.status === 200) {
            setProduct(response.data)
        } else {
            toast.error(
            <ToastContent message={response.data.message} />,
            {duration:3000}             
          )
        }
    })
    .catch(error => {
      console.log(error)
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
      } 
    })
  }

  const getSolutions = () => {
    const config = {
        method: 'get',
        url: `${apiConfig.api.url}view/v1/solutions`
    }
    axios(config)
    .then(function (response) {
        console.log(response)
        if (response.status === 200) {
            setSolutions(response.data)
        } else {
            toast.error(
            <ToastContent message={response.data.message} />,
            {duration:3000}             
          )
        }
    })
    .catch(error => {
      console.log(error)
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
      } 
    })
  }

  const getServices = () => {
    const config = {
        method: 'get',
        url: `${apiConfig.api.url}view/v1/services`
    }
    axios(config)
    .then(function (response) {
      console.log(response)
      if (response.status === 200) {
          setServices(response.data)
      } else {
          toast.error(
          <ToastContent message={response.data.message} />,
          {duration:3000}             
        )
      }
    })
    .catch(error => {
      console.log(error)
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
      } 
    })
  }

  useEffect(() => {
      getMenus()
      // getProducts()
  }, [])
  console.log(menus)
  console.log(replace)

  return (
    <Fragment>
      <Routes>
       {menus && menus.map(menuItems => (
        <>
        {menuItems.title === 'Home' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<HomePage slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'About Us' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<AboutUsOne slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Consultation' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<Consultation slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Bespoke Software development' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<BespokeSoftwareDevelopment slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Integrations and automations' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<IntegrationsAutomations slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'SaaS' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<Saas slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Cloud' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<Cloud slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'AI' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<AI slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Chatbots' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<Chatbots slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'ChatGPT Training' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<ChatGPTtraining slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'ChaptGPT Prompt Engineering' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<ChaptGPTPromptEngineering slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'ChatGPT integration' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<ChatGPTIntegration slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Contact Us' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<Contact slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Careers' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<Careers slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Case Study' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<CaseStudy slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'White Paper' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<WhitePaper slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Decisions' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<Decisions slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Better Tomorrow' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<BetterTomorrow slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Telegram LMS' &&
          <Route path={menuItems.url.replace(replace, '/')} element={<TelegramLMS slug={menuItems.url.replace(replace, '/')}/>} />
        }
        {menuItems.title === 'Products' &&
          menuItems.children && menuItems.children.map((child, idx) => 
            <>
            <Route path={child.url.replace(replace, '/')} element={<ProductTemplate slug={child.post_id}/>} />
            {child.children && child.children.map((child2, idx) => 
              <Route path={child2.url.replace(replace, '/')} element={<ProductTemplate slug={child2.post_id}/>} />
            )}
            </>
          )
        }
        {menuItems.title === 'Solutions' &&
          menuItems.children && menuItems.children.map((child, idx) => 
            <>
            <Route path={child.url.replace(replace, '/')} element={<SolutionTemplate slug={child.post_id}/>} />
            {child.children && child.children.map((child2, idx) => 
            <Route path={child2.url.replace(replace, '/')} element={<SolutionTemplate slug={child2.post_id}/>} />
            )}
            </>
          )
        }
        {menuItems.title === 'Services' &&
          menuItems.children && menuItems.children.map((child, idx) => 
            <>
            <Route path={child.url.replace(replace, '/')} element={<ServiceTemplate slug={child.post_id}/>} />
            {child.children && child.children.map((child2, idx) => 
            <Route path={child2.url.replace(replace, '/')} element={<ServiceTemplate slug={child2.post_id}/>} />
            )}
            </>
          )
        }
        </>
        ))}
        
        {/*product.map((val, i) => (
        <>
        {val.title && 
          <Route path={val?.url?.replace(replace, '/')} element={<ProductTemplate slug={val.id} />} />
        }
        </>
      ))*/}
        <Route path="/service-details" element={<ServicesDetails />} />
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/chatboot" element={<ChatBoot />} />
        <Route path="/careers" element={<FAQ />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/machine-learning" element={<MachineLearning />} />

        <Route path="/about-one" element={<AboutUsOne />} />
        <Route path="/about-two" element={<AboutUsTwo />} />

        <Route path="/service-one" element={<ServicesOne />} />
        <Route path="/service-two" element={<ServicesTwo />} />
        <Route path="/service-details" element={<ServicesDetails />} />

        <Route path="/team-member" element={<TeamMember />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path='/software-service' element={<Saas/>}/>

        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/price" element={<OurPricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/error" element={<Error />} />

        <Route path="/portfolio-3" element={<Portfolio3Column />} />
        <Route path="/portfolio-2" element={<Portfolio2Column />} />
        <Route path="/portfolio-masonry" element={<PortfolioMasonry />} />
        <Route path="/portfolio-single" element={<PortfolioSingle />} />

        <Route path="/blog-grid" element={<GridLayout />} />
        <Route path="/blog-sidebar" element={<GridWithSidebar />} />
        <Route path="/blog-masonry" element={<BlogMasonry />} />
        <Route path="/blog-standard" element={<BlogStandard />} />
        <Route path="/blog-details" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Fragment>
  )
}

export default AppRouter