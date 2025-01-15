'use client'
import React from 'react'
import FlexBox from "@components/FlexBox";
import Breadcrumbs from '@components/Breadcrumbs';
import Container from "@components/Container";
import PageTitle from '@components/PageTitle';
import { StyledInvestWithUsPage } from "./styles";

const breadcrumbs = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Invest With Us',
        href: '/invest-with-us'
    }
]

const InvestWithUs: React.FC = () => {
    return (
        <StyledInvestWithUsPage>
            <FlexBox flexDirection="column">
                <Breadcrumbs items={breadcrumbs} />
                <PageTitle title="Invest With Us" />

                <Container pt="1rem" pb="2rem">
                    <div className='contact-header'>
                        <p>“WITH US, YOU CAN START EARLY, EARN MORE, & BUILD WEALTH”</p>
                        <p>JOIN OUR TEAM</p>
                    </div>

                    <div className='contact-form'>
                        <form action="">
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email Address' />
                            <input type="tel" placeholder='Phone Number' />
                            <input type="text" placeholder='Subject' />
                            <textarea name="" id="" cols={30} rows={10} placeholder='Message'></textarea>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>

                    <div className='contact-header'>
                        <p>OUR ADDRESS</p>
                    </div>

                    <div className='address-map'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.653537046106!2d55.13635735557254!3d25.0709246946763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca6ce6fffff%3A0xdfa26bf90a631a2c!2sJumeirah%20Business%20Center%203%20(JBC-3)!5e0!3m2!1sen!2str!4v1731422106928!5m2!1sen!2str" 
                            width="100%" 
                            height="350" 
                            style={{ border: 0 }} 
                            allowFullScreen={false}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </Container>
            </FlexBox>
        </StyledInvestWithUsPage>
    )
}

export default InvestWithUs