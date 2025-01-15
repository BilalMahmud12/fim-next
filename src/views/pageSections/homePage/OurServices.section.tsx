'use client'
import React from 'react'
import HomeSection from '@views/partials/HomeSection';
import Typography from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { StyledOurServicesSection } from "./styles"

interface ServiceCard {
    title: string;
    slug: string;
    description: string;
    bg: string;
}

interface OurServicesSectionProps {
    services: ServiceCard[];
}

const OurServices: React.FC<OurServicesSectionProps> = ({ services }) => {
    return (
        <HomeSection id='our-services' title='Our Services'>
            <StyledOurServicesSection>
                <div className='services-tiles'>
                    {
                        services.map((item, index) => (
                            <div key={index} className='services-tile'>
                                <div className='service'>
                                    <Typography variant='h3' className='title'>{item.title}</Typography>
                                    <Typography variant='p' className='description'>{item.description}</Typography>
                                    {/* <Typography variant='p' className='value'>{item.value}</Typography> */}

                                    <Link href={`/services/${item.slug}`} className='read-more'>
                                       <span>Read More</span>
                                    </Link>
                                </div>

                                <div className='media'>
                                    <Image src={item.bg} alt='About Us' width={500} height={300} />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='contact-message'>
                    <Typography variant='h3' className='title'>“WITH US, YOU CAN START EARLY, EARN MORE, & BUILD WEALTH”</Typography>
                </div>

                <div className='contact-form'>
                    <Typography variant='h3' className='title'>LET’S INVEST TOGETHER</Typography>

                    <form action="">
                        <input type="text" placeholder='Full Name' />
                        <input type="email" placeholder='Email Address' />
                        <input type="tel" placeholder='Phone Number' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="" id="" cols={30} rows={10} placeholder='Message'></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </StyledOurServicesSection>
        </HomeSection>
    )
}

export default OurServices