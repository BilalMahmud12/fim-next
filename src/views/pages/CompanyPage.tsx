'use client'
import React from 'react'
import FlexBox from "@components/FlexBox";
import Breadcrumbs from '@components/Breadcrumbs';
import HeroSection from '@views/pageSections/companyPage/heroSection';
import TabsSection from '@views/pageSections/companyPage/tabsSection';
import VideoSection from '@views/pageSections/companyPage/videoSection';
import ProjectsSection from '@views/pageSections/companyPage/projectsSection';
import MessageSection from '@views/pageSections/companyPage/messageSection';

interface CompanyPageProps {
    data: any;
}

const CompanyPage: React.FC<CompanyPageProps> = (props) => {
    const { data } = props;
    
    const {
        Sections = [],
        CallToAction
    } = data

    const breadcrumbs = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Our Companies',
            href: '/'
        },
        {
            label: data.name,
            href: `/our-companies/${data.slug}`
        }
    ]

    return (
        <FlexBox flexDirection="column">
            <Breadcrumbs items={breadcrumbs} />

            {Sections?.length > 0 &&
                Sections.map((section: any, index: number) => {
                    switch (section.__component) {
                        case 'shared.video':
                            return <HeroSection videoUrl={section?.URL} coverImage={section?.Cover?.url} key={`${section.__component}-${index}`} />
                        case 'sections.tabs':
                            return <TabsSection tabs={section.TabsContent?.map(tabContent => ({
                                header: tabContent.Title,
                                content: {
                                    title: tabContent.Header,
                                    subTitle: tabContent.SubHeader,
                                    image: tabContent.Cover.url,
                                    textContent: tabContent.TextContent.map(text => ({
                                        title: text.Title,
                                        content: text.Paragraph
                                    }))
                                }
                            }))}
                                key={`${section.__component}-${index}`}
                            />
                        case 'shared.video-section':
                            return <VideoSection videoUrl={section.URL} coverImage={section.Cover.url} key={`${section.__component}-${index}`} />
                        case 'sections.services-grid':
                            return <ProjectsSection
                                title={section.Title}
                                projectsData={section.GridItems?.map(ServiceItem => ({
                                    title: ServiceItem.Title,
                                    description: ServiceItem.Description,
                                    bg: ServiceItem.Cover.url,
                                    linkLabel: ServiceItem.LinkLabel,
                                    linkUrl: ServiceItem.LinkUrl ?? ''
                                }))}

                                key={`${section.__component}-${index}`}
                            />
                        default:
                            return null
                    }
                })
            }

            <MessageSection messageData={
                {
                    title: CallToAction.Title,
                    message: CallToAction.Message,
                    websiteURL: CallToAction.WebsiteURL,
                    websiteLabel: CallToAction.WebsiteLabel,
                    phone: CallToAction.Phone,
                    slogan: CallToAction.Slogan
                }
            } />

        </FlexBox>
    )
}

export default CompanyPage