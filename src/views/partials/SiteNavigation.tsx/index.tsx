'use client'
import React from 'react'
import { useGlobalSettings } from '@context/GlobalSettingsContext';
import { StyledSiteNavigation } from './styles'
import Container from '@components/Container'
import Link from 'next/link'
import { useMenu } from '@context/MenuContext'


const SiteNavigation: React.FC = () => {
  const { closeMenu } = useMenu();
  const globalSettings = useGlobalSettings();
  const { siteNavigation: navigation } = globalSettings;
  
  return (
      <StyledSiteNavigation>
        <Container className='menu-container'>
            <div className='nav-header'>
                <p>MENU</p>
            </div>
            <div className='nav-body'>
              <nav>
                <ul className='parent-links'>
                  {
                    navigation.map((item, index) => (
                      <li className='parent-list-item' key={index}>
                        <Link href={`${item.href}`} className='parent-link' onClick={() => closeMenu()}>
                          <span>0{index + 1}</span>
                          <span>{item.name}</span>
                        </Link>

                        {
                          item.subMenu && (
                            <ul className='child-links'>
                              {
                                item.subMenu.map((subItem, subIndex) => (
                                  <li className='child-list-item' key={subIndex}>
                                    <Link href={`${subItem.href}`} className='child-link' onClick={() => closeMenu()}>
                                      <span>0{subIndex + 1}</span>
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))
                              }
                            </ul>
                          )
                        }
                      </li>
                    ))
                  }
                </ul>
              </nav>
              
            </div>
            <div className='customer-support'>
                <p>CUSTOMER SUPPORT</p>
                <p>T: +971 (4) 000 0000</p>
                <p>E: info@fiminvestment.ae</p>
            </div>
            <div className='email-subscription'>
                <div>
                    <p>EMAIL</p>
                    <input type="text" placeholder='name@email.com' />
                </div>
                <div className='sub-line'>
                    <p>Subscribe to our newsletter and news</p>
                    <button>
                      <span>ok</span>
                    </button>
                </div>
            </div>
        </Container>
      </StyledSiteNavigation>
  )
}

export default SiteNavigation