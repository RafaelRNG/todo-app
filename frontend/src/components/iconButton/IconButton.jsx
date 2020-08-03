import React from "react";
import If from "../../template/if/If.jsx";

function IconButton(props) {
    return (
        <If test={!props.hide}>
            <button className={`btn btn-${props.btnStyle}`}
                onClick={props.click}>
                <i className={`fa fa-${props.icon}`}></i>
            </button>
        </If>
    )


}

export default IconButton;