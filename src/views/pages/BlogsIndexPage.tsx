'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import FlexBox from "@components/FlexBox";
import Breadcrumbs from '@components/Breadcrumbs';
import Container from "@components/Container";
import Typography from '@components/Typography';
import PageTitle from '@components/PageTitle';
import { StyledBlogsIndexPage, StyledBlogsSection } from "./styles";

const breadcrumbs = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Blogs',
    href: '/blogs'
  }
]

interface BlogTileProps {
  title: string;
  image: string;
  href: string;
}

interface BlogsIndexPageProps {
  blogs: BlogTileProps[];
}

const BlogsIndexPage: React.FC<BlogsIndexPageProps> = ({ blogs }) => {
  return (
    <StyledBlogsIndexPage>
      <FlexBox flexDirection="column">
        <Breadcrumbs items={breadcrumbs} />
        <PageTitle title="Blogs" />
        <Container>
          <StyledBlogsSection>
            {blogs.length > 0 &&
            <div className='blog-grid'>
              {
                blogs.map((post, index) => (
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
            }
          </StyledBlogsSection>
        </Container>
      </FlexBox>
    </StyledBlogsIndexPage>
  )
}   

export default BlogsIndexPage