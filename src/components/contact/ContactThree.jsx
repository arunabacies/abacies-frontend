import React, {Fragment} from 'react';


const ContactThree = (postMeta) => {
    console.log(postMeta)
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_17.svg" alt=""/></div>
                        <h5 className="title">{postMeta.post_meta['title1']}</h5>
                        <p>{postMeta.post_meta['des1']}
                        </p>
                    </div>
                    {/* /.address-block-two */}
                </div>
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_18.svg" alt=""/></div>
                        <h5 className="title">{postMeta.post_meta['title2']}</h5>
                        <p>{postMeta.post_meta['des2']}
                            <br/>
                            <a href={`tel:${postMeta.post_meta['phone_no']}`} className="call">{postMeta.post_meta['phone_no']}</a>
                            {/* <a href="tel:310.841.5500" className="call">{postMeta.post_meta['phone_no']}</a> */}
                        </p>
                    </div>
                    {/* /.address-block-two */}
                </div>
                <div className="col-md-4">
                    <div className="address-block-two text-center mb-40 sm-mb-20">
                        <div className="icon d-flex align-items-center justify-content-center m-auto"><img src="images/icon/icon_19.svg" alt=""/></div>
                        <h5 className="title">{postMeta.post_meta['title3']}</h5>
                        <p>{postMeta.post_meta['des3']}
                            <br/>
                            <a href={postMeta.post_meta['des3_link']} className="webaddress">{postMeta.post_meta['des3_link_content']}</a>
                        </p>
                    </div>
                    {/* /.address-block-two */}
                </div>
            </div>
        </Fragment>
    )
}

export default ContactThree