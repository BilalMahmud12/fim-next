'use client'
import React from 'react'
import styled from 'styled-components'
import { media } from "@utils/constants"
import Container from '@components/Container'

const AboutSection: React.FC = () => {
  return (
      <StyledAboutSection>
          <Container>
              <h1>About Us</h1>
          </Container>
      </StyledAboutSection>
  )
}

export default AboutSection

const StyledAboutSection = styled.section`
    
`