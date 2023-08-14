import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
 
const AboutFour = (postMeta) => {

    const handleExternalLink = (lnk) => {
        window.location.href = lnk
    }
    
    return (
        <Fragment>
            <div className="block-style-two" data-aos="fade-left">
                <div className="title-style-one">
                    <div className="sc-title-four">{postMeta.post_meta['sc-title']}</div>
                    <h2 className="main-title">{postMeta.post_meta['main-title']}
                    </h2>
                </div>
                {/* /.title-style-one */}
                <p className="pt-10 pb-20 lg-pb-10">{postMeta.post_meta['p-tag']}</p>
                <ul className="style-none list-item color-rev">
                    <li>{postMeta.post_meta['list-item-1']}</li>
                    <li>{postMeta.post_meta['list-item-2']}</li>
                    <li>{postMeta.post_meta['list-item-3']}</li>
                    <li>{postMeta.post_meta['list-item-4']}</li>
                </ul>
                <Link onClick={() => handleExternalLink(postMeta.post_meta['btn-one-link'])} to={postMeta.post_meta['btn-one-link']} className="btn-one mt-30">{postMeta.post_meta['btn-one-link-content']}</Link>
            </div>
        </Fragment>
    )
}

export default AboutFour