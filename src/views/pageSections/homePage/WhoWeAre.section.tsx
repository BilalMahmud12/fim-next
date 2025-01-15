'use client'
import React from 'react'
import HomeSection from '@views/partials/HomeSection';
import { StyledWhoWeAreSection } from "./styles"
import FlexBox from "@components/FlexBox";
import Typography, { Paragraph } from '@components/Typography';
import { convertMarkdownToHtml } from '@utils/helpers';
import Image from 'next/image';

const aboutTilesData = [
    {
        value: 'Explore different investment opportunities.',
    },
    {
        value: 'Understand the time horizon of our clients.',
    },
    {
        value: 'Customize our clients’ strategies to meet their needs.',
    },
    {
        value: 'Build a diversified investment portfolio.',
    }
]

interface WhoWeAreProps {
    about: any;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ about }) => {
    const { SectionContent, Cover, Tiles } = about
    const [contentHtml, setContentHtml] = React.useState<string>('');

    React.useEffect(() => {
        if (SectionContent) {
            convertMarkdownToHtml(SectionContent).then((html) => {
                setContentHtml(html);
            });
        }
    }, [SectionContent]);

    return (
        <HomeSection id='who-we-are' title='Who We Are'>
            <StyledWhoWeAreSection>
                <FlexBox className="content-wrapper" flexDirection="column" alignItems="center">
                    <div 
                        className='intro'
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                        
                    <div className='about-tiles'>
                        {
                            Tiles?.map((item, index) => (
                                <div key={index} className='about-tile'>
                                    <Typography variant='h3' className='value'>{item.Content}</Typography>
                                </div>
                            ))
                        }
                    </div>

                    <div className='about-image'>
                        <Image src={Cover?.url} alt='About Us' width={1000} height={500} />
                    </div>
                </FlexBox>
            </StyledWhoWeAreSection>
        </HomeSection>
    )
}

export default WhoWeAre