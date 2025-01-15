'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import FlexBox from "@components/FlexBox";
import Breadcrumbs from '@components/Breadcrumbs';
import Container from "@components/Container";
import PageTitle from '@components/PageTitle';
import Typography from '@components/Typography';
import { StyledServicesPage, StyledOurServicesSection } from "./styles";

const breadcrumbs = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Services',
        href: '/services'
    }
]

const servicesTilesData = [
  {
    title: 'BUSINESS EXPANSION',
    description:
      'We help entrepreneurs and business owners grow their businesses by connecting them with the right investors. We also assist business owners that wish to set up another business location in Dubai/United Arab Emirates. The process of business expansion can be a very tricky one.',
    value:
      'As a business owner, there is the need to enter a new market, merge with an existing business, or spread your business wings to a new land.',
    bg: '/images/bgs/services_1.jpg',
    readMore: '/services/business-expansion',
  },
  {
    title: 'IDEA PARTNERSHIP',
    description:
      'You have an innovative idea, it looks lucrative and refined and you are looking for a partnership to bring your ideas to reality? FIM Investment is the right place for you.',
    value:
      'We do not only partner with your ideas, we also make offers to buy the whole concept and rights to ownership. There are a lot of investors and companies that are willing to pay for your ideas.',
    bg: '/images/bgs/services_2.jpg',
    readMore: '/services/idea-partnership',
  },
  {
    title: 'FRANCHIS BUSINESS',
    description:
      'A lot of times, a business idea might look too bulky that you become too scared of taking a launch. Will it work out fine? What are some market challenges that might hinder the growth of your business?',
    value:
      'We partner with small-medium enterprises with refined ideas and presentations. Does your business concept sound innovative? Reach out to us, let’s take your idea to the next level.',
    bg: '/images/bgs/services_3.jpg',
    readMore: '/services/franchis-business',
  },
  {
    title: 'INVESTOR FUNDING',
    description:
      'A lot of times, a business idea might look too bulky that you become too scared of taking a launch. Will it work out fine? What are some market challenges that might hinder the growth of your business?',
    value:
      'We partner with small-medium enterprises with refined ideas and presentations. Does your business concept sound innovative? Reach out to us, let’s take your idea to the next level.',
    bg: '/images/bgs/services_4.jpg',
    readMore: '/services/investor-funding',
  }
];

interface ServiceTileProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ServiceTilesProps {
  services: ServiceTileProps[];
}

const ServicesPage: React.FC<ServiceTilesProps> = ({ services }) => {
  return (
    <StyledServicesPage>
      <FlexBox flexDirection="column">
        <Breadcrumbs items={breadcrumbs} />
        <PageTitle title="Our Services" />
        <Container>
          <StyledOurServicesSection>
            <div className='services-tiles'>
              {
                services.map((item, index) => (
                  <div key={index} className='services-tile'>
                    <div className='service'>
                      <Typography variant='h3' className='title'>{item.title}</Typography>
                      <Typography variant='p' className='description'>{item.description}</Typography>
              
                      <Link href={`/services/${item.slug}`} className='read-more'>
                        <span>Read More</span>
                      </Link>
                    </div>

                    <div className='media'>
                      <Image src={item.image} alt='About Us' width={500} height={300} />
                    </div>
                  </div>
                ))
              }
            </div>
          </StyledOurServicesSection>
        </Container>
      </FlexBox>
    </StyledServicesPage>
  )
}

export default ServicesPage