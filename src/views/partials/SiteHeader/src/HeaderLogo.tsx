'use client'
import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { StyledHeaderLogo } from "../styles"
import { useMenu } from '@context/MenuContext'

const HeaderLogo: React.FC = () => {
    const { closeMenu } = useMenu();
    return (
        <StyledHeaderLogo>
            <Link href={'/'} className='logo' onClick={() => closeMenu()}>
                <Image
                    src={'/FIM_Logo_Light.svg'}
                    width={90}
                    height={70}
                    alt='FIM Investment'
                    priority
                />
            </Link>
        </StyledHeaderLogo>
    )
}

export default HeaderLogo

