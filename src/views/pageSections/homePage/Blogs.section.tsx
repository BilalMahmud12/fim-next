'use client'
import React from 'react'
import HomeSection from '@views/partials/HomeSection';
import Typography from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { StyledBlogsSection } from "./styles"

interface BlogPost {
    id: string;
    title: string;
    image: string;
    href: string;
}

interface BlogsSectionProps {
    blogPosts: BlogPost[];
}


const Blogs: React.FC<BlogsSectionProps> = ({ blogPosts }) => {
    return (
        <HomeSection id='our-blogs' title='Blogs' padding='0 0 4rem 0'>
            <StyledBlogsSection>
                <div className='blog-grid'>
                    {
                        blogPosts?.map((post, index) => (
                            <Link href={`/blogs/${post.href}`} key={index}>
                                <div className='blog-tile'>
                                    <div className='title-area'>
                                        <Typography variant='h6' className='blog-title'>{post.title}</Typography>
                                    </div>
                                    <div className='media-area'>
                                        <Image src={post.image} alt={post.title} width={300} height={200} />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </StyledBlogsSection>
        </HomeSection>
    )
}

export default Blogs