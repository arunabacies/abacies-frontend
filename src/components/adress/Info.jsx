import React, {Fragment} from 'react'

const Info = ({contact_title, contact_p_tag, contact_num}) => {
    
    return (
        <Fragment>
            <div className="address-block-one d-flex">
            <div className="icon"><img src="images/icon/icon_07.svg" alt=""/></div>
            <div className="text-meta">
                <h4 className="title">{contact_title}</h4>
                <p>{contact_p_tag}
                    <br/>
                    <a href="#">{contact_num}</a>
                </p>
            </div>
        </div>
        </Fragment>
    )
}

export default Info