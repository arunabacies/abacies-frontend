import React, { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenus } from '../redux/menuSlice';
import Spinner from "../components/Spinner";
import { Routes, Route } from "react-router-dom";
import HomePage from '../views/home-pages/HomePage';
import AboutUsOne from '../views/inner-pages/about-us/AboutUsOne';
import ServicesOne from '../views/inner-pages/pages/services/ServicesOne';
import ServicesDetails from '../views/inner-pages/pages/services/ServicesDetails';
import ProductTemplate from '../views/inner-pages/product-templates/product';
import ServiceTemplate from '../views/inner-pages/service-templates/service';
import SolutionTemplate from '../views/inner-pages/solution-templates/solution';
import CaseStudies from '../views/inner-pages/solution-templates/caseStudy';
import WhitePaper from '../views/inner-pages/solution-templates/whitePaper';
import Default from '../views/inner-pages/default-template/default';
import Contact from '../views/inner-pages/contact/Contact';
import Careers from '../views/inner-pages/careers/Careers';
import NotFound from "../views/NotFound";

const AppRouter = () => {
  const dispatch = useDispatch();
  const hasFetched = useRef(false);
  const { menus, loading } = useSelector((state) => state.menu);
  const replace = 'https://abacies.bettertomorrow.green/';

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchMenus());
      hasFetched.current = true;
    }
  }, [dispatch]);

  return (
    <Fragment>
      <Routes>
        {menus && menus.map(menuItems => (
          <Fragment key={menuItems.id}>
            {menuItems.title === 'Home' &&
              <Route path={menuItems.url.replace(replace, '/')} element={<HomePage slug={menuItems.url.replace(replace, '/')} menus={menus} />} />
            }
            {menuItems.title === 'About Us' &&
              <Route path={menuItems.url.replace(replace, '/')} element={<AboutUsOne slug={menuItems.url.replace(replace, '/')} />} />
            }
            {menuItems.title === 'Contact Us' &&
              <Route path={menuItems.url.replace(replace, '/')} element={<Contact slug={menuItems.url.replace(replace, '/')} />} />
            }
            {menuItems.title === 'Careers' &&
              <Route path={menuItems.url.replace(replace, '/')} element={<Careers slug={menuItems.url.replace(replace, '/')} />} />
            }
            {menuItems.title === 'Products' &&
              menuItems.children && menuItems.children.map(child => (
                <Fragment key={child.id}>
                  <Route path={child.url.replace(replace, '/')} element={<ProductTemplate slug={child.post_id} />} />
                  {child.children && child.children.map(child2 => (
                    <Route key={child2.id} path={child2.url.replace(replace, '/')} element={<ProductTemplate slug={child2.post_id} />} />
                  ))}
                </Fragment>
              ))
            }
            {menuItems.title === 'Solutions' &&
              menuItems.children && menuItems.children.map(child => (
                <Fragment key={child.id}>
                  {child.title === 'Case Studies' &&
                    <Route path={child.url.replace(replace, '/')} element={<CaseStudies menuItems={child.children} slug={child.post_id} />} />
                  }
                  {child.title === 'White Paper' &&
                    <Route path={child.url.replace(replace, '/')} element={<WhitePaper menuItems={child.children} slug={child.post_id} />} />
                  }
                  {child.title !== 'Case Studies' && child.title !== 'White Paper' &&
                    <Route path={child.url.replace(replace, '/')} element={<SolutionTemplate slug={child.post_id} />} />
                  }
                  {child.children && child.children.map(child2 => (
                    <Route key={child2.id} path={child2.url.replace(replace, '/')} element={<SolutionTemplate slug={child2.post_id} />} />
                  ))}
                </Fragment>
              ))
            }
            {menuItems.title === 'Services' &&
              <Fragment>
                <Route path={menuItems.url.replace(replace, '/')} element={<ServicesOne menuItems={menuItems.children} slug={menuItems.url.replace(replace, '/')} />} />
                {menuItems.children && menuItems.children.map(child => (
                  <Fragment key={child.id}>
                    <Route path={child.url.replace(replace, '/')} element={<ServiceTemplate slug={child.post_id} />} />
                    {child.children && child.children.map(child2 => (
                      <Route key={child2.id} path={child2.url.replace(replace, '/')} element={<ServiceTemplate slug={child2.post_id} />} />
                    ))}
                  </Fragment>
                ))}
              </Fragment>
            }
            {menuItems.title !== 'Careers' && menuItems.title !== 'Services' && menuItems.title !== 'Solutions' && menuItems.title !== 'Products' && menuItems.title !== 'Contact Us' && menuItems.title !== 'About Us' && menuItems.title !== 'Home' &&
              <Fragment>
                <Route path={menuItems.url.replace(replace, '/')} element={<Default slug={menuItems.url.replace(replace, '/')} />} />
                {menuItems.children && menuItems.children.map(child => (
                  <Fragment key={child.id}>
                    <Route path={child.url.replace(replace, '/')} element={<Default menuItems={child.children} slug={parseInt(child.post_id)} />} />
                    {child.children && child.children.map(child2 => (
                      <Route key={child2.id} path={child2.url.replace(replace, '/')} element={<Default slug={parseInt(child2.post_id)} />} />
                    ))}
                  </Fragment>
                ))}
              </Fragment>
            }
          </Fragment>
        ))}
        {menus && menus.length > 0 &&
          <>
            <Route path="/service-details" element={<ServicesDetails />} />
            <Route path="*" element={<NotFound />} />
          </>
        }
      </Routes>
      {loading && <Spinner />}
    </Fragment>
  );
};

export default AppRouter;
