'use client';
import React, { useRef } from 'react';
import HomeSection from '@views/partials/HomeSection';
import Typography from '@components/Typography';
import Image from 'next/image';
import { StyledOurOfferingsSection } from "./styles";


interface Props {
    offers: any
}

const OurOfferings: React.FC<Props> = ({ offers }) => {
    const { CardsGrid } = offers
    const offeringsRef = useRef<HTMLDivElement | null>(null);

    return (
        <HomeSection id='our-offerings' title='Our Offerings' bg='#1f2d1f'>
            <StyledOurOfferingsSection>
                <div className='offering-tiles' ref={offeringsRef}>
                    {
                        CardsGrid?.map((item, index) => (
                            <div key={index} className='offering-tile'>
                                <div className='hover-bg'>
                                    <div className='overlay'></div>
                                    <Image src={item.Cover.url} alt='About Us' width={1000} height={500} />
                                </div>
                                <Typography variant='h3' className='value'>{item.Title}</Typography>
                            </div>
                        ))
                    }
                </div>
            </StyledOurOfferingsSection>
        </HomeSection>
    );
}

export default OurOfferings;
