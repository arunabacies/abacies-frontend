import React, {Fragment} from 'react'

const AdressOne = () => {
    return (
        <Fragment>
            <div className="address-block-one d-flex border-right">
                <div className="icon"><img src="images/icon/icon_06.svg" alt=""/></div>
                <div className="text-meta">
                    <h4 className="title">Our Address</h4>
                    <p>28A, Ground floor, INFOPARK TBC, 
                        <br/>SECTOR E, JNI STADIUM, Kaloor, 
                        <br/>Ernakulam, Jawaharlal Nehru
                        <br/> International Stadium, Kaloor,
                        <br/> Kochi, Kerala 682017
                    </p>
                </div>
                {/* /.text-meta */}
            </div>
            {/* /.address-block-one */}
        </Fragment>
    )
}

export default AdressOne