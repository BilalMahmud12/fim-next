'use client'
import React from 'react'
import FlexBox from "@components/FlexBox";
import CompaniesSection from '@views/pageSections/homePage/companies.section';
import WhoWeAreSection from '@views/pageSections/homePage/WhoWeAre.section'
import HowWeDoBusinessSection from '@views/pageSections/homePage/HowWeDoBusiness.section'
import OurServicesSection from '@views/pageSections/homePage/OurServices.section'
import OurOfferingsSection from '@views/pageSections/homePage/OurOfferings.section'
import BlogsSection from '@views/pageSections/homePage/Blogs.section'

interface HomePageProps {
  companies: any[];
  services: any[];
  blogPosts: {
    data: any[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };
  business: any;
  about: any;
  offers: any;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { companies, services, blogPosts, business, about, offers } = props

  return (
      <FlexBox flexDirection="column">
        <CompaniesSection 
          companies={
            companies.map(company => ({ 
              id: company.id, 
              name: company.name,
              slug: company.slug, 
              logo_src: company.Logo.url,
              hover_image_src: company.Cover.url,
              slides: company?.Slider?.Slides
          }))} 
        />
      
        <HowWeDoBusinessSection business={business}/>
        <WhoWeAreSection about={about} />
        <OurOfferingsSection offers={offers} />

        <OurServicesSection
          services={services.map(service => ({
            id: service.id,
            title: service.Title,
            slug: service.Slug,
            description: service.Exerpt,
            bg: service.Cover.url,
          }))}
        />

        <BlogsSection 
          blogPosts={blogPosts?.data?.map(post => ({
            id: post.id,
            title: post.Title,
            href: post.Slug,
            image: post.Cover.url,
          })) || []}
        />
      </FlexBox>
  )
}

export default HomePage