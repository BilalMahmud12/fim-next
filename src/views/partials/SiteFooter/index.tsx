'use client'
import React from "react"
import Link from 'next/link'
import { useGlobalSettings } from '@context/GlobalSettingsContext';
import { StyledFooter } from "./styles"
import Container from "@components/Container"
import Box from "@components/Box"
import FlexBox from "@components/FlexBox"
import Typography from "@components/Typography"
import HeaderLogo from "../SiteHeader/src/HeaderLogo"

const SiteFooter: React.FC = () => {
    const globalSettings = useGlobalSettings();
    const { footer } = globalSettings

    return (
        <React.Fragment>
            <StyledFooter>
               {/* <Box className="footer-top">
                    <Container>
                        <Typography variant="p">
                            We are the investment industry champions, with over fifteen years of experience.
                        </Typography>
                    </Container>
                </Box>  */}

                {/* Complete footer-middle section */}
                <Box className="footer-middle">
                    <div className="footer-grid">
                        
                        <div className="footer-logo-links">
                            <div className="footer-logo">
                                <HeaderLogo />
                            </div>
                            

                            <ul className="footer-links">
                                {footer.footer_menu.map(link => (
                                    <li key={link.id}>
                                        <Link href={link.path} target={link.external ? '_blank' : ''}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <div className="address">
                                <p>{footer.contacts.address}</p>
                                <p>Phone: {footer.contacts.phone}</p>
                                <p>Email: {footer.contacts.email}</p>
                                
                            </div>

                            <div className="subscribe">
                                <p>{footer.newsLetter_label}</p>
                                <label htmlFor="email">{footer.newsLetter_message}</label>

                                <div className="subscribe-form">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="subscribe-input"
                                        autoComplete="off"
                                    />
                                    <button className="subscribe-button">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>

                <Box className="footer-bottom">
                    <Container>
                        <Typography variant="p">
                            {footer.copyright}
                        </Typography>
                    </Container>
                </Box>
            </StyledFooter>
        </React.Fragment>
    )
}

export default SiteFooter;
