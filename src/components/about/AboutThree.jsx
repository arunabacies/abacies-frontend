import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const AboutThree = (postMeta) => {
    console.log(postMeta)
    return (
        <Fragment>
            {postMeta && 
                <div className="block-style-two" data-aos="fade-left">
                    <div className="title-style-one">
                        <div className="sc-title">{postMeta.post_meta['abt-sc-title']}</div>
                        <h2 className="main-title">{postMeta.post_meta['abt-main-title']}</h2>
                    </div>
                    {/* /.title-style-one */}
                    <p className="pt-10 pb-20 lg-pb-10">{postMeta.post_meta['abt-p_tag']}</p>
                    <ul className="style-none list-item">
                        <li>{postMeta.post_meta['abt_list_li1']}</li>
                        <li>{postMeta.post_meta['abt_list_li2']}</li>
                        <li>{postMeta.post_meta['abt_list_li3']}</li>
                    </ul>
                    <div className="btn-three mt-45 lg-mt-30">{postMeta.post_meta['abt-btn-three']}<Link to={postMeta.post_meta['abt-btn-three-link']}>{postMeta.post_meta['abt-btn-three-link-content']}<i className="fas fa-chevron-right"/></Link>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default AboutThree