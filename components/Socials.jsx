import Link from 'next/link';
import React from 'react';
import {FaGithub, FaFacebook, FaLinkedin,FaTwitter} from "react-icons/fa"

const socials=[
    {icon:<FaGithub/>, path:"https://github.com/harunjk"},
    {icon:<FaFacebook/>, path:"https://www.facebook.com/harun7115/"},
    {icon:<FaLinkedin/>, path:""},
    {icon:<FaTwitter/>, path:""},
]

const Socials = ({containerStyle, iconStyle}) => {
    return (
        <div className={containerStyle}>
            {
                socials.map((item,index)=>{
                    return <Link href={item.path} key={index} className={iconStyle}>{item.icon}</Link>
                })
            }
        </div>
    );
};

export default Socials;