'use client'
import React from 'react'
import styled from 'styled-components'
import FlexBox from '@components/FlexBox'
import Container from './Container'
import Link from 'next/link'
import { MdArrowForwardIos } from "react-icons/md";

interface BreadcrumbsProps {
    items: {
        label: string
        href: string
    }[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    //console.log('items', items)
    
    return (
        <StyledBreadcrumbs>
            <Container>
                <FlexBox className="breadcrumb">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link href={item.href ?? ''}>{item.label}</Link>
                            {index < items.length - 1 && 
                              <span className='arrow'>
                                <MdArrowForwardIos fontSize={20} />
                              </span>
                            }
                        </React.Fragment>
                    ))}
                </FlexBox>
            </Container>
        </StyledBreadcrumbs>
    )
}

export default Breadcrumbs

const StyledBreadcrumbs = styled.div`
  .breadcrumb {
    padding: .75rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.beige};
    border-bottom: 1px solid #333;

    a {
      color: ${({ theme }) => theme.colors.beige};
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.beige};
      }
    }

    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: .75rem;
        height: .75rem;
        fill: ${({ theme }) => theme.colors.beige};
      }

    }

    
  }
`