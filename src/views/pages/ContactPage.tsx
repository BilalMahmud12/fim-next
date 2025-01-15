'use client'
import React from 'react'
import FlexBox from "@components/FlexBox";
import Breadcrumbs from '@components/Breadcrumbs';
import Container from "@components/Container";
import PageTitle from '@components/PageTitle';
import { StyledContactPage } from "./styles";

const breadcrumbs = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Contact Us',
    href: '/contact'
  }
]

const ContactPage: React.FC = () => {
  return (
    <StyledContactPage>
      <FlexBox flexDirection="column">
        <Breadcrumbs items={breadcrumbs} />
        <PageTitle title="Contact Us" />
        
        <Container pt="1rem" pb="2rem">
          <div className='contact-header'>
            <p>“WITH US, YOU CAN START EARLY, EARN MORE, & BUILD WEALTH”</p>
            <p>LET’S INVEST TOGETHER</p>
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

        </Container>
      </FlexBox>
    </StyledContactPage>
  )
}

export default ContactPage