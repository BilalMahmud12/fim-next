'use client'
import React from 'react'
import FlexBox from "@components/FlexBox";
import Breadcrumbs from '@components/Breadcrumbs';
import PageTitle from '@components/PageTitle';
import CompaniesSection from '@views/pageSections/homePage/companies.section';

const breadcrumbs = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Our Companies',
        href: '/companies'
    }
]

interface Props {
    companies: any[]
}

const CompaniesPage: React.FC<Props> = ({ companies }) => {
    return (
        <FlexBox flexDirection="column">
            <Breadcrumbs items={breadcrumbs} />
            <PageTitle title="Our Companies" />
            <CompaniesSection
                companies={
                    companies.map(company => ({
                        id: company.id,
                        name: company.name,
                        slug: company.slug,
                        logo_src: company?.Logo?.url,
                        hover_image_src: company?.Cover?.url,
                        slides: company?.Slider?.Slides
                    }))}
            />
            
        </FlexBox>
    )
}

export default CompaniesPage