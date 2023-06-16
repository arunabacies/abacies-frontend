import React, {Fragment} from 'react'

const AdressOne = ({address_title, address_p_tag}) => {
    
    return (
        <Fragment>
            <div className="address-block-one d-flex">
                <div className="icon"><img src="images/icon/icon_06.svg" alt=""/></div>
                <div className="text-meta">
                    <h4 className="title">{address_title}</h4>
                    <p>{address_p_tag}</p>
                </div>
                {/* /.text-meta */}
            </div>
            {/* /.address-block-one */}
        </Fragment>
    )
}

export default AdressOne