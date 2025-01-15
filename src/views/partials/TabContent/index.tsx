'use client'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { media } from '@utils/constants'

type TabContent = {
    title: string;
    subTitle: string;
    image: string;
    textContent: {
        title: string;
        content: string;
    }[]
}

const TabContent: React.FC<{ 
    content: TabContent
}> = ({ 
    content
}) => {
    return (
        <StyledTabContent>
            <div className='header'>
                <div className='title'>{content.title}</div>
                <div className='sub-title'>{content.subTitle}</div>
            </div>
            <div className='tab-content'>
                <div className='grid-container'>
                    <div className='text-area'>
                        {content.textContent.map((item, index) => (
                            <div key={index} className='text-item'>
                                <div className='title'>{item.title}</div>
                                <div className='content'>{item.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className='image-area'>
                        <Image
                            src={content.image}
                            alt={content.title}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <span>Call us now</span>
                <span>to discuss the best options with our experts</span>
            </div>
        </StyledTabContent>
    )
}

export default TabContent

const StyledTabContent = styled.section`
    .header {
        font-family: var(--font-montserrat);
        color: ${({ theme }) => theme.colors.beige};

        .title {
            padding: 1.5rem;
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-color: ${({ theme }) => theme.colors.lightGrey};
            text-align: center;
            font-size: 1.5rem;
            font-weight: 300;
        }

        .sub-title {
            padding: 2.5rem;
            text-align: center;
            font-size: .9rem;
            font-weight: 200;
            color: ${({ theme }) => theme.colors.lightGrey};
        }

    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
        padding: 2.5rem;
        text-align: center;
        font-size: .9rem;
        font-weight: 200;
        color: ${({ theme }) => theme.colors.lightGrey};

        span {
            &:first-child {
                font-size: .9rem;
                font-weight: 500;
                color: ${({ theme }) => theme.colors.beige};
            }
        
            &:last-child {
                font-size: .9rem;
                font-weight: 500;
                color: ${({ theme }) => theme.colors.lightGrey};
            }
        }
    }


    .tab-content {
        font-family: var(--font-montserrat);
        color: ${({ theme }) => theme.colors.beige};

        .grid-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
            

            ${media.desktop} {
                grid-template-columns: repeat(2, 1fr);
                max-height: 550px;
            }

            .image-area {
                width: 100%;
                height: 550px;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }

            .text-area {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                
                ${media.desktop} {
                    border-right: 1px solid;
                    border-color: ${({ theme }) => theme.colors.lightGrey};
                }

                .text-item {
                    padding: 1.9rem 1.5rem;
                    height: 100%;

                    &:first-child {
                        border-bottom: 1px solid;
                        border-color: ${({ theme }) => theme.colors.lightGrey};
                    }
                }

                .title {
                    font-size: .9rem;
                    font-weight: 500;
                    color: ${({ theme }) => theme.colors.beige};
                    margin-bottom: .5rem;
                }

                .content {
                    font-size: .9rem;
                    font-weight: 200;
                    color: ${({ theme }) => theme.colors.lightGrey};
                    text-align: justify;
                    line-height: 1.25rem;
                }
            }
        }
    }
`