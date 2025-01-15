'use client'
import React from 'react'
import Container from '@components/Container';
import Typography from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { StyledProjectsSection } from './styles'

interface ProjectsSectionProps {
    title: string;
    projectsData: {
        title: string;
        description: string;
        value: string;
        bg: string;
        linkLabel: string;
        linkUrl: string;
    }[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
    const { projectsData, title } = props

    return (
        <StyledProjectsSection>
            <Container>
                <h2 className='section-title'>{title}</h2>

                <div className='project-tiles'>
                    {
                        projectsData.map((item, index) => (
                            <div key={index} className='project-tile'>
                                <div className='project'>
                                    <Typography variant='h3' className='title'>{item.title}</Typography>
                                    <Typography variant='p' className='description'>{item.description}</Typography>
                                    <Typography variant='p' className='value'>{item.value}</Typography>

                                    <Link href={item.linkUrl} className='read-more'>
                                        <span>{item.linkLabel}</span>
                                    </Link>
                                </div>

                                <div className='media'>
                                    <Image src={item.bg} alt='About Us' width={500} height={300} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                </Container>
        </StyledProjectsSection>   
    )
}

export default ProjectsSection