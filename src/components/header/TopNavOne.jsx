import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import SearchModal from '../../components/search-modal/SearchModal';
import MobileMenu from './MobileMenu';
import ThemeMainMenue from './ThemeMainMenu'

const TopNavOne = () => {
    const [navbar, setNavbar] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(!modalIsOpen);
    }
    const toggleMenu =()=>{
      if(window.scrollY >= 68) {
        setNavbar(true)
      } else{
        setNavbar(false)
      }
    }
  
    window.addEventListener('scroll', toggleMenu);
    return (
        <Fragment>
            <SearchModal isOpen={modalIsOpen} onClick={closeModal} bgColor="" />
            <header className={navbar ? "theme-main-menu sticky-menu theme-menu-one fixed" : "theme-main-menu sticky-menu theme-menu-one"}>
                <div className="inner-content">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo order-lg-0">
                            {/* <Link to="/" className="d-block"><img src="images/logo/abacies-logo-sample.png" alt="" width={100} height={80}/></Link> */}
                            <Link to="/" className="d-block"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAEACAYAAADCyK/GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMTc4RjlDRkQ2MzVFQTExQjA4QkI5MTRDQzJGOTlCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRUMyMjU1RTM4MzAxMUVBQjRCMEE4NTI3Mzc1OTM5OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRUMyMjU1RDM4MzAxMUVBQjRCMEE4NTI3Mzc1OTM5OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNzhGOUNGRDYzNUVBMTFCMDhCQjkxNENDMkY5OUIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxNzhGOUNGRDYzNUVBMTFCMDhCQjkxNENDMkY5OUIzIi8+IDwvcmRmOkRlc2NyaXB0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" alt="" width={100} height={80}/></Link>
                            {/* <Link to="/" className="d-block"><img src="images/logo/logo_01.png" alt="" width={130}/></Link> */}
                        </div>
                        {/* <div
                            className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
                            <button
                                className="menu-search-btn tran3s"
                                type="button" onClick={openModal}><i className="bi bi-search"/></button>
                            <Link to="/contact" className="req-demo-btn tran3s d-none d-lg-block">Request a Demo</Link>
                        </div> */}
                        {/* /.right-widget */}
                        <nav className="navbar navbar-expand-lg order-lg-2">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ThemeMainMenue />
                                {/* Mobile Content */}
                                {/* <div className="mobile-content d-block d-lg-none">
                                    <div
                                        className="d-flex flex-column align-items-center justify-content-center mt-70">
                                        <Link to="/contact" className="req-demo-btn tran3s">Request a Demo</Link>
                                    </div>
                                </div> */}
                                {/* /.mobile-content */}
                            </div>
                        </nav>
                    </div>

                    <MobileMenu />
                    {/* /mobilemenu */}
                </div>
                {/* /.inner-content */}
            </header>
            {/* /.theme-main-menu */}

        </Fragment>
    )
}

export default TopNavOne