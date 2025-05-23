import React from "react";

const SocialLogin = ({className, children, ...props})=>{
    return(
        <div {...props} className={className}>
            {children}
        </div>
    );
}
export default SocialLogin;