'use client'
import React from "react"
import Link from 'next/link'
import { StyledHeaderSocial } from "../styles"
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

interface HeaderSocialProps {
    socialLinks: {
        twitter: string;
        linkedin: string;
        instagram: string;
        facebook: string;
        youtube: string;
    }
}

const HeaderSocial: React.FC<HeaderSocialProps> = (props) => {
    const { socialLinks } = props

    return (
        <StyledHeaderSocial>
            <ul>
                <li>
                    <Link href={socialLinks.twitter} target="_blank"><BsTwitterX fontSize="16px" /></Link>
                </li>
                <li>
                    <Link href={socialLinks.instagram} target="_blank"><FaInstagram fontSize="20px" /></Link>
                </li>
                <li>
                    <Link href={socialLinks.facebook} target="_blank"><FaFacebookF fontSize="18px" /></Link>
                </li>
                <li>
                    <Link href={socialLinks.linkedin} target="_blank"><FaLinkedinIn fontSize="20px" /></Link>
                </li>
                <li>
                    <Link href={socialLinks.youtube} target="_blank"><FaYoutube fontSize="22px" /></Link>
                </li>
            </ul>
        </StyledHeaderSocial>
    )
}

export default HeaderSocial