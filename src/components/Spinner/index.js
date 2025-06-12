import React, {Fragment} from 'react';
import { SquareLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {

    return (
        <div style={{display: "flex", justifyContent: "center", background: "#fff", position: "fixed", left: "0", top: "0", zIndex: "99999", alignItems: "center", width: "100%", height: "100vh"}}>
           <SquareLoader
                color={"#f10000"}
                loading={true}
                cssOverride={override}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> 
        </div>
    )
}

export default Spinner