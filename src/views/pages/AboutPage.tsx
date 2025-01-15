'use client'
import React from "react"
import FlexBox from "@components/FlexBox";
import Breadcrumbs from '@components/Breadcrumbs';
import Container from "@components/Container";
import PageTitle from '@components/PageTitle';
import { StyledAboutPage, StyledAboutSections } from "./styles";

const breadcrumbs = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About Us',
        href: '/about'
    }
]

interface AboutUsContent {
    title: string,
    description: string,
    image: string,
    contentId: string
}

interface AboutPageProps {
    aboutUsContent: AboutUsContent[]
}

const AboutPage: React.FC<AboutPageProps> = ({ aboutUsContent = [] }) => {
    return (
        <StyledAboutPage>
            <FlexBox flexDirection="column">
                <Breadcrumbs items={breadcrumbs} />
                <PageTitle title="About Us" />
                <Container>
                    <StyledAboutSections>
                        <div className='about-tiles'>
                            {
                                aboutUsContent?.map((content, index) => (
                                    <div id={content.contentId} className='about-tile' key={index}>
                                        <div className='about-tile-content'>
                                            <h2 className="title">{content.title}</h2>
                                            <p className="description">{content.description}</p>
                                        </div>

                                        <div className='about-tile-image'>
                                            <img src={content.image} alt={content.title} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </StyledAboutSections>
                </Container>
            </FlexBox>
        </StyledAboutPage>
    )
}

export default AboutPage