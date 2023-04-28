import React from "react";

function Display (props) {
    return(
        <div>
            <p> Current currency is {props.currency}</p>
        </div>
    );
}

export default Display;