'use client'
import React from 'react'
import { useGlobalSettings } from '@context/GlobalSettingsContext';
import { useMenu } from '@context/MenuContext'
import Container from '@components/Container'
import HeaderLogo from './src/HeaderLogo'
import HeaderSocial from './src/HeaderSocial'
import MenuButton from './src/MenuButton'
import SiteNavigation from '../SiteNavigation.tsx'
import { StyledHeader } from './styles'

const SiteHeader: React.FC = () => {
    const globalSettings = useGlobalSettings();
    const { socialLinks } = globalSettings;

    const { openMenu, closeMenu, isMenuOpen } = useMenu();

    const handleMenuButtonClick = () => {
        isMenuOpen ? closeMenu() : openMenu(<SiteNavigation />)
    }

    return (
        <StyledHeader>
            <Container>
                <div className='header-wrapper'>
                    <div className='header-section header-left'>
                        <HeaderLogo />
                    </div>
                    <div className='header-section header-middle'>
                        <MenuButton 
                            onClick={handleMenuButtonClick} 
                            isMenuOpen={isMenuOpen} 
                        />
                    </div>
                    {/* <div className='header-section header-right'>
                        <HeaderSocial socialLinks={socialLinks} />
                    </div> */}
                    <div className='header-section header-right'>
                        <HeaderSocial socialLinks={socialLinks} />
                    </div>
                </div>
            </Container>
        </StyledHeader>
    )
}

export default SiteHeader;