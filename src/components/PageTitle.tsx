'use client'
import React from 'react'
import styled from 'styled-components'
import { media } from "@utils/constants"
import Container from './Container'
import FlexBox from '@components/FlexBox'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
      <StyledPageTitle>
          <Container>
              <FlexBox alignItems="center" justifyContent="center" className='title-wrapper'>
                  <h1>{title}</h1>
              </FlexBox>
          </Container>
      </StyledPageTitle>
  )
}

export default PageTitle

const StyledPageTitle = styled.div`
    .title-wrapper {
        padding: 1rem 0;
        border-bottom: 1px solid #333;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        color: ${({ theme }) => theme.colors.beige};
        margin: 0;

        ${media.desktop} {
            font-size: 2rem;
        }
    }
`